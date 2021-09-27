import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from './../card_add_form/card_add_form';

const Editor = ({cards, onAdd, onDelete, onUpdate}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          card={cards[key]}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      <CardAddForm onAdd={onAdd} />
    </section>
  );
};

export default Editor;
