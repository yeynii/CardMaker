import React, { useRef, useEffect } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card, onDelete, onUpdate }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(card.id);
  };

  const nameUpdate = () => {
    const updated = {...card, name:nameRef.current.value};
    onUpdate(card.id, updated);
  };
  const companyUpdate = () => {
    const updated = {...card, company:companyRef.current.value};
    onUpdate(card.id, updated);
  };
  const titleUpdate = () => {
    const updated = {...card, title:titleRef.current.value};
    onUpdate(card.id, updated);
  };
  const themeUpdate = () => {
    const updated = {...card, theme:themeRef.current.value};
    onUpdate(card.id, updated);
  };
  const emailUpdate = () => {
    const updated = {...card, email:emailRef.current.value};
    onUpdate(card.id, updated);
  };
  const messageUpdate = () => {
    const updated = {...card, message:messageRef.current.value};
    onUpdate(card.id, updated);
  };

  useEffect(() => {
    nameRef.current.value = name;
    companyRef.current.value = company;
    titleRef.current.value = title;
    themeRef.current.value = theme;
    emailRef.current.value = email;
    messageRef.current.value = message;
  }, []);
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        className={styles.input}
        onChange={nameUpdate}
      />
      <input ref={companyRef} type="text" className={styles.input} onChange={companyUpdate}/>
      <select ref={themeRef} className={styles.select} onChange={themeUpdate} >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} type="text" className={styles.input} onChange={titleUpdate} />
      <input ref={emailRef} type="text" className={styles.input} onChange={emailUpdate} />
      <textarea ref={messageRef} className={styles.textarea} onChange={messageUpdate} />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      <div className={styles.fileInput}>
        <Button name="Delete" onClick={handleDelete} />
      </div>
    </form>
  );
};

export default CardEditForm;
