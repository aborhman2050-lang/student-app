// ===== ULTRA MODAL SYSTEM PRO =====

document.addEventListener("DOMContentLoaded", function(){

/* ================== HTML ================== */

const modalHTML = `
<div id="modalOverlay" class="modal-overlay">
  <div class="modal-box glass">
    <div id="modalIcon" class="modal-icon"></div>
    <h3 id="modalTitle"></h3>
    <p id="modalMessage"></p>
    <input type="text" id="modalInput" class="modal-input" />
    <div id="modalButtons" class="modal-buttons"></div>
  </div>
</div>

<div id="toastContainer" class="toast-container"></div>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);

/* ================== CSS ================== */

const style = document.createElement("style");
style.innerHTML = `
:root{
--green1:#16a34a;
--green2:#22c55e;
--dark-bg:#1e293b;
--glass-bg:rgba(255,255,255,0.15);
}

/* Overlay */
.modal-overlay{
position:fixed;
top:0;left:0;
width:100%;height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
opacity:0;
visibility:hidden;
transition:0.3s;
z-index:9999;
}
.modal-overlay.active{
opacity:1;
visibility:visible;
}

/* Box */
.modal-box{
background:white;
width:90%;
max-width:420px;
padding:35px;
border-radius:25px;
text-align:center;
box-shadow:0 20px 40px rgba(0,0,0,0.25);
animation:scaleIn 0.25s ease;
position:relative;
}

/* Glass Effect */
.glass{
backdrop-filter:blur(15px);
background:rgba(255,255,255,0.9);
}

.dark-mode .modal-box{
background:var(--dark-bg);
color:white;
}

@keyframes scaleIn{
from{transform:scale(0.85);opacity:0;}
to{transform:scale(1);opacity:1;}
}

.modal-icon{
font-size:3rem;
margin-bottom:15px;
}

.success{color:#16a34a;}
.error{color:#dc2626;}
.warning{color:#f59e0b;}
.info{color:#3b82f6;}

.modal-input{
width:100%;
padding:10px;
border-radius:10px;
border:1px solid #ccc;
margin:15px 0;
display:none;
}

.modal-buttons{
display:flex;
justify-content:center;
gap:15px;
}

.modal-buttons button{
padding:10px 20px;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:bold;
transition:0.3s;
}

.btn-green{
background:linear-gradient(135deg,var(--green1),var(--green2));
color:white;
}

.btn-gray{
background:#e5e7eb;
}

/* ===== TOAST ===== */
.toast-container{
position:fixed;
top:20px;
right:20px;
display:flex;
flex-direction:column;
gap:10px;
z-index:9999;
}

.toast{
background:white;
padding:12px 20px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
animation:slideIn 0.4s ease;
font-weight:bold;
min-width:200px;
}

.toast.success{border-right:6px solid #16a34a;}
.toast.error{border-right:6px solid #dc2626;}
.toast.warning{border-right:6px solid #f59e0b;}
.toast.info{border-right:6px solid #3b82f6;}

@keyframes slideIn{
from{transform:translateX(100%);opacity:0;}
to{transform:translateX(0);opacity:1;}
}
`;
document.head.appendChild(style);

/* ================== JS ================== */

const overlay=document.getElementById("modalOverlay");
const icon=document.getElementById("modalIcon");
const titleEl=document.getElementById("modalTitle");
const messageEl=document.getElementById("modalMessage");
const buttonsEl=document.getElementById("modalButtons");
const inputEl=document.getElementById("modalInput");
const toastContainer=document.getElementById("toastContainer");

/* ===== Sound ===== */
function playSound(type){
const audio=new Audio();
if(type==="success") audio.src="https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3";
if(type==="error") audio.src="https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3";
if(type==="warning") audio.src="https://assets.mixkit.co/sfx/preview/mixkit-warning-alarm-buzzer-991.mp3";
audio.volume=0.4;
audio.play().catch(()=>{});
}

/* ===== Modal Close ===== */
window.closeModal=function(){
overlay.classList.remove("active");
}

/* ===== ALERT ===== */
window.showAlert=function(message,type="success",autoClose=false){
icon.className="modal-icon "+type;
icon.innerHTML=`<i class="fas fa-circle"></i>`;

messageEl.innerText=message;
inputEl.style.display="none";

buttonsEl.innerHTML=`<button class="btn-green" onclick="closeModal()">حسناً</button>`;
overlay.classList.add("active");
playSound(type);

if(autoClose){
setTimeout(closeModal,2000);
}
}

/* ===== CONFIRM ===== */
window.showConfirm=function(message,callback){
icon.className="modal-icon warning";
icon.innerHTML=`<i class="fas fa-exclamation-triangle"></i>`;
titleEl.innerText="تأكيد";
messageEl.innerText=message;
inputEl.style.display="none";

buttonsEl.innerHTML=`
<button class="btn-gray" onclick="closeModal()">إلغاء</button>
<button class="btn-green" onclick="confirmYes()">موافق</button>
`;

overlay.classList.add("active");

window.confirmYes=function(){
closeModal();
callback(true);
};
}

/* ===== PROMPT ===== */
window.showPrompt=function(message,callback){
icon.className="modal-icon info";
icon.innerHTML=`<i class="fas fa-edit"></i>`;
titleEl.innerText="إدخال";
messageEl.innerText=message;
inputEl.style.display="block";
inputEl.value="";

buttonsEl.innerHTML=`
<button class="btn-gray" onclick="closeModal()">إلغاء</button>
<button class="btn-green" onclick="submitPrompt()">إرسال</button>
`;

overlay.classList.add("active");

window.submitPrompt=function(){
const value=inputEl.value;
closeModal();
callback(value);
};
}

/* ===== TOAST ===== */
window.showToast=function(message,type="success",duration=3000){
const toast=document.createElement("div");
toast.className="toast "+type;
toast.innerText=message;
toastContainer.appendChild(toast);
playSound(type);

setTimeout(()=>{
toast.style.opacity="0";
setTimeout(()=>toast.remove(),300);
},duration);
}

/* ===== DARK MODE ===== */
window.toggleDarkMode=function(){
document.body.classList.toggle("dark-mode");
}

});
/* ================== PAGE WELCOME SYSTEM FINAL ================== */

function showPageWelcome(){

const url = location.href.toLowerCase();

const subject = localStorage.getItem("currentSubject");

const subjectNames = {
quran:"القرآن الكريم",
math:"الرياضيات",
islamic:"التربية الإسلامية",
arabic:"اللغة العربية",
english:"اللغة الإنجليزية",
physics:"الفيزياء",
chemistry:"الكيمياء",
biology:"الأحياء"
};

/* ===== صفحة المواد ===== */
if(url.includes("subjects.html")){
showToast("مرحباً بك دليل  التميز 💚","success");
}

/* ===== صفحة تفاصيل المادة ===== */


/* ===== صفحة التلخيص ===== */
if(url.includes("summary.html") || url.includes("ai-summary.html")){
showToast("جاهز لتلخيص المادة بالذكاء الاصطناعي 🤖","info");
}

/* ===== صفحة الاختبارات ===== */
if(url.includes("tests")){
showToast("استعد للاختبار 💪","warning");
}

/* ===== صفحة التجربة ===== */
if(url.includes("trial.html")){
showToast("أنت الآن في النسخة التجريبية 🌿","warning");
}

}


