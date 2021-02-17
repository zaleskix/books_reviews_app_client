import React from "react";

import AuthorPhoto from "../AuthorPhoto/AuthorPhoto";

import styles from "./AuthorListItem.module.css";

const authorListItem = (props) => {
    return (
        <div className={styles.AuthorItem}>
            <AuthorPhoto name={props.name} image={props.image}/>
            <div className={styles.Ranking}>{props.ranking}</div>
            <div className={styles.Name}>{props.name}</div>
        </div>
    );
};

export default authorListItem;
