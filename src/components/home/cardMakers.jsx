import React from "react";
import styles from "./cardMakers.module.css";
import CardMaker from "./cardMaker";

const CardMakers = (props) => {
  return (
    <article className={styles.cardMaker}>
      <div className={styles.cardMakerText}>Card Maker</div>
      <ul className={styles.cardMakingLists}>
            <CardMaker/>
            <CardMaker/>
            <CardMaker/>
            <CardMaker/>
            <CardMaker/>
      </ul>
    </article>
  );
};

export default CardMakers;
