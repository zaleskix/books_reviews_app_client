import React from "react";

import styles from "./Details.module.css";
import InfoItem from "../InfoItem/InfoItem";
import Score from "../Score/Score";
import Description from "../Description/Description";
import TextButton from "../../UI/Buttons/TextButton/TextButton";
import Reviews from "../Reviews/Reviews";
import FullSizePhoto from "../FullSizePhoto/FullSizePhoto";
import ReviewInput from "../ReviewInput/ReviewInput";

const details = (props) => {
  let infoItems = props.detailsInfos
    ? props.detailsInfos.map((infoItem) => (
        <InfoItem
          key={infoItem.caption}
          caption={infoItem.caption}
          value={infoItem.value}
        />
      ))
    : null;

  return (
    <div className={styles.Details}>
      <div className={styles.Content}>
        <div className={styles.Photo}>
          <FullSizePhoto name={props.name} image={props.photo} />
          <div className={styles.Info}>
            <div className={styles.InfoItems}>{infoItems}</div>
            <div className={styles.Buttons}>
              <TextButton text={"Dodaj do ulubionych"} isPrimary />
              <TextButton
                text={props.editButton.text}
                clicked={props.editButton.clicked}
              />
              <TextButton
                text={props.removeButton.text}
                clicked={props.removeButton.clicked}
                removeButton
              />
            </div>
          </div>
        </div>
        {props.evaluation ? (
            <Score
                disabled={props.disabled}
              rating={props.evaluation.rating}
              numberOfRatings={props.evaluation.votes}
              onUpvote={props.onUpvote}
              onDownvote={props.onDownvote}
            />
        ) : null}
        {props.description ? (
          <div className={styles.AdditionalInfo}>
            <Description
              caption={props.description.caption}
              content={props.description.content}
            />
          </div>
        ) : null}
      </div>
      {props.evaluation ? (
        <div className={styles.Reviews}>
          <ReviewInput submitReview={props.submitReview} />
          <Reviews reviews={props.evaluation.reviews} />
        </div>
      ) : null}
    </div>
  );
};

export default details;
