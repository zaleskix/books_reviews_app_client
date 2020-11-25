import React from "react";

import styles from "./BookDescription.module.css";

const bookDescription = (props) => {
  return (
    <div className={styles.Description}>
      <div className={styles.Caption}>Opis</div>
      <div className={styles.Content}> {props.description}</div>
    </div>
  );
};

export default bookDescription;
