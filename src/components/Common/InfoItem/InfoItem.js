import React from "react";
import styles from "./InfoItem.module.css";

const infoItem = (props) => {
   return (
      <div className={styles.InfoItem}>
         <div className={styles.Caption}>{props.caption}</div>
         <div className={styles.Value}>{props.value}</div>
      </div>
   );
};

export default infoItem;
