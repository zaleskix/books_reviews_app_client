import React from "react";

import styles from "./BookAdditionalInfo.module.css";
import BookDescription from "../BookDescription/BookDescription";
import TextButton from "../../UI/Buttons/TextButton/TextButton";

const bookAdditionalInfo = (props) => {
  return (
    <div className={styles.BookAdditionalInfo}>
      <div className={styles.BookDescription}>
        <BookDescription description={props.book.description} />
      </div>
      <div className={styles.Buttons}>
        <TextButton text={"Dodaj do ulubionych"} isPrimary />
        <TextButton text={"Udostepnij"} />
      </div>
    </div>
  );
};

export default bookAdditionalInfo;
