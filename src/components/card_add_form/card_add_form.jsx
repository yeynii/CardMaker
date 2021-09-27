import React,{useRef} from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardAddForm = ({onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    onAdd(newCard);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        className={styles.input}
        placeholder="Name"
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        placeholder="Company"
      />
      <select ref={themeRef} className={styles.select}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        className={styles.input}
        placeholder="Title"
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.input}
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        placeholder="Message"
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <div className={styles.fileInput}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
