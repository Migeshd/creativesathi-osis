import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvUVUNRTKyzzuqZ52W6DvWM1e9Hdh8dj8",
  authDomain: "creative-sathi-osis.firebaseapp.com",
  projectId: "creative-sathi-osis",
  storageBucket: "creative-sathi-osis.appspot.com",
  messagingSenderId: "593130770847",
  appId: "1:593130770847:web:251c3864f9de9ed071adaa",
  measurementId: "G-3Y8FXQ0DKZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
