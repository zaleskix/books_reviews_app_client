import React from "react";

import styles from "./ScoreButtons.module.css";

import UpvoteIcon from "../../../../assets/icons/upvote.svg";
import UpvoteDisabledIcon from "../../../../assets/icons/upvote_disabled.svg";
import DownvoteIcon from "../../../../assets/icons/downvote.svg";
import DownvoteDisabledIcon from "../../../../assets/icons/downvote_disabled.svg";

const scoreButtons = (props) => {
  let upvoteIcon = props.disabled ? UpvoteDisabledIcon : UpvoteIcon;
  let downvoteIcon = props.disabled ? DownvoteDisabledIcon : DownvoteIcon;

  return (
    <div className={styles.ScoreButtons}>
      <div
        className={styles.Upvote}
        onClick={props.disabled ? () => {} : props.onUpvote}
      >
        <img src={upvoteIcon} alt="Upvote" />
      </div>
      <div
        className={styles.Downvote}
        onClick={props.disabled ? () => {} : props.onDownvote}
      >
        <img src={downvoteIcon} alt="Downvote" />
      </div>
    </div>
  );
};

export default scoreButtons;
