import React from "react";

import styles from "./RankingItem.module.css";

const rankingItem = (props) => {
    return (
        <div className={styles.RankingItem}>
            <div className={styles.ItemImage}>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className={styles.ItemCaption}>
                <div className={styles.ItemPosition}>{props.position}</div>
                <div className={styles.ItemName}>{props.name}</div>
            </div>
        </div>
    );
};

export default rankingItem;
