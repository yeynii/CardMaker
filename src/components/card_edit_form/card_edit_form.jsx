import React, { useRef, useEffect } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, onDelete, onUpdate }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    onUpdate({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    onUpdate({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = () => {
    onDelete(card);
  };

  useEffect(() => {
    nameRef.current.value = name;
    companyRef.current.value = company;
    titleRef.current.value = title;
    themeRef.current.value = theme;
    emailRef.current.value = email;
    messageRef.current.value = message;
  });
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type="text"
        name="company"
        className={styles.input}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        name="theme"
        className={styles.select}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        name="title"
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        type="text"
        name="email"
        className={styles.input}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        name="message"
        className={styles.textarea}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.fileInput}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
