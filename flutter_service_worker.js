'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "b15f92dda42c30d2d822f042b4122ef4",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/web.png": "2e29b4eddb3ae7dd3a19c6a8a31eb173",
"/assets/assets/2.jpg": "84a83a17b7cceddc59d953be6efeb180",
"/assets/assets/7.jpg": "0e79a676445948b5a4d2a240979dd596",
"/assets/assets/4.jpg": "ce22c65d96a857f3a46f774d30cb6b2c",
"/assets/assets/5.jpg": "5dfedaf7bf1baa2de53464d035b3b7f3",
"/assets/assets/1.jpg": "f432a2d3a6c6e2516b199c075d4b0c7b",
"/assets/assets/8.jpg": "6cd7168dba1bb939a578b5928e7dbca5",
"/assets/assets/6.jpg": "dee091c48c7f36c88b2b118dafa0f9d7",
"/assets/assets/9.jpg": "7cfdb6a01e31b1f64b3a7c7581965373",
"/assets/assets/3.jpg": "4e29d88de660b33b9b993a819597d653",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "2f79620187ae56eacd8e56db2a7cff55",
"/assets/LICENSE": "f8b624f82d9c5863efd0bc7f518ec1ae",
"/main.dart.js": "ed71c7101a5b85b5e50b3580b1bf8bed",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
