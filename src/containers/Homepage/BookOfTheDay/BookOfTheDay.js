import React from "react";

import styles from "./BookOfTheDay.module.css";
import BookCover from "../../../components/Book/BookCover/BookCover";
import BookScore from "../../../components/Book/BookScore/BookScore";
import BookDescription from "../../../components/Book/BookDescription/BookDescription";
import TextButton from "../../../components/UI/Buttons/TextButton/TextButton";

const bookOfTheDay = (props) => {
   return (
      <div className={styles.BookOfTheDay}>
         <div className={styles.Title}>Doktor Sen</div>
         <div className={styles.BookContent}>
            <div className={styles.BookPrimaryInfo}>
               <BookCover name={props.book.name} image={props.book.image} />
               <BookScore rating={props.book.rating} numberOfRatings={props.book.numberOfRatings} />
            </div>
            <div className={styles.BookAdditionalInfo}>
               <BookDescription description={props.book.description} />
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
