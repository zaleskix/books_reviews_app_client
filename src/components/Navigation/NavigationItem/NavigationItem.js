import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import ProfileExpandMenu from "../ProfileNavigationItem/ProfileExpandMenu/ProfileExpandMenu";

import styles from "./NavigationItem.module.css";

const navigationItem = (props) => {

  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      className={styles.NavigationItem}
    >
      <div className={styles.NavItemImage}>
        <img alt={props.imgAlt} src={props.imgSrc} />
      </div>
      <div className={styles.Name}>
        <p>{props.name}</p>
      </div>
    </NavLink>
  );
};

export default navigationItem;
