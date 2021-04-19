import React from "react";

import SideNavigationBar from "../../components/Navigation/SideNavigationBar/SideNavigationBar";
import BottomNavigationBar from "../../components/Navigation/BottomNavigationBar/BottomNavigationBar";
import styles from "./Layout.module.css";

const layout = (props) => {

    return (
        <div className={styles.Layout}>
            <div className={styles.Navigation}>
                <SideNavigationBar isAuth={props.isAuth}/>
                <BottomNavigationBar isAuth={props.isAuth}/>
            </div>
            <div className={styles.Content}>
                {props.children}
                {/*{React.cloneElement(props.children, {isAuth: props.isAuth})}*/}
            </div>
        </div>
    );
};

export default layout;
