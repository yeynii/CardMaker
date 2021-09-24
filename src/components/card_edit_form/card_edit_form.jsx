import React from "react";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card }) => {
  return (
    <li className={styles.cardMakingList}>
      <div className={styles.firstRow}>
        <input type="text" className={styles.inputName} />
        <input type="text" className={styles.inputCompany} />
        <select className={styles.inputTheme}>
          <option value="Dark">Dark</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div className={styles.secondRow}>
        <input type="text" className={styles.inputTitle} />
        <input type="text" className={styles.inputEmail} />
      </div>
      <div className={styles.thirdRow}>
        <input type="" className={styles.inputMessage} />
      </div>
      <div className={styles.forthRow}>
        <button className={styles.imgButton}>{card.fileName}</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </li>
  );
};

export default CardEditForm;
