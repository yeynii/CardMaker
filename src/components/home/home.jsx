import React, { useEffect } from "react";
import { useHistory } from "react-router";
import CardMakers from "./cardMakers";
import styles from "./home.module.css";
import CardPreview from './cardPreview';

const Home = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) 
        history.push("/");
    });
  });
  return (
    <div className={styles.maker}>
      <header className={styles.homeHeader}>
        <img className={styles.homeLogo} src="/images/logo.png" alt="logo" />
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
        <div className={styles.headerTitle}>Business Card Maker</div>
      </header>
      <section className={styles.cardPage}>
          <CardMakers/>
          <hr />
          <CardPreview/>
      </section>
      <footer className={styles.homeFooter}>Code your dream</footer>
    </div>
  );
};
export default Home;
