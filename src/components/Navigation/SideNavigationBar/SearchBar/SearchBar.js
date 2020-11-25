import React from "react";
import NavigationItem from "../../NavigationItem/NavigationItem";
import SearchIcon from "../../../../assets/icons/search.svg";

import styles from "./SearchBar.module.css";
const searchBar = (props) => {
  return (
    <div className={styles.Search}>
      {props.iconOnly ? null : (
        <div className={styles.SearchInput}>
          Szukaj książki, autora, kategorii...
        </div>
      )}
      <div
        className={
          props.iconOnly ? styles.SearchIconOnly : styles.FullSearchIcon
        }
      >
        <NavigationItem
          imgAlt={"Search"}
          imgSrc={SearchIcon}
          name={"Search"}
          link="/search"
          exact
        />
      </div>
    </div>
  );
};

export default searchBar;
