import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchBar from "./SearchBar/SearchBar";
import ProfileNavigationItems from "./ProfileNavigationItems/ProfileNavigationItems";
import MainNavigationItems from "./MainNavigationItems/MainNavigationItems";
import Logo from "../../UI/Logo/Logo";
import styles from "./SideNavigationBar.module.css";

const SideNavigationBar = (props) => {
  const location = useLocation();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className={styles.NavigationItems}>
      <div className={styles.Logo}>
        <Logo />
      </div>

      <div className={styles.Search}>
        <div className={styles.FullSearch}>
          <SearchBar />
        </div>
        <div className={styles.SearchIcon}>
          <SearchBar iconOnly />
        </div>
      </div>

      <MainNavigationItems pathname={pathname} />
      <ProfileNavigationItems pathname={pathname} />
    </div>
  );
};

export default SideNavigationBar;
