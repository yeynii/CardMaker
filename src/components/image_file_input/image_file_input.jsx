import React,{useRef} from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) =>{
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange =  async event => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url
    })
  };
  return (
    <div className={styles.container}>
      <button htmlFor="profile_pic" className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
      <input
      ref={inputRef}
        name="fileURL"
        id="profile_pic"
        type="file"
        accept="image/*"
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};
export default ImageFileInput;
