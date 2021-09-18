import React from "react";
import styles from "./cardPreview.module.css";

const CardPreview = (props) => {
  return (
    <article className={styles.cardPreview}>
      <div className={styles.cardPreviewText}>Card Preview</div>
      <ul>
        <li className={styles.cardPreviewList}></li>
      </ul>
    </article>
  );
};

export default CardPreview;
