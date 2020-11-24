import React from "react";

import styles from "./BookOfTheDay.module.css";

import DoktorSen from "../../../assets/photos/books/book1.png";

const bookoftheday = (props) => {
  return (
    <div className={styles.BookOfTheDay}>
      <div className={styles.Caption}>Książka dnia</div>
      <div className={styles.Title}>Doktor Sen</div>
      <div className={styles.Image}>
        <img alt={"Doktor Sen"} src={DoktorSen} />
      </div>
      <div className={styles.Score}>
          <div className={styles.Rating}>7.5 / 10</div>
          <div className={styles.NumberOfRatings}>( 18301 recenzji )</div>
      </div>
    </div>
  );
};

export default bookoftheday;
