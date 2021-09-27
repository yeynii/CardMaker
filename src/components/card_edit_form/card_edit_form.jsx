import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} value={name} />
      <input type="text" className={styles.input} value={company} />
      <select className={styles.select} value={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" className={styles.input} value={title} />
      <input type="text" className={styles.input} value={email} />
      <textarea className={styles.textarea} value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName}/>
      </div>
      <div className={styles.fileInput}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
