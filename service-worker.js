const CACHE_NAME = 'kniha-jazd-v1';
const urlsToCache = [
  './kniha_jazd_pwa.html',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Inštalácia service workera
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache otvorená');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Aktivácia service workera
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Mazanie starej cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Obsluha requestov - najprv cache, potom sieť
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - vráť odpoveď z cache
        if (response) {
          return response;
        }

        // Nie je v cache - načítaj zo siete
        return fetch(event.request).then(
          response => {
            // Skontroluj či je validná odpoveď
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Klonuj odpoveď
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // Offline fallback
        return new Response('Aplikácia je offline. Databáza je stále dostupná.');
      })
  );
});
