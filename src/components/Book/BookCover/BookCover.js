import React from "react";
import styles from "./BookCover.module.css";

const bookCover = (props) => {
  return (
    <div className={styles.BookCover}>
      <img alt={props.name} src={props.image} />
    </div>
  );
};

export default bookCover;
