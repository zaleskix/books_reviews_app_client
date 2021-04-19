import React from "react";
import { withRouter } from 'react-router-dom';

import styles from "./RankingItem.module.css";

const rankingItem = (props) => {
    const rankingItemClicked = (identifier) => {
        if (identifier.match("^book")) {
           props.history.push("/books/" + identifier);
        } else {
           props.history.push("/authors/" + identifier);
        }
     };


    return (
        <div className={styles.RankingItem} onClick={() => rankingItemClicked(props.identifier)}>
            <div className={styles.ItemImage}>
                <img alt={props.name} src={`data:image/png;base64,${props.image}`}/>
            </div>
            <div className={styles.ItemCaption}>
                <div className={styles.ItemPosition}>{props.position}</div>
                <div className={styles.ItemName}>{props.name}</div>
            </div>
        </div>
    );
};

export default withRouter(rankingItem);
