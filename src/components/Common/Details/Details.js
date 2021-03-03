import React from "react";

import styles from "./Details.module.css";
import InfoItem from "../InfoItem/InfoItem";
import Score from "../Score/Score";
import Description from "../Description/Description";
import TextButton from "../../UI/Buttons/TextButton/TextButton";
import Reviews from "../Reviews/Reviews";
import FullSizePhoto from "../FullSizePhoto/FullSizePhoto"

const details = (props) => {
   let infoItems = props.detailsInfos.map((infoItem) => (
      <InfoItem key={infoItem.caption} caption={infoItem.caption} value={infoItem.value} />
   ));

   return (
      <div className={styles.Details}>
         <div className={styles.Content}>
            <div className={styles.Photo}>
               <FullSizePhoto name={props.name} image={props.photo} />
               <div className={styles.Info}>
                  <div className={styles.InfoItems}>{infoItems}</div>
                  <div className={styles.Buttons}>
                     <TextButton text={"Dodaj do ulubionych"} isPrimary />
                     <TextButton text={"Udostepnij"} />
                  </div>
               </div>
            </div>
            <Score rating={props.evaluation.rating} numberOfRatings={props.evaluation.votes} />
            <div className={styles.AdditionalInfo}>
               <Description caption={props.description.caption} content={props.description.content} />
            </div>
         </div>
         <div className={styles.Reviews}>
            <Reviews reviews={props.evaluation.reviews} />
         </div>
      </div>
   );
};

export default details;
