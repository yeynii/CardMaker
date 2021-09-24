import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import styles from "./home.module.css";
import Preview from '../preview/preview';

const Home = ({ authService }) => {
  const [card, setCards] = useState([
    {
      id: '1',
      name: 'yeyun',
      company: 'anne',
      theme: 'light',
      title: 'Software Enginner',
      email: 'yeynii@gmail.com',
      message: 'go for it',
      fileName: 'yeyun',
      fileURL:null
    },
    {
      id: '2',
      name: 'yeyun',
      company: 'anne',
      theme: 'dark',
      title: 'Software Enginner',
      email: 'yeynii@gmail.com',
      message: 'go for it',
      fileName: 'yeyun',
      fileURL:''
    },
    {
      id: '3',
      name: 'yeyun',
      company: 'anne',
      theme: 'colorful',
      title: 'Software Enginner',
      email: 'yeynii@gmail.com',
      message: 'go for it',
      fileName: 'yeyun',
      fileURL:''
    },
  ]);
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
          <Editor cards ={card}/>
          <hr />
          <Preview cards ={card}/>
      </section>
      <footer className={styles.homeFooter}>Code your dream</footer>
    </div>
  );
};
export default Home;
