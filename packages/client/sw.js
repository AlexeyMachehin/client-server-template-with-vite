const staticAssets = ['index.html', 'static/offline.html'];

const ONLINE_URL = ['/forum', '/login', '/signup', '/leaderboard'];

const CACHE = 'static-data';
const DYNAMIC_CACHE_NAME = 'dynamic-data';

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache => cache.addAll(staticAssets))
      // `skipWaiting()` необходим, потому что мы хотим активировать SW
      // и контролировать его сразу, а не после перезагрузки.
      .then(() => self.skipWaiting())
  );
});

// при событии fetch, мы используем кэш, и только потом обновляем его данным с сервера
self.addEventListener('fetch', function (event) {
  // Мы используем `respondWith()`, чтобы мгновенно ответить без ожидания ответа с сервера.
  event.respondWith(
    networkOrCache(event.request).catch(() => useFallback(event.request))
  );
});

// Он никогда не упадет, т.к мы всегда отдаем заранее подготовленные данные.
function useFallback(request) {
  if (ONLINE_URL.some(url => request.referrer.includes(url))) {
    return caches.match('/static/offline.html');
  }
  return caches.match('/index.html');
}

function networkOrCache(request) {
  return fetch(request)
    .then(response =>
      response.ok ? networkFirst(request, response) : fromCache(request)
    )
    .catch(() => fromCache(request));
}

function fromCache(request) {
  return caches
    .open(DYNAMIC_CACHE_NAME)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || Promise.reject('no-match'))
    );
}

function networkFirst(request, response) {
  return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
    cache.put(request, response.clone());
    return response;
  });
}
