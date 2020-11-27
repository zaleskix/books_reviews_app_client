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
    { name: "Stephen King", ranking: 1, image: SKing },
    { name: "J.K. Rowling", ranking: 2, image: JKRowling },
    { name: "J. R. R. Tolkien", ranking: 3, image: JRRTolkien },
    { name: "Remigiusz Mróz", ranking: 4, image: RMroz },
    { name: "Andrzej Sapkowski", ranking: 5, image: ASapkowski },
  ];

  const categories = [
    { name: "Fantastyka", image: Fantastyka },
    { name: "Science Fiction", image: ScienceFiction },
    { name: "Literatura Piękna", image: LiteraturaPiekna },
  ];

  const bookOfTheDay = {
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
          {/*<div className={styles.Splitter} />*/}
          <BookOfTheDay book={bookOfTheDay} />
        </div>
        <div className={styles.VerticalSplitter} />
        <div className={styles.TopAuthors}>
          <div className={styles.Caption}>Top autorzy</div>
          {/*<div className={styles.Splitter} />*/}
          <TopAuthors authors={authors} />
        </div>
      </div>
      <div className={styles.DiscoverCategories}>
        <div className={styles.Caption}>{`Odkryj \n kategorie`}</div>
        {/*<div className={styles.Splitter} />*/}
        <DiscoverCategories categories={categories} />
      </div>
    </div>
  );
};

export default homepage;
