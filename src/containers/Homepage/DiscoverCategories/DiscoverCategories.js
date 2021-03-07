import React from "react";

import styles from "./DiscoverCategories.module.css";

import Category from "../../../components/Category/Category";

const discoverCategories = (props) => {
    let categories = props.categories.map((category) => (
        <Category key={category.name} category={category}/>
    ));

    return <div className={styles.DiscoverCategories}>{categories}</div>;
};

export default discoverCategories;
