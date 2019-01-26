self.__precacheManifest = [].concat(self.__precacheManifest || []);


workbox.core.setCacheNameDetails({
    prefix: 'juet-pwa',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
    googleAnalytics: 'ga',
  });

  workbox.routing.registerRoute(
    new RegExp('/api/.*'),
    workbox.strategies.networkFirst({
      cacheName: 'juet-pwa-api-cache'
    })
  );

workbox.routing.registerRoute(
     new RegExp('/static/images/.*\.(jpe?g|png|gif|svg)$'),
    workbox.strategies.cacheFirst({
      cacheName: 'juet-pwa-image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Only cache requests for a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
          // Only cache 20 requests.
          maxEntries: 20
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        })
      ]
    })
  );
  
  
  workbox.routing.registerRoute(
    /^https:\/\/.+\.(jpe?g|png|gif|svg)$/i,
    workbox.strategies.cacheFirst({
      cacheName: 'juet-pwa-image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Only cache requests for a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
          // Only cache 20 requests.
          maxEntries: 20
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        })
      ]
    })
  );
workbox.clientsClaim();
workbox.skipWaiting();

// suppress warnings if revision is not provided
workbox.precaching.suppressWarnings();

// precahce and route asserts built by webpack
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// return app shell for all navigation requests
workbox.routing.registerNavigationRoute('/app-shell');