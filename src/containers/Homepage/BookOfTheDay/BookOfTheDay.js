import React from "react";

import styles from "./BookOfTheDay.module.css";
import BookPrimaryInfo from "../../../components/Book/BookPrimaryInfo/BookPrimaryInfo";
import BookAdditionalInfo from "../../../components/Book/BookAdditionalInfo/BookAdditionalInfo";

const bookOfTheDay = (props) => {
  return (
    <div className={styles.BookOfTheDay}>
      <div className={styles.Title}>Doktor Sen</div>
      <div className={styles.BookContent}>
        <BookPrimaryInfo book={props.book} />
        <BookAdditionalInfo book={props.book} />
      </div>
    </div>
  );
};

export default bookOfTheDay;
