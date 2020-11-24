import React from "react";

import styles from "./Homepage.module.css";

import BookOfTheDay from "../../components/Homepage/BookOfTheDay/BookOfTheDay";
import TopAuthors from "../../components/Homepage/TopAuthors/TopAuthors";
import DiscoverCategories from "../../components/Homepage/DiscoverCategories/DiscoverCategories";

import SKing from "../../assets/photos/authors/author1.png"
import JKRowling from "../../assets/photos/authors/author2.png"
import JRRTolkien from "../../assets/photos/authors/author3.png"
import RMroz from "../../assets/photos/authors/author4.png"
import ASapkowski from "../../assets/photos/authors/author5.png"
import Fantastyka from "../../assets/photos/categories/category1.png";
import ScienceFiction from "../../assets/photos/categories/category2.png";
import LiteraturaPiekna from "../../assets/photos/categories/category3.png";

const homepage = (props) => {

    const authors = [
        {name: "Stephen King", ranking: 1, image: SKing},
        {name: "J.K. Rowling", ranking: 2, image: JKRowling},
        {name: "J. R. R. Tolkien", ranking: 3, image: JRRTolkien},
        {name: "Remigiusz Mróz", ranking: 4, image: RMroz},
        {name: "Andrzej Sapkowski", ranking: 5, image: ASapkowski}
    ];

    const categories = [
        {name: "Fantastyka", image: Fantastyka},
        {name: "Science Fiction", image: ScienceFiction},
        {name: "Literatura Piękna", image: LiteraturaPiekna},
    ];

    return (
        <div className={styles.Homepage}>
            <BookOfTheDay/>
            <div className={styles.Splitter} />
            <TopAuthors authors={authors} />
            <div className={styles.Splitter} />
            <DiscoverCategories categories={categories}/>
        </div>
    );
};

export default homepage;
