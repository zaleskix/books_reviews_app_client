import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = (props) => {
    let classes = [styles.NavigationItem];
    props.isMenuExpanded
        ? classes.push(styles.Expanded)
        : classes.push(styles.Hided);

    return (
        <NavLink
            to={props.link}
            exact={props.exact}
            className={classes.join(" ")}
            activeClassName={styles.Active}
        >
            <div className={styles.NavItemImage}>
                <img alt={props.imgAlt} src={props.imgSrc}/>
            </div>
            {props.isMenuExpanded ? (
                <div className={styles.Name}>{props.name}</div>
            ) : null}
        </NavLink>
    );
};

export default navigationItem;
