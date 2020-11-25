import React from "react";

import styles from "./TextButton.module.css";

const textButton = (props) => {
  let style = props.isPrimary ? styles.Primary : styles.Secondary;

  return <div className={style}>{props.text}</div>;
};

export default textButton;
