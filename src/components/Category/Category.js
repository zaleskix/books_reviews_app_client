import React from "react";
import { withRouter } from 'react-router-dom';

import styles from "./Category.module.css";

const category = (props) => {
    const categoryClicked = (categoryId) => {
        props.history.push("/categories/" + categoryId);
     };

    return (
        <div className={styles.Category} onClick={() => categoryClicked(props.category.identifier)}>
            <img alt={props.category.name} src={`data:image/png;base64,${props.category.image}`}/>
            <div className={styles.ImageFade}/>
            <div className={styles.CategoryName}>{props.category.name}</div>
        </div>
    );
};

export default withRouter(category);
