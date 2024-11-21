import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0Yfa4Cy8btZrMJfdE0wRA1Cu7WQBpM8s",
  authDomain: "miniblog-c7bea.firebaseapp.com",
  projectId: "miniblog-c7bea",
  storageBucket: "miniblog-c7bea.firebasestorage.app",
  messagingSenderId: "231379662799",
  appId: "1:231379662799:web:fd5722a2ce6858c45b04ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export { db }