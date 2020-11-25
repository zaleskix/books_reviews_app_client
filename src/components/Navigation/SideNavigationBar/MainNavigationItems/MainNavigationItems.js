import React from "react";
import styles from "../SideNavigationBar.module.css";
import HomepageActive from "../../../../assets/icons/home_primary.svg";
import HomepageInactive from "../../../../assets/icons/home_second.svg";
import CategoriesActive from "../../../../assets/icons/categories_primary.svg";
import CategoriesInactive from "../../../../assets/icons/categories_second.svg";
import FavouritesActive from "../../../../assets/icons/favourites_primary.svg";
import FavouritesInactive from "../../../../assets/icons/favourites_second.svg";
import BooksActive from "../../../../assets/icons/books_primary.svg";
import BooksInactive from "../../../../assets/icons/books_second.svg";
import AuthorsActive from "../../../../assets/icons/authors_primary.svg";
import AuthorsInactive from "../../../../assets/icons/authors_second.svg";
import NavigationItem from "../../NavigationItem/NavigationItem";

const mainNavigationItems = (props) => {
  const activeClasses = [styles.NavigationItem, styles.Active].join(" ");
  const inactiveClasses = styles.NavigationItem;
  const navigationData = [
    {
      imgAlt: "Home",
      imgActive: HomepageActive,
      imgInactive: HomepageInactive,
      name: "Strona główna",
      link: "/",
    },
    {
      imgAlt: "Category",
      imgActive: CategoriesActive,
      imgInactive: CategoriesInactive,
      name: "Kategorie",
      link: "/categories",
    },
    {
      imgAlt: "Favourites",
      imgActive: FavouritesActive,
      imgInactive: FavouritesInactive,
      name: "Ulubione",
      link: "/favourites",
    },
    { name: "Splitter" },
    {
      imgAlt: "Book",
      imgActive: BooksActive,
      imgInactive: BooksInactive,
      name: "Książki",
      link: "/books",
    },
    {
      imgAlt: "Author",
      imgActive: AuthorsActive,
      imgInactive: AuthorsInactive,
      name: "Autorzy",
      link: "/authors",
    },
  ];

  let mainNavigation = navigationData.map((navigationItem) =>
    navigationItem.name === "Splitter" ? (
      <div key={navigationItem.name} className={styles.Splitter} />
    ) : (
      <div
        key={navigationItem.name}
        className={
          props.pathname === navigationItem.link
            ? activeClasses
            : inactiveClasses
        }
      >
        <NavigationItem
          imgAlt={navigationItem.name}
          imgSrc={
            props.pathname === navigationItem.link
              ? navigationItem.imgActive
              : navigationItem.imgInactive
          }
          name={navigationItem.name}
          link={navigationItem.link}
          exact
        />
        <div className={styles.NavigationCaption}>{navigationItem.name}</div>
      </div>
    )
  );

  return <ul>{mainNavigation}</ul>;
};

export default mainNavigationItems;
