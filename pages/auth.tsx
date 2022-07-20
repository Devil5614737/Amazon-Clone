import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../components/Login";
import { auth } from "../Firebase/config";
import { Input } from "../Interfaces/Input";
import styles from "../styles/Login.module.css";

const Auth: NextPage = () => {
   const router=useRouter();
  
  const [values, setValues] = useState<Input>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("currentUser", JSON.stringify(user));
        if(user){
          router.push('/home')
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage)
      });
  };
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("currentUser", JSON.stringify(user));
        if(user){
          router.push('/home')
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage)
      });
  };





  return (
    <main className={styles.main}>
      <div className={styles.logo}>
      <Image src='/logo2.svg' height={31} width={103} objectFit='contain' alt='amazon logo'/>

      </div>
      <Login values={values} setValues={setValues} onLogin={handleLogin} onSignup={handleSignup}/>
    </main>
  );
};

export default Auth;
