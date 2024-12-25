import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwSS0AdpTmFQSEr8h7eA2U7UH-E0qz-fI",
  authDomain: "vytoblitz.firebaseapp.com",
  projectId: "vytoblitz",
  storageBucket: "vytoblitz.firebasestorage.app",
  messagingSenderId: "382417520765",
  appId: "1:382417520765:web:3158efad194fde93948914",
  measurementId: "G-73Z99T30C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)


// export {auth}
