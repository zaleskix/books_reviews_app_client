import React from 'react';

import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./BottomNavigationBar.module.css";

const bottomNavigationBar = props => {
    return (
        <div className={styles.BottomNavigationBar}>
            <div className={styles.NavItems}>
                <NavigationItems/>
            </div>
        </div>
    )
}

export default bottomNavigationBar;