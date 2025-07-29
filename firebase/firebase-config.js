// firebase/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// firebase/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDp8xDHI10UhDrW_bAjXr1nYU08AYtqq1M",
  authDomain: "hslenterahati-f5ee1.firebaseapp.com",
  projectId: "hslenterahati-f5ee1",
  storageBucket: "hslenterahati-f5ee1.firebasestorage.app",
  messagingSenderId: "491189743285",
  appId: "1:491189743285:web:abf65d48da75c03ac9d8fc"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export biar bisa dipakai file lain
export { auth, db };