self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-rotina-de-cuidados-com-a-pele-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icone-192.png",
                "icon-512.png",
                "foto1.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});