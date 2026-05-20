$portDepart = 8080
$racine = Split-Path -Parent $MyInvocation.MyCommand.Path
$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".png" = "image/png"
  ".svg" = "image/svg+xml; charset=utf-8"
  ".webmanifest" = "application/manifest+json; charset=utf-8"
}

function Get-AdresseWifi {
  $adresse = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
    Where-Object { $_.IPAddress -notlike "127.*" -and $_.PrefixOrigin -ne "WellKnown" } |
    Select-Object -First 1 -ExpandProperty IPAddress

  if ($adresse) {
    return $adresse
  }

  return "adresse-du-PC"
}

function Get-TypeContenu($chemin) {
  $extension = [System.IO.Path]::GetExtension($chemin)

  if ($types.ContainsKey($extension)) {
    return $types[$extension]
  }

  return "application/octet-stream"
}

$adresseWifi = Get-AdresseWifi
$listener = $null
$port = $null

foreach ($portCandidat in $portDepart..8090) {
  try {
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $portCandidat)
    $listener.Start()
    $port = $portCandidat
    break
  } catch {
    $listener = $null
  }
}

if (-not $listener) {
  Write-Host ""
  Write-Host "Impossible de demarrer le serveur entre les ports $portDepart et 8090."
  Write-Host "Ferme les autres serveurs deja lances, ou redemarre le PC si besoin."
  Write-Host ""
  exit 1
}

Write-Host ""
Write-Host "Pilier du foyer est pret pour l'iPhone."
Write-Host ""
Write-Host "Ouvre Safari sur l'iPhone puis va sur :"
Write-Host "http://$adresseWifi`:$port/"
Write-Host ""
Write-Host "Garde cette fenetre ouverte pendant le test."
Write-Host "Pour arreter le serveur, ferme cette fenetre."
Write-Host ""

while ($true) {
  $client = $listener.AcceptTcpClient()

  try {
    $stream = $client.GetStream()
    $lecteur = [System.IO.StreamReader]::new($stream)
    $ligneRequete = $lecteur.ReadLine()

    if (-not $ligneRequete) {
      $client.Close()
      continue
    }

    $morceaux = $ligneRequete.Split(" ")
    $cheminDemande = "/"

    if ($morceaux.Length -ge 2) {
      $cheminDemande = [System.Uri]::UnescapeDataString($morceaux[1])
    }

    if ($cheminDemande.Contains("?")) {
      $cheminDemande = $cheminDemande.Split("?")[0]
    }

    if (-not $cheminDemande) {
      $cheminDemande = "/"
    }

    while ($lecteur.ReadLine()) {}

    if ($cheminDemande -eq "/") {
      $cheminDemande = "/index.html"
    }

    $cheminRelatif = $cheminDemande.TrimStart("/") -replace "/", [System.IO.Path]::DirectorySeparatorChar
    $cheminFichier = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($racine, $cheminRelatif))

    if (-not $cheminFichier.StartsWith($racine)) {
      $contenu = [System.Text.Encoding]::UTF8.GetBytes("Acces refuse")
      $entete = "HTTP/1.1 403 Forbidden`r`nContent-Length: $($contenu.Length)`r`nContent-Type: text/plain; charset=utf-8`r`nConnection: close`r`n`r`n"
      $octetsEntete = [System.Text.Encoding]::ASCII.GetBytes($entete)
      $stream.Write($octetsEntete, 0, $octetsEntete.Length)
      $stream.Write($contenu, 0, $contenu.Length)
      $client.Close()
      continue
    }

    if (-not [System.IO.File]::Exists($cheminFichier)) {
      $contenu = [System.Text.Encoding]::UTF8.GetBytes("Fichier introuvable")
      $entete = "HTTP/1.1 404 Not Found`r`nContent-Length: $($contenu.Length)`r`nContent-Type: text/plain; charset=utf-8`r`nConnection: close`r`n`r`n"
      $octetsEntete = [System.Text.Encoding]::ASCII.GetBytes($entete)
      $stream.Write($octetsEntete, 0, $octetsEntete.Length)
      $stream.Write($contenu, 0, $contenu.Length)
      $client.Close()
      continue
    }

    $contenu = [System.IO.File]::ReadAllBytes($cheminFichier)
    $typeContenu = Get-TypeContenu $cheminFichier
    $entete = "HTTP/1.1 200 OK`r`nContent-Length: $($contenu.Length)`r`nContent-Type: $typeContenu`r`nConnection: close`r`n`r`n"
    $octetsEntete = [System.Text.Encoding]::ASCII.GetBytes($entete)
    $stream.Write($octetsEntete, 0, $octetsEntete.Length)
    $stream.Write($contenu, 0, $contenu.Length)
  } catch {
    Write-Host "Une requete n'a pas pu etre servie."
  } finally {
    $client.Close()
  }
}
