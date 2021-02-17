import React from "react";

import styles from "./Favourites.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import DoktorSen from "../../assets/photos/books/book1.png";
import Tatuazysta from "../../assets/photos/books/book2.png";
import OPolnocy from "../../assets/photos/books/book3.png";
import Favourite from "../../components/Favourite/Favourite";
import StephenKing from "../../assets/photos/authors/author1.png";
import JKRowling from "../../assets/photos/authors/author2.png";

const favourites = (props) => {
    const favouritesData = [
        {
            ranking: 1,
            caption: "Doktor Sen",
            subcaption: "Stephen King",
            rating: "8.3",
            numberOfRatings: "12756",
            image: DoktorSen,
        },
        {
            ranking: 2,
            caption: "Tatuażysta z Auschwitz",
            subcaption: "Heather Morris",
            rating: "7.6",
            numberOfRatings: "26153",
            image: Tatuazysta,
        },
        {
            ranking: 3,
            caption: "O pólnocy w Czarnobylu",
            subcaption: "Adam Higgibottam",
            rating: "8.9",
            numberOfRatings: "11921",
            image: OPolnocy,
        },
        {
            ranking: 4,
            caption: "Stephen King",
            rating: "9.1",
            numberOfRatings: "38471",
            image: StephenKing,
        },
        {
            ranking: 5,
            caption: "J.K. Rowling",
            rating: "7.8",
            numberOfRatings: "7216",
            image: JKRowling,
        },
    ];

    let favourites = favouritesData.map((favourite) => (
        <Favourite
            key={favourite.caption}
            caption={favourite.caption}
            subcaption={favourite.subcaption}
            rating={favourite.rating}
            image={favourite.image}
        />
    ));

    return (
        <div className={styles.Favourites}>
            <PageHeader name={"Ulubione"}/>
            <div className={styles.PageContent}>{favourites}</div>
        </div>
    );
};

export default favourites;
