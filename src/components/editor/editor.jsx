import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from './../card_add_form/card_add_form';

const Editor = ({cards, onAdd, onDelete, onUpdate}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm
          key={card.id}
          card={card}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      <CardAddForm onAdd={onAdd} />
    </section>
  );
};

export default Editor;
