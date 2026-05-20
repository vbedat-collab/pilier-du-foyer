const cacheName = "pilier-du-foyer-v58";
const fichiersACacher = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./src/main.js?v=58",
  "./src/styles.css?v=58",
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore-compat.js",
  "./src/app-icon.svg",
  "./notre%20cuisine%20pluss.png",
  "https://unpkg.com/react@18/umd/react.development.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(fichiersACacher))
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((nomsCaches) =>
      Promise.all(
        nomsCaches
          .filter((nomCache) => nomCache !== cacheName)
          .map((nomCache) => caches.delete(nomCache))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((reponse) => {
        const copie = reponse.clone();
        caches.open(cacheName).then((cache) => cache.put(event.request, copie));
        return reponse;
      })
      .catch(() => caches.match(event.request))
  );
});
