const CACHE_NAME = 'mu-campaign-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/comic-cards.css',
  './js/app.js',
  './js/campaign-data.js',
  './js/audio.js',
  './js/storage.js',
  './assets/mu_logo.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/favicon.png',
  './assets/tokens/exposure_token.png',
  './assets/tokens/exposure_token_back.png',
  './assets/tokens/journalist_token.png',
  './assets/heroes/spider_man.png',
  './assets/heroes/miles_morales.png',
  './assets/heroes/ghost_spider.png',
  './assets/heroes/spider_ham.png',
  './assets/heroes/spider_2099.png',
  './assets/heroes/spider_woman.png',
  './assets/heroes/black_cat.png',
  './assets/heroes/venom_hero.png',
  './assets/heroes/wolverine.png',
  './assets/heroes/cyclops.png',
  './assets/heroes/storm.png',
  './assets/heroes/jean_grey.png',
  './assets/heroes/beast.png',
  './assets/heroes/magneto_hero.png',
  './assets/heroes/mystique_hero.png',
  './assets/villains/green_goblin.png',
  './assets/villains/rhino.png',
  './assets/villains/carnage.png',
  './assets/villains/venom_villain.png',
  './assets/villains/magneto_villain.png',
  './assets/villains/mystique_villain.png',
  './assets/villains/juggernaut.png',
  './assets/villains/sabretooth.png',
  './assets/locations/central_park.jpg',
  './assets/locations/daily_bugle.jpg',
  './assets/locations/brooklyn_bridge.jpg',
  './assets/locations/oscorp.jpg',
  './assets/locations/midtown_high.jpg',
  './assets/locations/xavier_institute.jpg',
  './assets/locations/danger_room.jpg',
  './assets/locations/muir_island.jpg',
  './assets/locations/genosha.jpg',
  './assets/locations/morlock_tunnels.jpg',
  './assets/locations/hangar_bay.jpg',
  './assets/locations/sims_tower.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Precaching campaign assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Fallback if offline and request is an HTML navigation
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
