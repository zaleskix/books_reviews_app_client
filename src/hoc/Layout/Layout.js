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
            {props.children}
        </div>
    );
};

export default layout;
