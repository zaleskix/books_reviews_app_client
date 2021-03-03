import React from "react";

import ScoreButtons from "../../UI/Buttons/ScoreButtons/ScoreButtons";
import styles from "./Review.module.css";

const review = (props) => {
   const onUpvote = () => {
      console.log("onUpvote");
   };

   const onDownvote = () => {
      console.log("onDownvote");
   };

   return (
      <div className={styles.Review}>
         <div className={styles.ReviewInfo}>
            <div className={styles.AuthorInfo}>
               <div className={styles.AuthorAvatar}>
                  <img src={props.avatar} alt={props.author} />
               </div>
               <div className={styles.AuthorName}>{props.author}</div>
            </div>
            <div className={styles.Score}>
               <ScoreButtons onUpvote={onUpvote} onDownvote={onDownvote} />
               <div className={props.score >= 0 ? styles.PositiveScore : styles.NegativeScore}>{props.score}</div>
            </div>
         </div>
         <div className={styles.Content}>{props.content}</div>
      </div>
   );
};

export default review;
