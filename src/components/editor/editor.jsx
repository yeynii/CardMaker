import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";

const Editor = ({cards}) => {
  return (
    <section className={styles.cardMaker}>
      <div className={styles.cardMakerText}>Card Maker</div>
      <ul className={styles.cardMakingLists}>
        {cards.map(card => (<CardEditForm card={card}/>))}
      </ul>
    </section>
  );
};

export default Editor;
