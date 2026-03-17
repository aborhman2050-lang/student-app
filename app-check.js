import { doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import { db } from "./firebase.js";

const settingsRef = doc(db,"appSettings","config");


/* ========================= */
/* عرض الإشعار */
/* ========================= */

function showNotification(text){

const box = document.createElement("div");

box.style.position="fixed";
box.style.top="110px";
box.style.left="50%";
box.style.transform="translateX(-50%)";
box.style.background="white";
box.style.padding="15px 20px";
box.style.borderRadius="15px";
box.style.boxShadow="0 10px 30px rgba(0,0,0,0.15)";
box.style.zIndex="9999";
box.style.display="flex";
box.style.alignItems="center";
box.style.gap="10px";

box.innerHTML=`
<i class="fas fa-bell" style="color:#16a34a"></i>
<span>${text}</span>
`;

document.body.appendChild(box);

setTimeout(()=>{
box.remove();
},6000);

}


/* ========================= */
/* فحص الإشعارات */
/* ========================= */

async function checkNotifications(){

try{

const snap = await getDocs(collection(db,"notifications"));

snap.forEach(docSnap=>{

const data = docSnap.data();

const seen = localStorage.getItem("notif_"+docSnap.id);

if(seen) return;

showNotification(data.message);

localStorage.setItem("notif_"+docSnap.id,true);

});

}catch(e){

console.log("Notification error:",e);

}

}



/* ========================= */
/* التحكم بالتطبيق */
/* ========================= */

export async function checkAppControl(){

try{

const snap = await getDoc(settingsRef);

if(!snap.exists()) return;

const data = snap.data();


/* ========================= */
/* إيقاف التطبيق */
/* ========================= */

if(data.appStopped){

document.body.innerHTML = `
<div style="
display:flex;
justify-content:center;
align-items:center;
height:100vh;
text-align:center;
font-family:Segoe UI;
background:#f0fdf4;
">

<div>
<h2>التطبيق متوقف مؤقتاً</h2>
<p>نقوم حالياً بالصيانة</p>
</div>

</div>
`;

throw new Error("App stopped");

}


/* ========================= */
/* الرسالة العامة (مرة واحدة فقط) */
/* ========================= */

if(data.globalMessage){

const messageId = data.globalMessageId || 1;

const lastSeen = localStorage.getItem("globalMessageId");

if(lastSeen != messageId){

showNotification(data.globalMessage);

localStorage.setItem("globalMessageId",messageId);

}

}
/* ========================= */
/* الرسالة الخاصة بالمستخدم */
/* ========================= */

const userKey = localStorage.getItem("userKey");

if(userKey){

const userRef = doc(db,"activationKeys",userKey);
const userSnap = await getDoc(userRef);

if(userSnap.exists()){

const userData = userSnap.data();

if(userData.message){

const lastSeen = localStorage.getItem("userMessageId");

if(lastSeen != userData.messageId){

showNotification(userData.message);

localStorage.setItem("userMessageId",userData.messageId);

}

}

}

}


/* ========================= */
/* تشغيل نظام الإشعارات */
/* ========================= */

await checkNotifications();


}catch(e){

console.log("App control error:",e);

}

}