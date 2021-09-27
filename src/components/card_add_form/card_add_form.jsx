import React from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardAddForm = props => {
  const formRef = React.createRef();
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const titleRef = React.createRef();
  const themeRef = React.createRef();
  const emailRef = React.createRef();
  const messageRef = React.createRef();
  const onAdd = event => {
    event.preventDefault();
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value,
      company: companyRef.current.value,
      theme: themeRef.current.value,
      title: titleRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      fileName: '',
      fileURL: '',
    };
    props.onAdd(newCard);
    formRef.current.reset();
  }
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} type="text" className={styles.input} placeholder="Name"/>
      <input ref={companyRef} type="text" className={styles.input} placeholder="Company"/>
      <select ref={themeRef} className={styles.select}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} type="text" className={styles.input} placeholder="Title"/>
      <input ref={emailRef} type="text" className={styles.input} placeholder="Email" />
      <textarea ref={messageRef} className={styles.textarea} placeholder="Message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <div className={styles.fileInput}>
        <Button name="Add" onClick={onAdd} />
      </div>
    </form>
  );
};

export default CardAddForm;
