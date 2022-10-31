import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAl4ZNkVSD4NQQdF-wjtCzRS8zds94BxfU",
    authDomain: "pizza-store-fa1aa.firebaseapp.com",
    projectId: "pizza-store-fa1aa",
    storageBucket: "pizza-store-fa1aa.appspot.com",
    messagingSenderId: "521948637623",
    appId: "1:521948637623:web:680c491a954273fd522032",
    measurementId: "G-ZDRN2VQXJ4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
