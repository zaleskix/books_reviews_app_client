import React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import ProfileNavigationItem from "./ProfileNavigationItem/ProfileNavigationItem";
import styles from "./BottomNavigationBar.module.css";

import Categories from "../../../assets/icons/categories_second.svg";
import Homepage from "../../../assets/icons/home_second.svg";
import SignIn from "../../../assets/icons/sign_in_secondary.svg";
import Books from "../../../assets/icons/books_second.svg";
import Authors from "../../../assets/icons/authors_second.svg";
import Profile from "../../../assets/photos/users/user1.jpg";
import Settings from "../../../assets/icons/settings_second.svg";
import Favourites from "../../../assets/icons/favourites_second.svg";
import Logout from "../../../assets/icons/sign_out_secondary.svg";

const bottomNavigationBar = (props) => {
    let profileMenu = [
        {
            imgAlt: "Settings",
            imgSrc: Settings,
            name: "Settings",
            link: "/settings",
        },
        {
            imgAlt: "Favourites",
            imgSrc: Favourites,
            name: "Favourites",
            link: "/favourite",
        },
        {imgAlt: "Logout", imgSrc: Logout, name: "Logout", link: "/logout"},
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
                {props.isAuth ? <ProfileNavigationItem
                    imgAlt={"Profile"}
                    imgSrc={Profile}
                    name={"Profile"}
                    link="/profile"
                    exact
                    profileMenu={profileMenu}
                /> :
                    <NavigationItem
                        imgAlt={"Login"}
                        imgSrc={SignIn}
                        name={"Login"}
                        link="/login"
                        exact
                    />
                }
                <NavigationItem
                    imgAlt={"Books"}
                    imgSrc={Books}
                    name={"Books"}
                    link="/books/ranking"
                    exact
                />
                <NavigationItem
                    imgAlt={"Authors"}
                    imgSrc={Authors}
                    name={"Authors"}
                    link="/authors/ranking"
                    exact
                />
            </ul>
        </div>
    );
};

export default bottomNavigationBar;
