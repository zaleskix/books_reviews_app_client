import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavigationItem from "../NavigationItem/NavigationItem";
import SearchBar from "./SearchBar/SearchBar";
import ProfileNavigationItem from "../ProfileNavigationItem/ProfileNavigationItem";
import styles from "./SideNavigationBar.module.css";

import CategoriesActive from "../../../assets/icons/categories_primary.svg";
import CategoriesInactive from "../../../assets/icons/categories_second.svg";
import HomepageActive from "../../../assets/icons/home_primary.svg";
import HomepageInactive from "../../../assets/icons/home_second.svg";
import BooksActive from "../../../assets/icons/books_primary.svg";
import BooksInactive from "../../../assets/icons/books_second.svg";
import AuthorsActive from "../../../assets/icons/authors_primary.svg";
import AuthorsInactive from "../../../assets/icons/authors_second.svg";
import FavouritesActive from "../../../assets/icons/favourites_primary.svg";
import FavouritesInactive from "../../../assets/icons/favourites_second.svg";
import SearchInactive from "../../../assets/icons/logout_second.svg";
import SearchActive from "../../../assets/icons/logout_primary.svg";
import Profile from "../../../assets/photos/users/user1.jpg";
import SettingsActive from "../../../assets/icons/settings_primary.svg";
import SettingsInactive from "../../../assets/icons/settings_second.svg";
import MailsActive from "../../../assets/icons/mails_primary.svg";
import MailsInactive from "../../../assets/icons/mails_second.svg";
import LogoutActive from "../../../assets/icons/logout_primary.svg";
import LogoutInactive from "../../../assets/icons/logout_second.svg";
import Logo from "../../../assets/logo.png";

const SideNavigationBar = (props) => {
  const location = useLocation();
  const [pathname, setPathname] = useState();
  const activeClasses = [styles.NavigationItem, styles.Active].join(" ");
  const inactiveClasses = styles.NavigationItem;

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className={styles.NavigationItems}>
      <div className={styles.Logo} >
        books_reviews
      </div>
      <ul>
        <div className={styles.FullSearch}>
          <SearchBar/>
        </div>
        <div className={styles.SearchIcon}>
          <SearchBar iconOnly/>
        </div>
        {/*<div className={styles.Splitter} />*/}
        <div className={pathname === "/" ? activeClasses : inactiveClasses}>
          <NavigationItem
            imgAlt={"Home"}
            imgSrc={pathname === "/" ? HomepageActive : HomepageInactive}
            name={"Home"}
            link="/"
            exact
          />
          <div className={styles.NavigationCaption}>Strona główna</div>
        </div>
        <div
          className={
            pathname === "/categories" ? activeClasses : inactiveClasses
          }
        >
          <NavigationItem
            imgAlt={"Categories"}
            imgSrc={
              pathname === "/categories" ? CategoriesActive : CategoriesInactive
            }
            name={"Categories"}
            link="/categories"
            exact
          />
          <div className={styles.NavigationCaption}>Kategorie</div>
        </div>
        <div
          className={
            pathname === "/favourites" ? activeClasses : inactiveClasses
          }
        >
          <NavigationItem
            imgAlt={"Favourites"}
            imgSrc={
              pathname === "/favourites" ? FavouritesActive : FavouritesInactive
            }
            name={"Favourites"}
            link="/favourites"
            exact
          />
          <div className={styles.NavigationCaption}>Ulubione</div>
        </div>
        <div className={styles.Splitter} />
        <div
          className={pathname === "/books" ? activeClasses : inactiveClasses}
        >
          <NavigationItem
            imgAlt={"Books"}
            imgSrc={pathname === "/books" ? BooksActive : BooksInactive}
            name={"Books"}
            link="/books"
            exact
          />
          <div className={styles.NavigationCaption}>Książki</div>
        </div>
        <div
          className={pathname === "/authors" ? activeClasses : inactiveClasses}
        >
          <NavigationItem
            imgAlt={"Authors"}
            imgSrc={pathname === "/authors" ? AuthorsActive : AuthorsInactive}
            name={"Authors"}
            link="/authors"
            exact
          />
          <div className={styles.NavigationCaption}>Autorzy</div>
        </div>
        {/*<div className={styles.Splitter} />*/}
      </ul>

      <div className={styles.ProfileMenu}>
        <div className={styles.ProfilePicture}>
          <ProfileNavigationItem
            imgAlt={"Profile"}
            imgSrc={Profile}
            name={"Profile"}
            link="/profile"
            exact
          />
        </div>
        <div className={styles.ProfileExpandMenu}>
          <div
            className={
              pathname === "/settings" ? [styles.ProfileNavigationItem, styles.Active].join(" ") : styles.ProfileNavigationItem
            }
          >
            <NavigationItem
              imgAlt={"Settings"}
              imgSrc={
                pathname === "/settings" ? SettingsActive : SettingsInactive
              }
              name={"Settings"}
              link="/settings"
              exact
            />
          </div>
          <div
            className={pathname === "/mails" ? [styles.ProfileNavigationItem, styles.Active].join(" ") : styles.ProfileNavigationItem}
          >
            <NavigationItem
              imgAlt={"Mails"}
              imgSrc={pathname === "/mails" ? MailsActive : MailsInactive}
              name={"Mails"}
              link="/mails"
              exact
            />
          </div>
          <div
            className={pathname === "/logout" ? [styles.ProfileNavigationItem, styles.Active].join(" ") : styles.ProfileNavigationItem}
          >
            <NavigationItem
              imgAlt={"Logout"}
              imgSrc={pathname === "/logout" ? LogoutActive : LogoutInactive}
              name={"Logout"}
              link="/logout"
              exact
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationBar;
