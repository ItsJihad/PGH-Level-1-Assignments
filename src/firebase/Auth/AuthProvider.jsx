import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { signInWithPopup,GoogleAuthProvider  } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader]=useState(true)
  const [error,setError]=useState("")
  

const googleSignin=()=>{
  
  const provider = new GoogleAuthProvider();
  setLoader(true)
  return signInWithPopup(auth, provider);
  
}



  const createUser = (email, password ) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password );
  };

  const UpdateUser=(updatedData)=>{
       return   updateProfile(auth.currentUser,updatedData)
  }

  
  const passUpdate=(newPassword)=>{
       return updatePassword(auth.currentUser,newPassword)
  }

  const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }



  const checkUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      logout();
    };
  }, []);

  const AuthData = {
    user,
    setUser,
    createUser,
    checkUser,
    loader,
    setLoader,
    UpdateUser,
    passUpdate,
    error,setError,
    resetPassword,
    googleSignin
    
  };

  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
