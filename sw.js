const CACHE_NAME = "workflow-docs-shell-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./pwa-icon.svg"];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key.startsWith("workflow-docs-shell-") && key !== CACHE_NAME)
                .map(key => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener("fetch", event => {
    const request = event.request;
    const requestUrl = new URL(request.url);
    if (request.method !== "GET" || requestUrl.origin !== self.location.origin ||
        !requestUrl.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).then(response => {
                if (response.ok) {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
                }
                return response;
            }).catch(() => caches.match("./index.html"))
        );
        return;
    }

    event.respondWith(
        caches.match(request, { ignoreSearch: true }).then(cached => cached || fetch(request).then(response => {
            if (response.ok) {
                const copy = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
            }
            return response;
        }))
    );
});
