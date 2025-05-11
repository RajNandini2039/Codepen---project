import {getApps , getApp ,initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwMqe-kX1YM7Gy_lXDlJMVc55VRXtEOPg",
  authDomain: "codepen-clone-a2c80.firebaseapp.com",
  projectId: "codepen-clone-a2c80",
  storageBucket: "codepen-clone-a2c80.firebasestorage.app",
  messagingSenderId: "737629846407",
  appId: "1:737629846407:web:34fca6a6374b340f70b122"
};
//   console.log(firebaseConfig);
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export {app , auth ,db};
