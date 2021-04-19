import React from "react";
import { withRouter } from 'react-router-dom';

import styles from "./BookOfTheDay.module.css";
import FullSizePhoto from "../../../components/Common/FullSizePhoto/FullSizePhoto";
import Score from "../../../components/Common/Score/Score";
import Description from "../../../components/Common/Description/Description";
import TextButton from "../../../components/UI/Buttons/TextButton/TextButton";

const bookOfTheDay = (props) => {
   const bookClicked = (bookId) => {
      props.history.push("/books/" + bookId);
   };

   return (
      <div className={styles.BookOfTheDay}>
         <div className={styles.Title}>{props.book.title}</div>
         <div className={styles.BookContent}  onClick={() => bookClicked(props.book.bookExternalId)}>
               <div className={styles.FullSizePhoto}>
                  <img alt={props.book.title} src={`data:image/jpg;base64,${props.book.cover}`} />
               </div>
         </div>
      </div>
   );
};

export default withRouter(bookOfTheDay);
