/* ============================= */
/* =====   Inject CSS   ===== */
/* ============================= */

const layoutCSS = `
<style>

/* ========================= */
/* ===== Header Bar ===== */
/* ========================= */

.app-header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 85px;
    background: linear-gradient(135deg,#16a34a,#22c55e);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 40px rgba(34,197,94,0.35);
    z-index: 1000;
}

.header-inner{
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    position: relative;
}

/* ===== Title Centered ===== */
.header-title{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: .5px;
}

/* ========================= */
/* ===== Buttons ===== */
/* ========================= */

.back-btn,
.menu-btn{
    background: rgba(255,255,255,0.15);
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 20px;
    cursor: pointer;
    backdrop-filter: blur(6px);
    transition: all .3s ease;
}

.menu-btn:hover,
.back-btn:hover{
    background: rgba(255,255,255,0.25);
    transform: translateY(-3px);
}

/* ========================= */
/* ===== Overlay ===== */
/* ========================= */

.menu-overlay{
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(6px);
    opacity: 0;
    visibility: hidden;
    transition: 0.35s;
    z-index: 998;
}

.menu-overlay.active{
    opacity: 1;
    visibility: visible;
}

/* ========================= */
/* ===== Side Menu ===== */
/* ========================= */

.side-menu{
    position: fixed;
    top: 0;
    right: -320px;
    width: 300px;
    height: 100vh;
    background: linear-gradient(180deg,#16a34a,#14532d);
    box-shadow: -20px 0 50px rgba(0,0,0,0.35);
    padding: 30px 22px;
    transition: 0.45s cubic-bezier(.77,0,.18,1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    overflow-y: auto;
    color: white;
}

.side-menu.active{
    right: 0;
}

/* ===== Header inside menu ===== */
.menu-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
    font-weight:bold;
    font-size:18px;
}

.menu-header button{
    background:rgba(255,255,255,0.15);
    border:none;
    color:white;
    padding:8px 10px;
    border-radius:10px;
    cursor:pointer;
}

/* ===== Links ===== */
.side-menu a{
    text-decoration:none;
    color:white;
    padding:12px 14px;
    border-radius:14px;
    margin-bottom:10px;
    font-weight:600;
    transition:0.3s;
    display:block;
}

.side-menu a:hover{
    background:rgba(255,255,255,0.15);
    transform:translateX(-8px);
}

/* ===== Dropdown ===== */
.dropdown-btn{
    padding:12px 14px;
    cursor:pointer;
    border-radius:14px;
    font-weight:600;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:0.3s;
}

.dropdown-btn:hover{
    background:rgba(255,255,255,0.15);
}

.dropdown-content{
    max-height:0;
    overflow:hidden;
    transition:0.4s ease;
}

.dropdown-content a{
    font-size:14px;
    margin-bottom:6px;
    background:rgba(255,255,255,0.1);
    border-radius:12px;
    padding:10px;
}

.dropdown-content.show{
    max-height:600px;
}

/* ===== Logout ===== */
.logout-btn{
    margin-top:auto;
    background:linear-gradient(135deg,#ef4444,#dc2626);
    color:white;
    border:none;
    padding:14px;
    border-radius:16px;
    cursor:pointer;
    font-weight:bold;
    transition:0.3s;
}

.logout-btn:hover{
    transform:translateY(-3px);
    box-shadow:0 10px 25px rgba(220,38,38,0.4);
}

/* ===== Body Offset ===== */
body{
    padding-top:100px;
}
.app-message-overlay{
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.45);
display:flex;
align-items:center;
justify-content:center;
z-index:9999;
}

.app-message-box{
background:white;
padding:30px;
border-radius:20px;
max-width:350px;
width:90%;
text-align:center;
}

</style>
`;

/* ============================= */
/* =====   Inject HTML   ===== */
/* ============================= */

