import React from "react";
import { withRouter } from 'react-router-dom';

import styles from "./BookOfTheDay.module.css";

const bookOfTheDay = (props) => {
   const bookClicked = (bookId) => {
      props.history.push("/books/" + bookId);
   };

   return (
      <div className={styles.BookOfTheDay}>
         <div className={styles.Title}>{props.book ? props.book.title : ""}</div>
         <div className={styles.BookContent}  onClick={() => bookClicked(props.book ? props.book.bookExternalId : "")}>
               <div className={styles.FullSizePhoto}>
                  <img alt={props.book ? props.book.title : "Picture"} src={`data:image/jpg;base64,${props.book ? props.book.cover: null}`} />
               </div>
         </div>
      </div>
   );
};

export default withRouter(bookOfTheDay);
