import React from "react";

import styles from "./AuthorItem.module.css";

const authorItem = (props) => {
  return (
    <div className={styles.AuthorItem}>
      <div className={styles.Image}>
        <img alt={props.name} src={props.image} />
      </div>
      <div className={styles.Ranking}>{props.ranking}</div>
      <div className={styles.Name}>{props.name}</div>
    </div>
  );
};

export default authorItem;
