const CACHE_NAME = 'minirec-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './minirec_icon_512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      // Força o Service Worker a se tornar ativo imediatamente
      console.log('[Service Worker] Skip waiting on install');
      return self.skipWaiting();
    })
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    }).then(() => {
      // Reivindica o controle de todas as páginas abertas imediatamente
      console.log('[Service Worker] Claiming clients for current page');
      return self.clients.claim();
    })
  );
});

// Estratégia de cache: Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Ignora requisições que não são GET ou não são HTTP/HTTPS
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Apenas faz cache de respostas OK (status 200)
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Se a rede falhar, simplesmente resolve para não quebrar (o cache já foi retornado se existir)
        });

        // Retorna a resposta do cache se houver, mas continua a busca na rede em background.
        // Se não houver cache, aguarda a resposta da rede.
        return cachedResponse || fetchPromise;
      });
    })
  );
});
