var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {

  console.log("Service install");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/src/app.jsx',
        '/src/index.css',
        '/src/main.jsx',
        '/src/components/Banner/index.jsx',
        '/src/components/Browse/index.jsx',
        '/src/components/Cards/index.jsx',
        '/src/components/Footer/index.jsx',
        '/src/components/Header/index.jsx',
        '/src/components/Information/index.jsx',
        '/src/components/InformationCards/index.jsx',
        '/src/components/Product/index.jsx',
        '/src/components/Inspiration/index.jsx',
        '/src/assets/react.svg',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {

  console.log("Service activate");

  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});