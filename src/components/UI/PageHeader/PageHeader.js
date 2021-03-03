import React from "react";

import styles from "./PageHeader.module.css";

const pageHeader = (props) => {
    return (
        <div className={styles.PageHeader}>
            <div className={styles.Caption}> {props.caption}</div>
            {props.subcaption ? <div className={styles.Subcaption}> {props.subcaption}</div> : null }
        </div>
    );
};

export default pageHeader;
