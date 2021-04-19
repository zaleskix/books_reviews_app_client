import React from "react";
import styles from "./MainNavigationItems.module.css";
import NavigationItem from "../../NavigationItem/NavigationItem";

const mainNavigationItems = (props) => {
  let mainNavigation = props.navigationData.map((navigationItem) =>
    navigationItem.name === "Splitter" ? (
      <div key={navigationItem.name} className={styles.Splitter} />
    ) : navigationItem.onlyForAuthenticatedUsers === true &&
      !props.isAuth ? null : (
      <NavigationItem
        isMenuExpanded={props.isMenuExpanded}
        key={navigationItem.name}
        isActiveLink={props.pathname === navigationItem.link}
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
    )
  );

  return (
    <div className={styles.MainNavigationItems}>
      <ul>{mainNavigation}</ul>
    </div>
  );
};

export default mainNavigationItems;
