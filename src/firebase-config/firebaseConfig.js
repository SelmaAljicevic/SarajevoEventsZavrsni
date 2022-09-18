import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH7u1DHwKo4bX6W7xwDQveZZvg_gibt2Q",
  authDomain: "sarajevoevents-auth.firebaseapp.com",
  projectId: "sarajevoevents-auth",
  storageBucket: "sarajevoevents-auth.appspot.com",
  messagingSenderId: "629854466542",
  appId: "1:629854466542:web:095e65cddefc4472499eff",
};

export const firebaseApp = initializeApp(firebaseConfig);
