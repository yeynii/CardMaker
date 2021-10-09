import React,{useRef, useState} from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";

const CardAddForm = ({FileInput, onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null});

  const onFileChange = file => {
    setFile({
      fileName:file.name,
      fileURL:file.url,
    });
  };
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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({fileName: null, fileURL: null})
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
        <FileInput name={file.fileName} onFileChange={onFileChange}/>
      </div>
      <div className={styles.fileInput}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
