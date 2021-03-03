import React from "react";

import styles from "./Description.module.css";

const description = (props) => {
    return (
        <div className={styles.Description}>
            <div className={styles.Caption}>{props.caption}</div>
            <div className={styles.Content}> {props.content}</div>
        </div>
    );
};

export default description;
