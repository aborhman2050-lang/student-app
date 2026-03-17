import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCzQ3CAwzIS41TuWsbhomTdsdDzJGH3bmU",
authDomain: "studentapp-97888.firebaseapp.com",
projectId: "studentapp-97888",
storageBucket: "studentapp-97888.appspot.com",
messagingSenderId: "654721058804",
appId: "1:654721058804:web:db251bb134e8abd73fdba1"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };