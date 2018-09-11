const cacheName = 'V1';

const filesToCache = [
  '/',
  '/runtime.js',
  '/polyfills.js',
  '/main.js',
  '/styles.css'
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