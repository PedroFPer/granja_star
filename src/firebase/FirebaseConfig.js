import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database"; // Importando o módulo para banco de dados

const firebaseConfig = {
  apiKey: "AIzaSyAs9bhyCwko9COM7FzI7zwel8MlsefpYq8",
  authDomain: "granjastar-dc53a.firebaseapp.com",
  databaseURL: "https://granjastar-dc53a-default-rtdb.firebaseio.com", // URL do seu Realtime Database
  projectId: "granjastar-dc53a",
  storageBucket: "granjastar-dc53a.firebasestorage.app",
  messagingSenderId: "72736281745",
  appId: "1:72736281745:web:acc2948901b26033029b30",
};

// Inicializando o app com a configuração
const app = initializeApp(firebaseConfig);

// Configuração da autenticação
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistência configurada");
  })
  .catch((error) => {
    console.error("Erro ao configurar a persistência:", error);
  });

// Configuração do banco de dados
export const database = getDatabase(app); // Agora o banco de dados está disponível para ser usado em outros lugares
