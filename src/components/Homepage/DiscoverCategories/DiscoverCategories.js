import React from 'react';

import styles from "./DiscoverCategories.module.css";

import Category from "./Category/Category";

const discoverCategories = props => {

    let categories = props.categories.map((category) => (
      <Category key={category.name} name={category.name} image={category.image} />
    ));
    

    return (
        <div className={styles.DiscoverCategories}>
            <div className={styles.Caption}>{`Odkryj \n kategorie`}</div>
            {categories}
        </div>
    )
}

export default discoverCategories;