/* Service Worker — cache do app para uso offline.
   Ao publicar uma nova versão, troque o número em V e atualize o version.json. */
const V = 'ekoa-sankhya-v18';
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/logo-blend.png'];

self.addEventListener('install', e => {
  // cache: 'reload' evita gravar no cache uma cópia antiga vinda do cache HTTP do navegador
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // version.json nunca passa pelo cache: é o que avisa que existe versão nova
  if (url.origin === location.origin && url.pathname.endsWith('/version.json')) return;
  /* Demais arquivos: responde do cache na hora (offline) e atualiza o cache em segundo plano. */
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r.ok && url.origin === location.origin) { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); }
      return r;
    }).catch(() => hit);
    return hit || net;
  }));
});
