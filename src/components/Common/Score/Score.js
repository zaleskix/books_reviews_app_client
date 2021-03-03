import React from "react";

import styles from "./Score.module.css";

const score = (props) => {
    return (
        <div className={styles.Score}>
            <div className={styles.Rating}>{props.rating} / 10</div>
            <div className={styles.NumberOfRatings}>
                ( {props.numberOfRatings} recenzji )
            </div>
        </div>
    );
};

export default score;
