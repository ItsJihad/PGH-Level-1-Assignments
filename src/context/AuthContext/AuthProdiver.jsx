import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import LoadingPage from "../../pages/additionalPages/Loading/LoadingPage";

function AuthProdiver({ children }) {
  const [currentUser, Setuser] = useState(null);
  const [loader,setLoader]=useState(true);

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const SignINuser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  useEffect(() => {
    const unsubs = onAuthStateChanged(Auth, (currentUser) => {
      console.log("inside Observer :", currentUser)
      Setuser(currentUser)
      setLoader(false)
    });

    return () => {
      unsubs();
    };
  }, [Auth,Setuser]);
  
  if(loader){
    return <LoadingPage></LoadingPage>
  }

const provider = new GoogleAuthProvider();

const OneTapGoogle=()=>{
  return signInWithPopup(Auth, provider)
}


const UpdateUser=(UpdateUser)=>{
  return updateProfile(Auth.currentUser,UpdateUser)
}

  const AuthInfo = {
    CreateUser,
    SignINuser,
    currentUser,
    setLoader,
    OneTapGoogle,
    UpdateUser
  };
  return (
    <div>
      <AuthContext value={AuthInfo}>{children}</AuthContext>
    </div>
  );
}

export default AuthProdiver;
