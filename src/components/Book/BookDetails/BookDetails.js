import React from "react";

import styles from "./BookDetails.module.css";
import BookDetailsItem from "./BookDetailsItem/BookDetailsItem";

const bookDetails = (props) => {
  let bookInfoItems = props.bookInfos.map((infoItem) => (
    <BookDetailsItem key={infoItem.caption} caption={infoItem.caption} value={infoItem.value} />
  ));
  return <div className={styles.BookDetails}>{bookInfoItems}</div>;
};

export default bookDetails;
