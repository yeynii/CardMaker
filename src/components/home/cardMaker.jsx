import React from "react";
import styles from "./cardMaker.module.css";

const CardMaker = (props) => {
  return (
    <article className={styles.cardMaker}>
      <div className={styles.cardMakerText}>Card Maker</div>
      <ul className={styles.cardMakingLists}>
        <li className={styles.cardMakingList}>
            <div className={styles.firstRow}>
                <input type="text" className={styles.inputName} />
                <input type="text" className={styles.inputCompany} />
                <select className={styles.inputTheme}>
                    <option value="Dark">Dark</option>
                    <option value="Dark">Dark</option>
                    <option value="Dark">Dark</option>
                </select>
            </div>
            <div className={styles.secondRow}>
                <input type="text" className={styles.inputJob} />
                <input type="text" className={styles.inputEmail} /></div>
            <div className={styles.thirdRow}>
                <input type="" className={styles.inputIntro} /></div>
            <div className={styles.forthRow}>
                <button className={styles.imgButton}>anna</button>
                <button className={styles.deleteButton}>Delete</button>
            </div>
        </li>
      </ul>
    </article>
  );
};

export default CardMaker;
