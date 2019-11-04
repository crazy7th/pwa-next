self.__precacheManifest = [
  {
    "url": "/_next/static/GQrHpvXk0sBU08Cy8mGru/pages/_app.js",
    "revision": "24855a016a022d57f5d3"
  },
  {
    "url": "/_next/static/GQrHpvXk0sBU08Cy8mGru/pages/_error.js",
    "revision": "451d9393ff2c8f7476da"
  },
  {
    "url": "/_next/static/GQrHpvXk0sBU08Cy8mGru/pages/home.js",
    "revision": "c7c77bbb785deb025daa"
  },
  {
    "url": "/_next/static/GQrHpvXk0sBU08Cy8mGru/pages/index.js",
    "revision": "55a6354b1fab548036cf"
  },
  {
    "url": "/_next/static/chunks/commons.ca382e5bdd66c4fef810.js",
    "revision": "1850b5081bd44731b74f"
  },
  {
    "url": "/_next/static/runtime/main-dc74a30d24d7d249222f.js",
    "revision": "bf622c94dd001fc8891f"
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
    "url": "static/images/icons/icon-128x128.png",
    "revision": "384886b5bfdcff4efd8274cec7bff156"
  },
  {
    "url": "static/images/icons/icon-144x144.png",
    "revision": "0300d48b5c00acabe845e17a5ffb016f"
  },
  {
    "url": "static/images/icons/icon-152x152.png",
    "revision": "e776319c5204b08c99e6b5c570ebf44a"
  },
  {
    "url": "static/images/icons/icon-192x192.png",
    "revision": "56acf362c123988cd3500403ff07144e"
  },
  {
    "url": "static/images/icons/icon-384x384.png",
    "revision": "c93dbce544a6d5ffdd45d1cbbf51bad3"
  },
  {
    "url": "static/images/icons/icon-512x512.png",
    "revision": "a4259f6b7643b45807668c8eb1c4404e"
  },
  {
    "url": "static/images/icons/icon-72x72.png",
    "revision": "86b41c020bcbe08ccff2d0c2cfc9cad6"
  },
  {
    "url": "static/images/icons/icon-96x96.png",
    "revision": "1c195dac66a68c79738a01eaefe2daa3"
  },
  {
    "url": "static/manifest.json",
    "revision": "07de60c7f4568736061558d5887a531c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
