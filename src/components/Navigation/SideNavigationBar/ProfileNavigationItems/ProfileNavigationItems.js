import React from "react";
import styles from "./ProfileNavigatiomItems.module.css";

import ProfileNavigationItem from "../../BottomNavigationBar/ProfileNavigationItem/ProfileNavigationItem";
import Profile from "../../../../assets/photos/users/user1.jpg";
import NavigationItem from "../../NavigationItem/NavigationItem";
import SettingsActive from "../../../../assets/icons/settings_primary.svg";
import SettingsInactive from "../../../../assets/icons/settings_second.svg";
import MailsActive from "../../../../assets/icons/mails_primary.svg";
import MailsInactive from "../../../../assets/icons/mails_second.svg";
import LogoutActive from "../../../../assets/icons/logout_primary.svg";
import LogoutInactive from "../../../../assets/icons/logout_second.svg";

const profileNavigationItems = (props) => {
    const activeClasses = [styles.ProfileNavigationItem, styles.Active].join(" ");
    const inactiveClasses = styles.ProfileNavigationItem;

    const navigationData = [
        {
            name: "Ustawienia",
            imgActive: SettingsActive,
            imgInactive: SettingsInactive,
            link: "/settings",
        },
        {
            name: "Wiadomości",
            imgActive: MailsActive,
            imgInactive: MailsInactive,
            link: "/mails",
        },
        {
            name: "Logout",
            imgActive: LogoutActive,
            imgInactive: LogoutInactive,
            link: "/logout",
        },
    ];

    let profileNavigationItems = navigationData.map((navigation) => (
        <div
            key={navigation.name}
            className={
                props.pathname === navigation.link ? activeClasses : inactiveClasses
            }
        >
            <NavigationItem
                imgAlt={navigation.name}
                imgSrc={
                    props.pathname === navigation.link
                        ? navigation.imgActive
                        : navigation.imgInactive
                }
                name={navigation.name}
                link={navigation.link}
                exact
            />
        </div>
    ));
    return (
        <div className={styles.ProfileMenu}>
            <div
                className={
                    props.isMenuExpanded
                        ? styles.ProfilePictureExpanded
                        : styles.ProfilePictureHided
                }
            >
                <ProfileNavigationItem
                    imgAlt={"Profile"}
                    imgSrc={Profile}
                    name={"Profile"}
                    link="/profile"
                    exact
                />
            </div>
            {props.isMenuExpanded ? (
                <div className={styles.ProfileExpandMenu}>{profileNavigationItems}</div>
            ) : null}
        </div>
    );
};

export default profileNavigationItems;
