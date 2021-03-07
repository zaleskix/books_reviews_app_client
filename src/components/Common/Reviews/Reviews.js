import React from "react";

import Review from "./Review/Review";
import styles from "./Reviews.module.css";

const reviews = (props) => {
   let reviewsItems = props.reviews.map((review) => (
      <Review
         key={review.author.name}
         avatar={review.author.avatar}
         author={review.author}
         content={review.content}
         score={review.score}
      />
   ));

   return (
      <div className={styles.Reviews}>
         <div className={styles.Caption}>Recenzje</div>
         <div className={styles.Content}>{reviewsItems}</div>
      </div>
   );
};

export default reviews;
