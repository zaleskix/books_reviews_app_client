import React from "react";

import styles from "./PageHeader.module.css";

const pageHeader = (props) => {
  return (
    <div className={styles.PageHeader}>
      <div className={styles.Caption}> {props.name}</div>
    </div>
  );
};

export default pageHeader;
