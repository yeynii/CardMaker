import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router";

const Login = ({authService}) => {
  const history = useHistory();
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(data => goHome(data.user.uid));
  }
  const goHome = (userId) =>{
    history.push({pathname: '/home', state: {id:userId}});
  }

  useEffect(()=>{
    authService.onAuthChange(user => {
      user && goHome(user.id);
    });
  });
  
  return (
    <div className={styles.form}>
      <header className={styles.loginHeader}>
        <img className={styles.loginLogo} src="/images/logo.png" alt="logo" />
        <div className={styles.headerTitle}>Business Card Maker</div>
      </header>
      <section className={styles.loginPage}>
        <div className={styles.loginText}>Login</div>
        <button className={styles.authButton} onClick={onLogin}>Google</button>
        <button className={styles.authButton} onClick={onLogin}>Github</button>
      </section>
      <footer className={styles.loginFooter}>Code your dream</footer>
    </div>
  );
};
export default Login;
