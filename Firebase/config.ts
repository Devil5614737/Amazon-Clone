import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDyjvlOH26KNj9MIQtzv9e7MV1FZlhX6Ps",
  authDomain: "clone-b59cf.firebaseapp.com",
  projectId: "clone-b59cf",
  storageBucket: "clone-b59cf.appspot.com",
  messagingSenderId: "133484024453",
  appId: "1:133484024453:web:6b44585785809df13f8fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);