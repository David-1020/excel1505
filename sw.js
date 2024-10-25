self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('excel-search-app').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/style.css',
      '/icon-192.png',
      '/icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
