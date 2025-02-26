import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBg5M6dW0vGnjkFDbWEJDyhVpjhV5aqtQs",
  authDomain: "movie-web-7a7ea.firebaseapp.com",
  projectId: "movie-web-7a7ea",
  storageBucket: "movie-web-7a7ea.firebasestorage.app",
  messagingSenderId: "499775147666",
  appId: "1:499775147666:web:41dfa6f571d71e2c74a04b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const signUp= async(name, email, password)=>{
    try {
        let res=await createUserWithEmailAndPassword(auth,email,password);
        let user=res.user
        await addDoc(collection(db, 'users'),{
            uid: user.uid,
            name,
            authProvider:'local',
            email,
        });
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
    
}
const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}
const logout=()=>{
    signOut(auth)
}
export {auth,db,login,logout,signUp}