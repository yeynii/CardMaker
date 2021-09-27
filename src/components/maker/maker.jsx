import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import styles from "./maker.module.css";
import Preview from "../preview/preview";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "yeyun",
      company: "anne",
      theme: "light",
      title: "Software Enginner",
      email: "yeynii@gmail.com",
      message: "go for it",
      fileName: "yeyun",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "yeyun",
      company: "anne",
      theme: "dark",
      title: "Software Enginner",
      email: "yeynii@gmail.com",
      message: "go for it",
      fileName: "yeyun",
      fileURL: "",
    },
    3: {
      id: "3",
      name: "yeyun",
      company: "anne",
      theme: "colorful",
      title: "Software Enginner",
      email: "yeynii@gmail.com",
      message: "go for it",
      fileName: "yeyun",
      fileURL: "",
    },
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  const onDelete = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) history.push("/");
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={createOrUpdateCard}
          onDelete={onDelete}
          onUpdate={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
