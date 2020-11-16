import React from "react";

import styles from "./Layout.module.css";

const layout = (props) => {
    return (
        <div className={styles.Layout}>
            <h1>layout</h1>
            {props.children}
        </div>
    );
};

export default layout;
