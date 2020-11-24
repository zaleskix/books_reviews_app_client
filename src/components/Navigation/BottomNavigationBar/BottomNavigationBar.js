import React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import ProfileNavigationItem from "./ProfileNavigationItem/ProfileNavigationItem";
import styles from "./BottomNavigationBar.module.css";

import Categories from "../../../assets/icons/categories_second.svg";
import Homepage from "../../../assets/icons/home_second.svg";
import Books from "../../../assets/icons/books_second.svg";
import Authors from "../../../assets/icons/authors_second.svg";
import Profile from "../../../assets/photos/users/user1.jpg";
import Settings from "../../../assets/icons/settings_second.svg";
import Mails from "../../../assets/icons/mails_second.svg";
import Favourites from "../../../assets/icons/favourites_second.svg";
import Logout from "../../../assets/icons/logout_second.svg";
import Search from "../../../assets/icons/logout_second.svg";

const bottomNavigationBar = (props) => {
  let profileMenu = [
    {
      imgAlt: "Settings",
      imgSrc: Settings,
      name: "Settings",
      link: "/settings",
    },
    { imgAlt: "Mails", imgSrc: Mails, name: "Mails", link: "/mails" },
    {
      imgAlt: "Favourites",
      imgSrc: Favourites,
      name: "Favourites",
      link: "/favourites",
    },
    { imgAlt: "Logout", imgSrc: Logout, name: "Logout", link: "/logout" },
  ];

  return (
    <div className={styles.NavigationItems}>
      <ul>
        <NavigationItem
          imgAlt={"Home"}
          imgSrc={Homepage}
          name={"Home"}
          link="/"
          exact
        />
        <NavigationItem
          imgAlt={"Categories"}
          imgSrc={Categories}
          name={"Categories"}
          link="/categories"
          exact
        />
        <ProfileNavigationItem
          imgAlt={"Profile"}
          imgSrc={Profile}
          name={"Profile"}
          link="/profile"
          exact
          profileMenu={profileMenu}
        />
        <NavigationItem
          imgAlt={"Books"}
          imgSrc={Books}
          name={"Books"}
          link="/books"
          exact
        />
        <NavigationItem
          imgAlt={"Authors"}
          imgSrc={Authors}
          name={"Authors"}
          link="/authors"
          exact
        />
      </ul>
    </div>
  );
};

export default bottomNavigationBar;
