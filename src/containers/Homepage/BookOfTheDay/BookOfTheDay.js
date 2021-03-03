import React from "react";

import styles from "./BookOfTheDay.module.css";
import FullSizePhoto from "../../../components/Common/FullSizePhoto/FullSizePhoto";
import Score from "../../../components/Common/Score/Score";
import Description from "../../../components/Common/Description/Description";
import TextButton from "../../../components/UI/Buttons/TextButton/TextButton";

const bookOfTheDay = (props) => {
   return (
      <div className={styles.BookOfTheDay}>
         <div className={styles.Title}>Doktor Sen</div>
         <div className={styles.BookContent}>
            <div className={styles.BookPrimaryInfo}>
               <FullSizePhoto name={props.book.name} image={props.book.image} />
               <Score rating={props.book.rating} numberOfRatings={props.book.numberOfRatings} />
            </div>
            <div className={styles.BookAdditionalInfo}>
               <Description caption={"Opis:"} content={props.book.description} />
               <div className={styles.Buttons}>
                  <TextButton text={"Dodaj do ulubionych"} isPrimary />
                  <TextButton text={"Udostepnij"} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default bookOfTheDay;
