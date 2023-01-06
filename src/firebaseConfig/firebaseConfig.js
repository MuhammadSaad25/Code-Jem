import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCYzYnvOuZvdQABJhCWU9os2rUFtDPNLw",
  authDomain: "code-jem.firebaseapp.com",
  projectId: "code-jem",
  storageBucket: "code-jem.appspot.com",
  messagingSenderId: "595174543414",
  appId: "1:595174543414:web:2234f2d0f8bbcd94628897",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