const layoutHTML = `
<div class="app-header">
    <div class="header-inner">
        <button class="menu-btn" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </button>

        <div class="header-title">
            <i class="fas fa-graduation-cap"></i>
            دليل التميز
        </div>

        <button class="back-btn" onclick="goBack()">
            <i class="fas fa-arrow-left"></i>
        </button>
    </div>
</div>
<div class="menu-overlay" id="menuOverlay" onclick="toggleMenu()"></div>

<div id="sideMenu" class="side-menu">
    <div class="menu-header">
        <h3>القائمة</h3>
        <button onclick="toggleMenu()">
            <i class="fas fa-times"></i>
        </button>
    </div>

    <a href="subjects.html">
        <i class="fas fa-home"></i> الصفحة الرئيسية
    </a>

<div class="dropdown">
    <div class="dropdown-btn" onclick="toggleSubjects()">
        <span><i class="fas fa-book"></i> المواد</span>
        <i class="fas fa-chevron-down"></i>
    </div>

    <div id="subjectsList" class="dropdown-content">
        <a onclick="openSubject('quran')">القرآن الكريم</a>
                <a onclick="openSubject('islamic')">التربية الإسلامية</a>
            <a onclick="openSubject('arabic')">اللغة العربية</a>
                    <a onclick="openSubject('english')">اللغة الإنجليزية</a>

        <a onclick="openSubject('math')">الرياضيات</a>
        <a onclick="openSubject('physics')">الفيزياء</a>
        <a onclick="openSubject('chemistry')">الكيمياء</a>
        <a onclick="openSubject('biology')">الأحياء</a>

</div>
</div>


<div class="dropdown">
    <div class="dropdown-btn" onclick="toggleModels()">
        <span><i class="fas fa-file-pdf"></i> النماذج التدريبية</span>
        <i class="fas fa-chevron-down"></i>
    </div>

    <div id="modelsListMenu" class="dropdown-content">
        <a onclick="openModelSubject('quran')">القرآن الكريم</a>
                <a onclick="openModelSubject('islamic')">التربية الإسلامية</a>
           <a onclick="openModelSubject('arabic')">اللغة العربية</a>
           
                   <a onclick="openModelSubject('english')">اللغة الإنجليزية</a>

        <a onclick="openModelSubject('math')">الرياضيات</a>
        <a onclick="openModelSubject('physics')">الفيزياء</a>
        <a onclick="openModelSubject('chemistry')">الكيمياء</a>
        <a onclick="openModelSubject('biology')">الأحياء</a>

 </div>
</div>
<div class="dropdown">
    <div class="dropdown-btn" onclick="toggleTests()">
        <span><i class="fas fa-clipboard-check"></i> الاختبارات</span>
        <i class="fas fa-chevron-down"></i>
    </div>

    <div id="testsListMenu" class="dropdown-content">
        <a onclick="openTestSubject('quran')">القرآن الكريم</a>
                <a onclick="openTestSubject('islamic')">التربية الإسلامية</a>
           <a onclick="openTestSubject('arabic')">اللغة العربية</a>
        <a onclick="openTestSubject('english')">اللغة الإنجليزية</a>

        <a onclick="openTestSubject('math')">الرياضيات</a>
        <a onclick="openTestSubject('physics')">الفيزياء</a>
        <a onclick="openTestSubject('chemistry')">الكيمياء</a>
        <a onclick="openTestSubject('biology')">الأحياء</a>
 </div>
</div>

    <a href="about.html">
        <i class="fas fa-info-circle"></i> من نحن  
    </a>

    <a href="complaints.html">
        <i class="fas fa-envelope">مميزات التطبيق</i> 
    </a>
    

<button class="logout-btn" onclick="goBack()">
    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
</button>
</div>
`;

document.head.insertAdjacentHTML("beforeend", layoutCSS);
document.body.insertAdjacentHTML("afterbegin", layoutHTML);

/* ============================= */
/* =====   Functions   ===== */
/* ============================= */

function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("active");
    document.getElementById("menuOverlay").classList.toggle("active");
}

function toggleSubjects(){
    document.getElementById("subjectsList").classList.toggle("show");
}

function logout(){
    localStorage.clear();
    window.location.href="login.html";
}

function goBack(){
    window.history.back();
}
function showAppMessage(text){

const overlay = document.createElement("div");
overlay.className = "app-message-overlay";

overlay.innerHTML = `
<div class="app-message-box">

<div style="font-size:35px;color:#16a34a;margin-bottom:10px;">
<i class="fas fa-bell"></i>
</div>

<div style="margin-bottom:20px;font-size:16px;">
${text}
</div>

<button onclick="this.closest('.app-message-overlay').remove()"
style="
background:#16a34a;
color:white;
border:none;
padding:10px 20px;
border-radius:10px;
cursor:pointer;
">
حسناً
</button>

</div>
`;

document.body.appendChild(overlay);

}
async function checkAppStatus(){

const snap = await getDoc(settingsRef);

if(!snap.exists()) return;

const data = snap.data();

if(data.appStopped){

document.body.innerHTML = `
<div style="
display:flex;
align-items:center;
justify-content:center;
height:100vh;
font-family:Segoe UI;
text-align:center;
">

<div>

<h2>🔧 التطبيق متوقف مؤقتاً</h2>

<p>نقوم حالياً بالصيانة</p>

</div>

</div>
`;

}

}

function openSubject(subject){
    localStorage.setItem("currentSubject",subject);
    window.location.href="subject-detail.html";
}
function toggleModels(){
document.getElementById("modelsListMenu").classList.toggle("show");
}
function openModelSubject(subject){

localStorage.setItem("modelSubject",subject);

window.location.href="models-list.html";

}
function toggleTests(){
document.getElementById("testsListMenu").classList.toggle("show");
}

function openTestSubject(subject){

localStorage.setItem("testSubject",subject);

window.location.href="tests-list.html";

}