import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzh3qY1TF5i1N5XQQgPSOVBHq_DQ96eC4",
    authDomain: "office-time-3686b.firebaseapp.com",
    projectId: "office-time-3686b",
    storageBucket: "office-time-3686b.appspot.com",
    messagingSenderId: "1062930635190",
    appId: "1:1062930635190:web:93d9250dfb5e5f6b588917",
    measurementId: "G-MHXPLCFQ82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export default app;