import React from "react";
import { withRouter } from 'react-router-dom';

import AuthorPhoto from "../AuthorPhoto/AuthorPhoto";

import styles from "./AuthorListItem.module.css";

const authorListItem = (props) => {
    const authorClicked = (authorId) => {
        props.history.push("/authors/" + authorId);
     };

    return (
        <div className={styles.AuthorItem}  onClick={() => authorClicked(props.author.identifier)}>
            {/*<AuthorPhoto name={props.author.name} image={props.author.image}/>*/}
            <div className={styles.Ranking}>{props.author.ranking}</div>
            <div className={styles.Name}>{props.author.name}</div>
        </div>
    );
};

export default withRouter(authorListItem);
