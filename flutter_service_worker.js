'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3a833acaa71be65802ffff30a881f452",
"main.dart.js_24.part.js": "388863493b6f9754caa036cb826467d7",
"main.dart.js_34.part.js": "23213c8621f06bcbc8ba8364b05e5750",
"main.dart.js_46.part.js": "1aa226db0af9648ff3cd503ce9c0ea72",
"main.dart.js_56.part.js": "baa62d6aed383888653f79676b64ad95",
"version.json": "c051d7c096f3a90e1a80b0ae7f248fa9",
"main.dart.js_7.part.js": "27bb1be3266d348d242d23b73c5f96aa",
"main.dart.js_12.part.js": "8199acd80ddc389c914f35d2290d01e4",
"main.dart.js_6.part.js": "6340c31f2bcac417b4da32c8822f38b2",
"index.html": "7ee3debcc346aabd5ede6ae44eec5498",
"/": "7ee3debcc346aabd5ede6ae44eec5498",
"main.dart.js_13.part.js": "0fad4609a6f1f0395c8e41ce1ca5c716",
"main.dart.js_35.part.js": "d3167626db3f76a6b96b1a27cbe90ea8",
"main.dart.js_25.part.js": "78c4fa33008851267dcc8ccf586060de",
"main.dart.js_11.part.js": "3c7905361dd76a0d2297e678092365e1",
"main.dart.js_4.part.js": "b11731e11e0bacc3963e58bc9cd369ff",
"main.dart.js": "f5b061685f9ade937f28b914cb15a1dc",
"main.dart.js_18.part.js": "db6ab36673ff99cbd000b3077bc131ad",
"main.dart.js_45.part.js": "c111d6e32e13bf3cb29d5ae9c4965aaa",
"main.dart.js_55.part.js": "d0ae06eb94f9338bbaaae1b189960293",
"main.dart.js_27.part.js": "d797c9551ba26a0e1c8f6852459b38ed",
"main.dart.js_37.part.js": "9603686661a48d9884af64df35a21dc6",
"main.dart.js_19.part.js": "cfeaa1ad3d706be3e38b94a7ef5d9e67",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_54.part.js": "dce8159153927b67c22ce13bd697c417",
"main.dart.js_44.part.js": "87fa292aaa626da1d7a4fd96a28fecdf",
"main.dart.js_36.part.js": "af1c75baf7c5656cc6c6e76a3ab3f146",
"main.dart.js_26.part.js": "801ef036749d0f2061af4b931ccd5174",
"main.dart.js_10.part.js": "1ffcecc655938a56a11b08e7dd38e269",
"main.dart.js_5.part.js": "12134f069759d0d64467a11bd76fd7a9",
"main.dart.js_15.part.js": "879ecca58d743d7e1d64372e36e98e96",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "98f7a437489ef53c2850ccf77326ec3e",
"main.dart.js_51.part.js": "7e025aed142f4f9b484c6a20b5e3846f",
"main.dart.js_23.part.js": "87cb7c9b997cb4c12281d71e9a3b3f48",
"main.dart.js_9.part.js": "c92fe9256a5c8f0046c6f08ec1706616",
"main.dart.js_40.part.js": "97424d22e1a15bc61e044ca6acb20c4d",
"main.dart.js_32.part.js": "a79a3bb76b6ddd02a028755d74d9621b",
"main.dart.js_22.part.js": "3cabeeef9e7ea902d8549dc5f5b767be",
"main.dart.js_8.part.js": "6bff451dcd7642c69180bcbf3079745e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "629befa879bc18dabb07ade5d336dc6c",
"main.dart.js_49.part.js": "6f3d2191bc5613575aec03b76cfa2822",
"main.dart.js_14.part.js": "e2b71ed22142a9b39aedfb1e9ed1d827",
"main.dart.js_1.part.js": "77a7dc04b37410d9f1a7333e10095a4b",
"main.dart.js_20.part.js": "fed0e1fcf572130c03da948528beeb00",
"main.dart.js_30.part.js": "2a50d29e1c0d5a47f51778948c56f810",
"main.dart.js_42.part.js": "39575505a9ad3078eba04019bf792fb4",
"main.dart.js_52.part.js": "ce8ccf1137b6c79a72e04885062bdf8e",
"main.dart.js_29.part.js": "07c68c877bbb3bcb63ed82241e456ecf",
"main.dart.js_3.part.js": "58fecdf7c68a581867944ecd76767869",
"main.dart.js_16.part.js": "9209bd93bb6162acf5a65818f4dc33ed",
"assets/AssetManifest.json": "3f9bfc3d46f2e37daaab9e9af46d0416",
"assets/NOTICES": "20e19832834d9958c6e2049435c70ab1",
"assets/FontManifest.json": "3ca0d4e01e771c06b7abd2c5a9013192",
"assets/AssetManifest.bin.json": "1d1c5108758d54a87a3cbf10446de953",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3039a619e6228f5622e6e7f9958dcdab",
"assets/fonts/MaterialIcons-Regular.otf": "15665835fa6b1330eb0ea3b6a53b8af7",
"assets/assets/tutorial/tutorial4.png": "d20e77a5618742bb403f52aef9138d81",
"assets/assets/tutorial/tutorial5.png": "f106ebc5cbdb860f99f5b211416ff6d4",
"assets/assets/tutorial/tutorial1.png": "5e415bf997c54761bea075f4c5c7b7d4",
"assets/assets/tutorial/tutorial2.png": "32ab026539a25dcc01939e8c92a4b09d",
"assets/assets/tutorial/tutorial3.png": "bc9a0f36dec1fbc8bb0f84cbf5529719",
"assets/assets/bg/dunhuan.png": "05d77991d0624156641122cd1e24613d",
"assets/assets/bg/kitty.png": "80054363bf430cdae2801fe976f8fd79",
"assets/assets/fonts/SF-Pro-Rounded-Regular.ttf": "8324bacb591c0191692a2e7ef7c0a12f",
"assets/assets/fonts/Calc.ttf": "4edcd391d9f190ee3cdb14b84fd8bf16",
"assets/assets/fonts/Arial-Rounded-Bold.ttf": "8aa0ab4926aab1d490776698703ad0f5",
"assets/assets/fonts/STYuanti-500.ttf": "3a8b78d59ebff59deb77dd577513cd79",
"main.dart.js_28.part.js": "7c16d1cfa257be6d4920912c578d6396",
"main.dart.js_38.part.js": "a388319d9eea49a265210ebea8ea4a7e",
"main.dart.js_2.part.js": "ab159b672f50ccc2b57955062ca16b77",
"main.dart.js_17.part.js": "dd04e89bc6306661f898216975cd1ec9",
"main.dart.js_31.part.js": "60fc0e754f757611ec85afb2be5bd2d0",
"main.dart.js_21.part.js": "62a89862966707e0e2fdb169f106b001",
"main.dart.js_53.part.js": "eab1f180ba0054de1fbe35ff28b01827",
"main.dart.js_43.part.js": "120d37312d395c7701f2e5278b4f323a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
