const cacheName = 'V1';

const filesToCache = [
  '/',
  '/assets/images/logo_phone.jpg',
  '/assets/images/logo_laptop.jpg',
  '/assets/images/logo_tablet.jpg',
  '/assets/images/lifebox/lifebox1.jpg',
  '/assets/images/lifebox/lifebox2.jpg',
  '/assets/images/lifebox/lifebox3.jpg',
  '/assets/images/lifebox/lifebox4.jpg',
  '/assets/images/lifebox/lifebox5.jpg',
  '/assets/images/ikassa/ikassa1.jpg',
  '/assets/images/ikassa/ikassa2.jpg',
  '/assets/images/ikassa/ikassa3.jpg',
  '/assets/images/ikassa/ikassa4.jpg',
  '/assets/images/ikassa/ikassa5.jpg',
  '/assets/images/plugin/plugin1.jpg',
  '/assets/images/plugin/plugin2.jpg',
  '/assets/images/plugin/plugin3.jpg',
  '/assets/images/hotel/hotel1.jpg',
  '/assets/images/hotel/hotel2.jpg',
  '/assets/images/hotel/hotel3.jpg',
  '/assets/images/hotel/hotel4.jpg',
  '/assets/images/hotel/hotel5.jpg',
  '/assets/icons/apple-icon-57x57.png',
  '/assets/icons/apple-icon-60x60.png',
  '/assets/icons/apple-icon-72x72.png',
  '/assets/icons/apple-icon-76x76.png',
  '/assets/icons/apple-icon-144x144.png',
  '/assets/icons/apple-icon-120x120.png',
  '/assets/icons/apple-icon-114x114.png',
  '/assets/icons/apple-icon-152x152.png',
  '/assets/icons/apple-icon-180x180.png',
  '/assets/icons/android-icon-192x192.png',
  '/assets/icons/favicon-16x16.png',
  '/assets/icons/favicon-32x32.png',
  '/assets/icons/favicon-96x96.png'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.info('[sw.js] cached all files');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {return response
      } else {
        let reqCopy = event.request.clone();
        return fetch(reqCopy, {credentials: 'include'})
        .then(function(response) {
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          let resCopy = response.clone();
          caches.open(cacheName)
          .then(function(cache) {
            return cache.put(reqCopy, resCopy);
          });
          return response;
        })
      }
    })
  );
});
