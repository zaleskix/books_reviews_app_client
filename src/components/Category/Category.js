import React from "react";

import styles from "./Category.module.css";

const category = (props) => {
    return (
        <div className={styles.Category}>
            <img alt={props.name} src={props.image}/>
            <div className={styles.ImageFade}/>
            <div className={styles.CategoryName}>{props.name}</div>
        </div>
    );
};

export default category;
