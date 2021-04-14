import React from "react";

import styles from "./Homepage.module.css";

import BookOfTheDay from "./BookOfTheDay/BookOfTheDay";
import TopAuthors from "./TopAuthors/TopAuthors";
import DiscoverCategories from "./DiscoverCategories/DiscoverCategories";

import SKing from "../../assets/photos/authors/author1.png";
import JKRowling from "../../assets/photos/authors/author2.png";
import JRRTolkien from "../../assets/photos/authors/author3.png";
import RMroz from "../../assets/photos/authors/author4.png";
import ASapkowski from "../../assets/photos/authors/author5.png";
import Fantastyka from "../../assets/photos/categories/fantasy.png";
import ScienceFiction from "../../assets/photos/categories/sci_fi.png";
import LiteraturaPiekna from "../../assets/photos/categories/lit_piekna.png";
import DoktorSen from "../../assets/photos/books/book1.png";

const homepage = (props) => {
    const authors = [
        {identifier: "author-82318213-2138asd-asd123", name: "Stephen King", ranking: 1, image: SKing},
        {identifier: "author-02190jwd-dasj12k-mnn11", name: "J.K. Rowling", ranking: 2, image: JKRowling},
        {identifier: "author-jiqew9-pkdaposa-nqewoj", name: "J. R. R. Tolkien", ranking: 3, image: JRRTolkien},
        {identifier: "author-w0qe-120939-21o3jb1b", name: "Remigiusz Mróz", ranking: 4, image: RMroz},
        {identifier: "author-da8a8s9d-1203j-zcpoczpo", name: "Andrzej Sapkowski", ranking: 5, image: ASapkowski},
    ];

    const categories = [
        {identifier: "category-123asd123-0132i0jeqw-312-sad", name: "Fantastyka", image: Fantastyka},
        {identifier: "category-lejwqo12-qweowqpe[wqe-das-123da", name: "Science Fiction", image: ScienceFiction},
        {identifier: "category-okdoak[s-weiq-iqw-0=eqwi-sad", name: "Literatura Piękna", image: LiteraturaPiekna},
    ];

    const bookOfTheDay = {
        identifier: "book-123-123-123-123-12",
        name: "Doktor Sen",
        image: DoktorSen,
        rating: "7.5",
        numberOfRatings: "12 820",
        description:
            "Kontynuacja bestsellerowego „Lśnienia”! Pamiętacie małego chłopca obdarzonego niezwykłą mocą? Chłopca nękanego przez duchy? Chłopca uwięzionego w odludnym hotelu wraz z opętanym ojcem? Możecie już poznać jego dalsze losy!",
    };


    return (
        <div className={styles.Homepage}>
            <div className={styles.HomepageTop}>
                <div className={styles.BookOfTheDay}>
                    <div className={styles.Caption}>Książka dnia</div>
                    <BookOfTheDay book={bookOfTheDay}/>
                </div>
                <div className={styles.VerticalSplitter}/>
                <div className={styles.TopAuthors}>
                    <div className={styles.Caption}>Top autorzy</div>
                    <TopAuthors authors={authors}/>
                </div>
            </div>
            <div className={styles.DiscoverCategories}>
                <div className={styles.Caption}>{`Odkryj \n kategorie`}</div>
                <DiscoverCategories categories={categories}/>
            </div>
        </div>
    );
};

export default homepage;
