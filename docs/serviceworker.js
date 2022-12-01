
const basePath = '/pwa-vanilla-nextjs';
const cacheName = 'pwa-vanilla-nextjs-assets';
// const urlsToCache = [`${basePath}/vercel.svg`, `${basePath}/pic01.png`];
// const urlsToCache = [`http://localhost:3000/pwa-vanilla-nextjs/vercel.svg`, `http://localhost:3000/pwa-vanilla-nextjs/pic01.png`];
// const urlsToCache = [`/pwa-vanilla-nextjs/vercel.svg`, `/pwa-vanilla-nextjs/pic01.png`];
const urlsToCache = [`vercel.svg`, `pic01.png`];


console.log('serviceworker.js is executed');

self.addEventListener("install", event => {
    console.log("Service worker installed");
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// self.addEventListener("activate", event => {
//     console.log("Service worker activated");
//     event.waitUntil(clients.claim());
// });

self.addEventListener("fetch", event => {
    console.log("Service worker fetched");
    console.log(`URL: ${event.request.url}`);

    // event.respondWith(
    //     caches.open(cacheName)
    //         .then(cache =>
    //             cache.match(event.request)
    //                 .then(cachedResponse => {
    //                     // It can update the cache to serve updated content on the next request
    //                     if (cachedResponse) {
    //                         console.log(`caches MATCH: ${event.request.url}`);
    //                     } else {
    //                         console.log(`caches NOT match: ${event.request.url}`);
    //                     }
    //                     return cachedResponse || fetch(event.request);
    //                 })
    //         )
    // );

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // It can update the cache to serve updated content on the next request
                if (cachedResponse) {
                    console.log(`caches MATCH: ${event.request.url}`);
                } else {
                    console.log(`caches NOT match: ${event.request.url}`);
                }
                return cachedResponse || fetch(event.request);
            })
    );
});