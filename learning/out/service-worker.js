self.__precacheManifest = [
  {
    "url": "/_next/static/IFMfjFsBdQm51G-90WVy3/pages/_app.js",
    "revision": "2002599ed7c5d334059a"
  },
  {
    "url": "/_next/static/IFMfjFsBdQm51G-90WVy3/pages/_error.js",
    "revision": "e5a32238619c89c9c77d"
  },
  {
    "url": "/_next/static/IFMfjFsBdQm51G-90WVy3/pages/home.js",
    "revision": "e62629202684ae23a6fb"
  },
  {
    "url": "/_next/static/IFMfjFsBdQm51G-90WVy3/pages/index.js",
    "revision": "3d9fd85941901ebcb5f6"
  },
  {
    "url": "/_next/static/IFMfjFsBdQm51G-90WVy3/pages/profile/me.js",
    "revision": "006d62f25f6e2cc5f6e4"
  },
  {
    "url": "/_next/static/chunks/commons.cc8a08f66f2e714adef8.js",
    "revision": "8f5d7a68dbf50b6bed9e"
  },
  {
    "url": "/_next/static/runtime/main-e93443d315dce50ad3bb.js",
    "revision": "e0c1e9fa854ed751998b"
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
self.__precacheManifest = [
  {
    "url": "static/favicon.ico",
    "revision": "fd5fe6e1f12b3a586b7655a2569c6357"
  },
  {
    "url": "static/images/icons/icon-128x128.png",
    "revision": "a2f42a7e43f6c8878cea08152f77b4b8"
  },
  {
    "url": "static/images/icons/icon-144x144.png",
    "revision": "dc209363bd6bd480cbc11dd77e32fea9"
  },
  {
    "url": "static/images/icons/icon-152x152.png",
    "revision": "1717c3d598df1d8bf1ca525a7c706a17"
  },
  {
    "url": "static/images/icons/icon-192x192.png",
    "revision": "d6017786b22c86af401a14c6ddc01e11"
  },
  {
    "url": "static/images/icons/icon-384x384.png",
    "revision": "5dc98af22d4096d7dd23d13817ec7a47"
  },
  {
    "url": "static/images/icons/icon-512x512.png",
    "revision": "460b74aa7bfec8b33d141139ef157adf"
  },
  {
    "url": "static/images/icons/icon-72x72.png",
    "revision": "137c65688e74566ca038c7cbae04e57e"
  },
  {
    "url": "static/images/icons/icon-96x96.png",
    "revision": "abc7573acd382741a498c1ef5690b6e5"
  },
  {
    "url": "static/manifest.json",
    "revision": "b68dfb8a595da62308f04ebd4a994426"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
