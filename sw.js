const CACHE_NAME = "student-app-v1";

const urlsToCache = [

"/",
"/index.html",
"/subjects.html",
"/subject-detail.html",
"/tests-list.html",
"/test-exam.html",
"/ai-chat.html",
"/summary.html",

"/assets/fontawesome/css/all.min.css",

];

/* تثبيت Service Worker */

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(urlsToCache);
})

);

});

/* تشغيل الكاش */

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});