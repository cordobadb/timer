self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('timer-cache').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './beep.wav',
        './icon-192.png',
        './icon-512.png'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});