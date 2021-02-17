import React from "react";

import styles from "./Submit.module.css";

const submitButton = (props) => {
  return (

      <div className={styles.ButtonWrapper}>
          <button disabled={props.disabled} className={[styles.Button, styles[props.btnType]].join(' ')}>
              {props.text}
          </button>
      </div>
  );
};

export default submitButton;
