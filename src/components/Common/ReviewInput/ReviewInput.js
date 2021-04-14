import React, { useState } from "react";

import styles from "./ReviewInput.module.css";
import TextButton from "../../UI/Buttons/TextButton/TextButton";

const ReviewInput = (props) => {
  const [reviewContent, setReviewContent] = useState("");
  const inputChangedHandler = (event) => {
    setReviewContent(event.target.value);
  };

  return (
    <div className={styles.ReviewInput}>
      <textarea
        className={styles.TextInput}
        value={reviewContent}
        onChange={(event) => inputChangedHandler(event)}
      />
      <TextButton clicked={() => props.submitReview(reviewContent)} text={"Dodaj recenzje"}/>
    </div>
  );
};

export default ReviewInput;
