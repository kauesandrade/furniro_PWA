var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {

  console.log("Service install");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/vite.svg',
        '/imagens/banner.png',
        '/imagens/bedroom.png',
        '/imagens/card1.png',
        '/imagens/card2.png',
        '/imagens/card3.png',
        '/imagens/card4.png',
        '/imagens/card5.png',
        '/imagens/card6.png',
        '/imagens/card7.png',
        '/imagens/card8.png',
        '/imagens/carrinhoIcon.png',
        '/imagens/coracaoIcon.png',
        '/imagens/Dining.png',
        '/imagens/IconLogo.png',
        '/imagens/IconLogo512.png',
        '/imagens/imgInspiration.png',
        '/imagens/InfIcon1.png',
        '/imagens/InfIcon2.png',
        '/imagens/InfIcon3.png',
        '/imagens/InfIcon4.png',
        '/imagens/living.png',
        '/imagens/logo.png',
        '/imagens/perfilIcon.png',
        '/imagens/pesquisarIcon.png',
        './src/assets/react.svg',
        './src/components/Banner/index.jsx',
        './src/components/Browse/index.jsx',
        './src/components/Cards/index.jsx',
        './src/components/Footer/index.jsx',
        './src/components/Header/index.jsx',
        './src/components/Information/index.jsx',
        './src/components/InformationCards/index.jsx',
        './src/components/Inspiration/index.jsx',
        './src/components/Product/index.jsx',
        './src/App.css',
        './src/App.jsx',
        './src/index.css',
        './src/main.jsx',
        './package-lock.json',
        './package.json',
        './postcss.config.js',
        './tailwind.config.js',
        './vite.config.js',

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