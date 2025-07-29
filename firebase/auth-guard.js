// firebase/auth-guard.js
import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "/pages/login.html";
    return;
  }

  const uid = user.uid;
  const docSnap = await getDoc(doc(db, "users", uid));

  if (!docSnap.exists()) {
    await signOut(auth);
    window.location.href = "/pages/login.html";
    return;
  }

  const role = docSnap.data().role;
  const path = window.location.pathname;

  if (path.includes("dashboard-murid") && role !== "murid") {
    window.location.href = "/";
  } else if (path.includes("dashboard-guru") && role !== "guru") {
    window.location.href = "/";
  } else if (path.includes("dashboard-admin") && role !== "admin") {
    window.location.href = "/";
  }
});
