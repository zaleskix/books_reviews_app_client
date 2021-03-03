import React from "react";

import styles from "./ScoreButtons.module.css";

import UpvoteIcon from "../../../../assets/icons/upvote.svg";
import DownvoteIcon from "../../../../assets/icons/downvote.svg";

const scoreButtons = (props) => {

   return (
      <div className={styles.ScoreButtons}>
         <div className={styles.Upvote} onClick={props.onUpvote} ><img src={UpvoteIcon} alt="Upvote"/></div>
         <div className={styles.Downvote} onClick={props.onDownvote} ><img src={DownvoteIcon} alt="Downvote"/></div>
      </div>
   );
};

export default scoreButtons;
