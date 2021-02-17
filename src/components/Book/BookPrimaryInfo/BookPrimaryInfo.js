import React from "react";

import styles from "./BookPrimaryInfo.module.css";
import BookCover from "../BookCover/BookCover";
import BookScore from "../BookScore/BookScore";

const bookPrimaryInfo = (props) => {
    return (
        <div className={styles.BookPrimaryInfo}>
            <BookCover name={props.book.name} image={props.book.image}/>
            <BookScore
                rating={props.book.rating}
                numberOfRatings={props.book.numberOfRatings}
            />
        </div>
    );
};

export default bookPrimaryInfo;
