import React from "react";
import styles from "./ProfileNavigatiomItems.module.css";

import ProfileNavigationItem from "../../BottomNavigationBar/ProfileNavigationItem/ProfileNavigationItem";
import Profile from "../../../../assets/photos/users/user1.jpg";
import NavigationItem from "../../NavigationItem/NavigationItem";
import SettingsActive from "../../../../assets/icons/settings_primary.svg";
import SettingsInactive from "../../../../assets/icons/settings_second.svg";
import MailsActive from "../../../../assets/icons/mails_primary.svg";
import MailsInactive from "../../../../assets/icons/mails_second.svg";
import SignInActive from "../../../../assets/icons/sign_in_primary.svg";
import SignOutActive from "../../../../assets/icons/sign_out_primary.svg";
import SignInInactive from "../../../../assets/icons/sign_in_secondary.svg";
import SignOutInactive from "../../../../assets/icons/sign_out_secondary.svg";

const profileNavigationItems = (props) => {
   const activeClasses = [styles.ProfileNavigationItem, styles.Active].join(" ");
   const inactiveClasses = styles.ProfileNavigationItem;

   const navigationData = [
      {
         name: "Ustawienia",
         imgActive: SettingsActive,
         imgInactive: SettingsInactive,
         link: "/settings",
         forAuthenticatedUsers: true,
      },
      {
         name: "Wiadomości",
         imgActive: MailsActive,
         imgInactive: MailsInactive,
         link: "/mails",
         forAuthenticatedUsers: true,
      },
      {
         name: "Login",
         imgActive: SignInActive,
         imgInactive: SignInInactive,
         link: "/login",
         forAuthenticatedUsers: false,
      },
      {
         name: "Logout",
         imgActive: SignOutActive,
         imgInactive: SignOutInactive,
         link: "/logout",
         forAuthenticatedUsers: true,
      },
   ];

   let profileNavigationItems = navigationData.map((navigation) =>
      (navigation.forAuthenticatedUsers && !props.isAuth) ||
      (!navigation.forAuthenticatedUsers && props.isAuth) ? null : (
         <div key={navigation.name} className={props.pathname === navigation.link ? activeClasses : inactiveClasses}>
            <NavigationItem
               imgAlt={navigation.name}
               imgSrc={props.pathname === navigation.link ? navigation.imgActive : navigation.imgInactive}
               name={navigation.name}
               link={navigation.link}
               exact
               withoutActiveHighlight
            />
         </div>
      )
   );
   return (
      <div className={styles.ProfileMenu}>
         {!props.isAuth ? null : (
            <div className={props.isMenuExpanded ? styles.ProfilePictureExpanded : styles.ProfilePictureHided}>
               <ProfileNavigationItem imgAlt={"Profile"} imgSrc={Profile} name={"Profile"} link="/profile" exact />
            </div>
         )}
         {props.isMenuExpanded ? <div className={styles.ProfileExpandMenu}>{profileNavigationItems}</div> : null}
      </div>
   );
};

export default profileNavigationItems;
