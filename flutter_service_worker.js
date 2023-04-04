'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5d7f519241853f0b4b6eacae9f1a375c",
"assets/assets/icon/call.png": "c369a813154006733899f31bc2a9922e",
"assets/assets/icon/fb.png": "9d7a50f214c64cf2d8702cb73fe1c46d",
"assets/assets/icon/ig.jpg": "76f3668c171245b5201013f99f915d9c",
"assets/assets/icon/ig.png": "a207e912e8e119e6e69ce17f0bf64170",
"assets/assets/icon/map.png": "97f79f018dbe10b6b709e7b1199f29e7",
"assets/assets/icon/sugges.png": "056e1150d02f2b45dde4a85c23a90df2",
"assets/assets/icon/tw.png": "2890bac9ba41e52707f36268231dfe9e",
"assets/assets/icon/yt.png": "7c13003654cdda9aa75a03b0da0a2bcc",
"assets/assets/images/background.png": "f8cfad71a478fed157674d9198049761",
"assets/assets/images/depan/ibadah.jpg": "aabb908726ee38442ce7a68b9a1cb5f7",
"assets/assets/images/depan/ibadah.png": "a3fb53930ea353776a67bca8b115ae94",
"assets/assets/images/depan/kamar.jpg": "5e5b578ba8729f61f68e4d0175a2cd84",
"assets/assets/images/depan/kamar.png": "787d16304e80c93791b3f2f4fefe30fa",
"assets/assets/images/depan/kelas.jpg": "a29e1f316141dcfd3ee483e4e67b56f2",
"assets/assets/images/depan/kelas.png": "842c025abc7c28eeb68a84cf6a453f7d",
"assets/assets/images/depan/olahraga.jpg": "9287d3e6608bba9fbcf1ee4e1296b45a",
"assets/assets/images/depan/olahraga.png": "3c40c11563fd8a3f02437053f898f9bb",
"assets/assets/images/depan/poli.jpg": "3fccbe32db47adc96b2b63d914e10884",
"assets/assets/images/depan/poli.png": "d415ca76578328378c4db1c6ca62dc0e",
"assets/assets/images/doodle.png": "42eca64e3e9db12af4059360760d2840",
"assets/assets/images/doodle.svg": "255cf102f519d4e2359b733cfb79be79",
"assets/assets/images/janji.png": "39764557aec5eee46d0a12c7d876b9df",
"assets/assets/images/logo.gif": "342d6dd56b5118207aaa2c2136555bc3",
"assets/assets/images/logo.png": "3630af72e12ba196a73d1f8ca1a81743",
"assets/assets/images/logodepan.gif": "46eb17c2776eb04769a8c541d178f1da",
"assets/assets/images/logolayanan%2520%2520(2).png": "7c24ba4c61c246683172b9ae6f58d863",
"assets/assets/images/logolayanan.png": "889680deb25840537229f96fba643c61",
"assets/assets/images/logolayananold.png": "fc99a46e3bf478a10992db6478854fe0",
"assets/assets/images/logolayananold1.png": "be185856a4ce032f6e8911a6e84a0343",
"assets/assets/images/logoold%2520(2).png": "e2193d9a4bc9dcb693d99efa5d54f6af",
"assets/assets/images/logoold.png": "62fc0c351f5fc8afd58391df0b769723",
"assets/assets/images/lokasibdk.png": "9962d17ad73adc6da04c86727bfe8c01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7dacc0c9452ebc8bc6cd462f07a6657a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "c2fc42105c475ee1d11ceecb3cf598e5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8dc8f22e9eac0eff7329673dd39c10e5",
"/": "8dc8f22e9eac0eff7329673dd39c10e5",
"main.dart.js": "9a45beedd45c9d0404bf8dc224453036",
"manifest.json": "591d3f12c8333bcf7173e6cf72641549",
"version.json": "6251368b9deefb7aa6bfd7793d6b2953"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
