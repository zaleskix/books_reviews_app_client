import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import SearchBar from "./SearchBar/SearchBar";
import ProfileNavigationItems from "./ProfileNavigationItems/ProfileNavigationItems";
import MainNavigationItems from "./MainNavigationItems/MainNavigationItems";
import Logo from "../../UI/Logo/Logo";
import styles from "./SideNavigationBar.module.css";
import HomepageActive from "../../../assets/icons/home_primary.svg";
import HomepageInactive from "../../../assets/icons/home_second.svg";
import CategoriesActive from "../../../assets/icons/categories_primary.svg";
import CategoriesInactive from "../../../assets/icons/categories_second.svg";
import FavouritesActive from "../../../assets/icons/favourites_primary.svg";
import FavouritesInactive from "../../../assets/icons/favourites_second.svg";
import BooksActive from "../../../assets/icons/books_primary.svg";
import BooksInactive from "../../../assets/icons/books_second.svg";
import AuthorsActive from "../../../assets/icons/authors_primary.svg";
import AuthorsInactive from "../../../assets/icons/authors_second.svg";

const SideNavigationBar = (props) => {
    const mainNavigationData = [
        {
            imgAlt: "Home",
            imgActive: HomepageActive,
            imgInactive: HomepageInactive,
            name: "Strona główna",
            link: "/",
            onlyForAuthenticatedUsers: false
        },
        {
            imgAlt: "Category",
            imgActive: CategoriesActive,
            imgInactive: CategoriesInactive,
            name: "Kategorie",
            link: "/categories",
            onlyForAuthenticatedUsers: false
        },
        {
            imgAlt: "Favourites",
            imgActive: FavouritesActive,
            imgInactive: FavouritesInactive,
            name: "Ulubione",
            link: "/favourite",
            onlyForAuthenticatedUsers: true
        },
        {name: "Splitter"},
        {
            imgAlt: "Book",
            imgActive: BooksActive,
            imgInactive: BooksInactive,
            name: "Książki",
            link: "/books/ranking",
            onlyForAuthenticatedUsers: false
        },
        {
            imgAlt: "Author",
            imgActive: AuthorsActive,
            imgInactive: AuthorsInactive,
            name: "Autorzy",
            link: "/authors/ranking",
            onlyForAuthenticatedUsers: false
        },
    ];
    const isHighResScreen = window.matchMedia("(min-width: 1200px)").matches;
    const location = useLocation();
    const [pathname, setPathname] = useState("");
    const [isMenuExpanded, setExpandMenu] = useState(isHighResScreen);

    let classes = [styles.NavigationItems];
    isMenuExpanded ? classes.push(styles.Expanded) : classes.push(styles.Hided);

    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    const expandMenu = () => {
        setExpandMenu(true);
    };

    const hideMenu = () => {
        if (!isHighResScreen) setExpandMenu(false);
    };

    return (
        <div
            className={classes.join(" ")}
            onTouchEnd={isMenuExpanded ? hideMenu : expandMenu}
            onMouseEnter={expandMenu}
            onMouseLeave={hideMenu}
        >
            {isMenuExpanded ? (
                <div className={styles.Logo}>
                    <Logo/>
                </div>
            ) : null}

            <SearchBar iconOnly={!isMenuExpanded}/>
            <MainNavigationItems
                isAuth={props.isAuth}
                navigationData={mainNavigationData}
                pathname={pathname}
                isMenuExpanded={isMenuExpanded}
            />
            <ProfileNavigationItems
                isAuth={props.isAuth}
                pathname={pathname}
                isMenuExpanded={isMenuExpanded}
            />
        </div>
    );
};

export default SideNavigationBar;
