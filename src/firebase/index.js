import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOkU5K17bQbunkTMk0biAxC51ThKSAgsQ",
  authDomain: "eshop-2e3d5.firebaseapp.com",
  projectId: "eshop-2e3d5",
  storageBucket: "eshop-2e3d5.appspot.com",
  messagingSenderId: "793801988889",
  appId: "1:793801988889:web:7924a34965b9e258028388"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();