import React from "react";

import styles from "./Score.module.css";
import ScoreButtons from "../../UI/Buttons/ScoreButtons/ScoreButtons";

const score = (props) => {
  return (
    <div className={styles.Score}>
      <div className={styles.ScoreContent}>
        <div className={props.rating >= 0 ? styles.RatingPositive : styles.RatingNegative}>{props.rating}</div>
        <div className={styles.NumberOfRatings}>
          ( {props.numberOfRatings} ocen )
        </div>
      </div>
      <div className={styles.ScoreButtons}>
        <ScoreButtons
          disabled={props.disabled}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      </div>
    </div>
  );
};

export default score;
