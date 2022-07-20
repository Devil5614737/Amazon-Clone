import React from 'react';
import { Input } from '../Interfaces/Input';
import styles from '../styles/Login.module.css';




interface LoginProps{
    values:Input
    setValues:(values:Input)=>void;
    onLogin:()=>void;
   onSignup:()=>void
}



export default function Login({values,setValues,onLogin,onSignup}:LoginProps){
   
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
      };
        


    return (
        <>
        <div className={styles.card}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
            Sign-In
        </p>
        <div className={styles.inputContainer}>
            <label htmlFor='email'>Email or mobile phone number</label>
            <input id='email' type='email' onChange={handleChange}  name='email' value={values.email}/>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' onChange={handleChange} name='password'  value={values.password}/>
            <button className={styles.loginBtn} onClick={onLogin}>
                Log In
            </button>
        </div>
      </div>
        </div>
        <div className={styles.signup}>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <p>New to Amazon?</p>
                <div className={styles.line}></div>
            </div>
            <button onClick={onSignup} className={styles.signupBtn}>Create your Amazon account</button>
        </div>
        </>
    )
}