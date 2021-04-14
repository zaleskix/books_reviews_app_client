import React from "react";

import styles from "./TextButton.module.css";

const textButton = (props) => {

    const buttonStyles = [props.isPrimary ? styles.Primary : styles.Secondary];

    if (props.removeButton) {
        buttonStyles.push(styles.Remove)    }

    return <div className={buttonStyles.join(" ")} onClick={props.clicked}>{props.text}</div>;
};

export default textButton;
