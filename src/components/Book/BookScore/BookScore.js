import React from "react";

import styles from "./BookScore.module.css";

const bookScore = (props) => {
    return (
        <div className={styles.BookScore}>
            <div className={styles.Rating}>{props.rating} / 10</div>
            <div className={styles.NumberOfRatings}>
                ( {props.numberOfRatings} recenzji )
            </div>
        </div>
    );
};

export default bookScore;
