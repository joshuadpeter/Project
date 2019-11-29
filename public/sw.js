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
    "url": "404.html",
    "revision": "d73db862a48108c3bdc8fbc3aad24584"
  },
  {
    "url": "css/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "img/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "img/icons/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "img/icons/icon1-72x72.png",
    "revision": "3bc1a42d629f310b873ac6ddfa844e8c"
  },
  {
    "url": "img/icons/icon2-96x96.png",
    "revision": "eb7d44489915868acf8f1cf2a11c1db0"
  },
  {
    "url": "img/icons/icon3-128x128.png",
    "revision": "a6f3a264ce1e902a2f7affce7713eefe"
  },
  {
    "url": "img/icons/icon4-144x144.png",
    "revision": "c2de3d8ea348aaf23bdefaefbc660584"
  },
  {
    "url": "img/icons/icon5-152x152.png",
    "revision": "e7d19db6160b68059d76b4e0b740efca"
  },
  {
    "url": "img/icons/icon6-192x192.png",
    "revision": "06b9eb40f6476d38ddfbd08d60fd767b"
  },
  {
    "url": "img/icons/icon7-512x512.png",
    "revision": "1966154edab19bfddb7920307eeba529"
  },
  {
    "url": "index.html",
    "revision": "52c1a1641dc0f7cd342aadbd273bd81a"
  },
  {
    "url": "js/analytics.js",
    "revision": "9e6527fea67098b5b29194b72052cc16"
  },
  {
    "url": "js/app.js",
    "revision": "00ad0ea73e0ea61de27448746bb40940"
  },
  {
    "url": "js/auth.js",
    "revision": "ec34734451c098553d78d03c25054acf"
  },
  {
    "url": "js/calendar.js",
    "revision": "54ebebacc7b92a40dfb002da777c4b14"
  },
  {
    "url": "js/db.js",
    "revision": "d7cab7aba5454c2bfe4bf3f6ad26a2aa"
  },
  {
    "url": "js/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "js/ui.js",
    "revision": "9b755df2906c9fee9f8ad4081a97f07c"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/css/demo.css",
    "revision": "5775007de96af7e799073e994854911b"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/css/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/css/theme1.css",
    "revision": "a87c0fa002e6300db5ed2157bdd2bad4"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/css/theme2.css",
    "revision": "84f45006f4977b27a5ec1293a9596599"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/css/theme3.css",
    "revision": "847c910eb9b196433ba9b9fc81d87b25"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/demo.html",
    "revision": "0cdeb3cd310d2f768915ef6270864bb6"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/js/caleandar.js",
    "revision": "ae59cba80aa89e364a594ea64885e858"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/js/caleandar.min.js",
    "revision": "0e562b14f8a78c8c1522208bd11ca873"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/js/demo.js",
    "revision": "17c7fb572215fbe919f2964293cea98b"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/js/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/caleandar-master/caleandar-master/README.md",
    "revision": "4f575e29282fbcdd671f271c3bbc689b"
  },
  {
    "url": "Libs/caleandar-master/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/materialize-v1.0.0/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/css/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/css/materialize.css",
    "revision": "b0663391a6dd5efed956259f29fa18dd"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/css/materialize.min.css",
    "revision": "ec1df3ba49973dcb9ff212f052d39483"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/js/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/js/materialize.js",
    "revision": "9832259e6e013b2e55f342c053c26104"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/js/materialize.min.js",
    "revision": "5dcfc8944ed380b2215dc28b3f13835f"
  },
  {
    "url": "Libs/materialize-v1.0.0/materialize/README.md",
    "revision": "dfaca46ba38a5a530ef3d54a7e14888a"
  },
  {
    "url": "Libs/package-lock.json",
    "revision": "3d7c29197e8c78a8d8bef61a89ffb5ef"
  },
  {
    "url": "Libs/push.js/bin/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/push.js/bin/push.js",
    "revision": "163847948608b976a267ff15412cf653"
  },
  {
    "url": "Libs/push.js/bin/push.min.js",
    "revision": "adcea767fb12cf9d58303f506a26766b"
  },
  {
    "url": "Libs/push.js/bin/serviceWorker.min.js",
    "revision": "9dd5829ed826927572a69193e84d9bac"
  },
  {
    "url": "Libs/push.js/browserstack.png",
    "revision": "afc332b9487f193b43963639617764cf"
  },
  {
    "url": "Libs/push.js/CONTRIBUTING.md",
    "revision": "70c4a4b0125a255fef10182e9b582181"
  },
  {
    "url": "Libs/push.js/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  },
  {
    "url": "Libs/push.js/index.d.ts",
    "revision": "1a5d939e82bb5231f5d8b5d24931e0d9"
  },
  {
    "url": "Libs/push.js/LICENSE.md",
    "revision": "e1eefb5f6a6b1759ab06c17d043a8030"
  },
  {
    "url": "Libs/push.js/logo.png",
    "revision": "a30b2611eb5cab6c5763f58ac94c8f77"
  },
  {
    "url": "Libs/push.js/package.json",
    "revision": "73827c68bed7f411ddc6b4013b3c07a9"
  },
  {
    "url": "Libs/push.js/README.md",
    "revision": "a358082782e3aed0ccab1eca750ebeb5"
  },
  {
    "url": "manifest.json",
    "revision": "c684500948c022ce594eec1a7ecaf86e"
  },
  {
    "url": "pages/about.html",
    "revision": "0e5458f5310a3a17348f996c4cfa74aa"
  },
  {
    "url": "pages/analytics.html",
    "revision": "f3c0ce9d5ca8b1d833a8205a694bc795"
  },
  {
    "url": "pages/calendar.html",
    "revision": "b5fdfb86f4d6b8c16556e30153a3cfe7"
  },
  {
    "url": "pages/contact.html",
    "revision": "aedb4c65c4044a98e42f8fcf7d1b9d93"
  },
  {
    "url": "pages/desktop.ini",
    "revision": "44d24281ebf09a0285f90baaba945182"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
