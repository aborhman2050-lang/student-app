/* ===============================
   نظام الحماية للتطبيق
   =============================== */


/* منع تشغيل التطبيق خارج الموقع */

const allowedDomain = "اسم-موقعك.com";

if(location.hostname !== allowedDomain && location.hostname !== "localhost"){

document.body.innerHTML = "التطبيق غير مصرح به";

throw new Error("Unauthorized Domain");

}


/* منع فتح أدوات المطور */

setInterval(()=>{

const devtools = /./;

/*devtools.toString = function(){

alert("محاولة اختراق");

window.location.reload();

}*/

console.log(devtools);

},2000);


/* منع النقر بزر الفأرة الأيمن */

document.addEventListener("contextmenu",function(e){

e.preventDefault();

});


/* منع بعض اختصارات المطور */

document.addEventListener("keydown",function(e){

if(
e.key === "F12" ||
(e.ctrlKey && e.shiftKey && e.key === "I") ||
(e.ctrlKey && e.shiftKey && e.key === "J") ||
(e.ctrlKey && e.key === "U")
){

e.preventDefault();

alert("غير مسموح");

}

});


/* توليد معرف جهاز ثابت */

function generateDeviceId(){

let deviceId = localStorage.getItem("deviceId");

if(!deviceId){

const raw = navigator.userAgent + screen.width + screen.height + navigator.language;

deviceId = btoa(raw).substring(0,50);

localStorage.setItem("deviceId",deviceId);

}

return deviceId;

}


/* تصدير الدالة */

window.getDeviceId = generateDeviceId;


/* تشفير المفاتيح داخل الجهاز */

window.saveKeySecure = function(key){

localStorage.setItem("userKey", btoa(key));

}


window.getKeySecure = function(){

const key = localStorage.getItem("userKey");

if(!key) return null;

return atob(key);

}


/* مراقبة الإنترنت */

window.addEventListener("offline",()=>{

console.log("التطبيق يعمل بدون إنترنت");

});


window.addEventListener("online",()=>{

console.log("تم الاتصال بالإنترنت");

});