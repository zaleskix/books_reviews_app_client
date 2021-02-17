import React from "react";

import styles from "./ProfileNavigationItem.module.css";
import ProfileExpandMenu from "./ProfileExpandMenu/ProfileExpandMenu";

const profileNavigationItem = (props) => {
    return (
        <div className={styles.ProfileItem}>
            {props.profileMenu ? (
                <div className={styles.ProfileExpandMenu}>
                    <div className={styles.ProfileExpandMenuIcons}>
                        <ProfileExpandMenu profileMenu={props.profileMenu}/>
                    </div>
                </div>
            ) : null}
            <div className={styles.NavItemImage}>
                <img alt={props.imgAlt} src={props.imgSrc}/>
            </div>
        </div>
    );
};

export default profileNavigationItem;
