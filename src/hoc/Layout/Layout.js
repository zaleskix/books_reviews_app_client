import React from "react";

import SideNavigationBar from "../../components/Navigation/SideNavigationBar/SideNavigationBar";
import BottomNavigationBar from "../../components/Navigation/BottomNavigationBar/BottomNavigationBar";
import styles from "./Layout.module.css";

const layout = (props) => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Navigation} >
                <SideNavigationBar/>
                <BottomNavigationBar/>
            </div>
            <div className={styles.Content}>
                {props.children}
            </div>
        </div>
    );
};

export default layout;
