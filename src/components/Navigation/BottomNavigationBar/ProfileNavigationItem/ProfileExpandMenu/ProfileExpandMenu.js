import React from "react";

import NavigationItem from "../../../NavigationItem/NavigationItem";

const profileExpandMenu = (props) => {
  let profileExpandMenuIcons = props.profileMenu.map((profileMenuItem) => (
    <NavigationItem
      key={profileMenuItem.name}
      imgAlt={profileMenuItem.imgAlt}
      imgSrc={profileMenuItem.imgSrc}
      name={profileMenuItem.name}
      link={profileMenuItem.link}
      exact
    />
  ));

  return <React.Fragment>{profileExpandMenuIcons}</React.Fragment>;
};

export default profileExpandMenu;
