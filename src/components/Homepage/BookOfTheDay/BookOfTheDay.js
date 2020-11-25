import React from "react";

import styles from "./BookOfTheDay.module.css";

import DoktorSen from "../../../assets/photos/books/book1.png";

const bookoftheday = (props) => {
  return (
    <div className={styles.BookOfTheDay}>
        <div className={styles.Title}>Doktor Sen</div>

        <div className={styles.BookContent} >
            <div className={styles.LeftSide} >
                <div className={styles.Image}>
                    <img alt={"Doktor Sen"} src={DoktorSen} />
                </div>
                <div className={styles.Score}>
                    <div className={styles.Rating}>7.5 / 10</div>
                    <div className={styles.NumberOfRatings}>( 18301 recenzji )</div>
                </div>
            </div>
            <div className={styles.RightSide} >
                <div className={styles.Description}>
                    <div className={styles.DescriptionCaption}>
                        Opis
                    </div>
                    <div className={styles.DescriptionContent}>
                        Kontynuacja bestsellerowego „Lśnienia”! Pamiętacie małego chłopca obdarzonego niezwykłą mocą? Chłopca nękanego przez duchy? Chłopca uwięzionego w odludnym hotelu wraz z opętanym ojcem? Możecie już poznać jego dalsze losy!
                    </div>
                </div>
                <div className={styles.Buttons}>
                    <div className={styles.Favourites}>
                        Dodaj do ulubionych
                    </div>
                    <div className={styles.Share}>
                        Udostepnij
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
};

export default bookoftheday;
