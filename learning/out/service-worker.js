self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.55f2aadec9af54cb5a8d.js",
    "revision": "4221b4b4ef630fc9a7f5"
  },
  {
    "url": "/_next/static/pB9crFihWFbKeIj0AAL5r/pages/_app.js",
    "revision": "2731dca8af1f8da1f57c"
  },
  {
    "url": "/_next/static/pB9crFihWFbKeIj0AAL5r/pages/_error.js",
    "revision": "3409d787c38eda960a03"
  },
  {
    "url": "/_next/static/pB9crFihWFbKeIj0AAL5r/pages/about/me.js",
    "revision": "e14541a7ed79b825e4c5"
  },
  {
    "url": "/_next/static/pB9crFihWFbKeIj0AAL5r/pages/home.js",
    "revision": "d75e41395632c8fafa1f"
  },
  {
    "url": "/_next/static/pB9crFihWFbKeIj0AAL5r/pages/index.js",
    "revision": "2bce439c6e53375846e5"
  },
  {
    "url": "/_next/static/runtime/main-af972b52d0765ce83bcd.js",
    "revision": "f671ce99134756f510e0"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
