var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {

  console.log("Service install");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/package-lock.json',
        '/postcss.config.js',
        '/tailwind.config.js',
        '/vite.config.js',
        '/package.json',
        '/eslintrc.cjs',
        '/src/App.css',
        '/src/App.jsx',
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
        '/imagens/banner.png',
        '/imagens/bedroom.png',
        '/imagens/card1.png',
        '/imagens/card2.png',
        '/imagens/card3.png',
        '/imagens/card4.png',
        '/imagens/card5.png',
        '/public/imagens/card6.png',
        '/public/imagens/card7.png',
        '/public/imagens/card8.png',
        '/public/imagens/carrinhoIcon.png',
        '/public/imagens/coracaoIcon.png',
        '/public/imagens/Dining.png',
        '/public/imagens/IconLogo.png',
        '/public/imagens/IconLogo512.png',
        '/public/imagens/imgInspiration.png',
        '/public/imagens/imgInspiration1.png',
        '/public/imagens/imgInspiration2.png',
        '/public/imagens/imgInspiration3.png',
        '/public/imagens/imgInspirationBolinhas.png',
        '/public/imagens/InfIcon1.png',
        '/public/imagens/InfIcon2.png',
        '/public/imagens/InfIcon3.png',
        '/public/imagens/InfIcon4.png',
        '/public/imagens/living.png',
        '/public/imagens/logo.png',
        '/public/imagens/perfilIcon.png',
        '/public/imagens/pesquisarIcon.png',
        '/public/favicon.ico',
        '/public/logo192.png',
        '/public/logo512.png',
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