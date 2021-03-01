import React from "react";
import styles from "./BookDetailsItem.module.css";

const bookDetailsItem = (props) => {
   return (
      <div className={styles.BookDetailsItem}>
         <div className={styles.Caption}>{props.caption}</div>
         <div className={styles.Value}>{props.value}</div>
      </div>
   );
};

export default bookDetailsItem;
