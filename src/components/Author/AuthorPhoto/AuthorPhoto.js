import React from "react";

import styles from "./AuthorPhoto.module.css";

const authorPhoto = (props) => {
    return (
        <div className={styles.AuthorPhoto}>
            <img alt={props.name} src={props.image}/>
        </div>
    );
};

export default authorPhoto;
