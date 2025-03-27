// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs9bhyCwko9COM7FzI7zwel8MlsefpYq8",
  authDomain: "granjastar-dc53a.firebaseapp.com",
  databaseURL: "https://granjastar-dc53a-default-rtdb.firebaseio.com",
  projectId: "granjastar-dc53a",
  storageBucket: "granjastar-dc53a.firebasestorage.app",
  messagingSenderId: "72736281745",
  appId: "1:72736281745:web:acc2948901b26033029b30",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, inMemoryPersistence)
  .then(() => {
  })
  .catch((error) => {
    console.error("Erro ao configurar a persistência:", error);
  });
