self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('static-v1').then(cache =>
      cache.addAll(['/','/manifest.json'])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
