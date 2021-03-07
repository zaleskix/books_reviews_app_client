import React from "react";

import styles from "./Categories.module.css";
import Fantastyka from "../../assets/photos/categories/fantasy.png";
import ScienceFiction from "../../assets/photos/categories/sci_fi.png";
import LiteraturaPiekna from "../../assets/photos/categories/lit_piekna.png";
import Kryminal from "../../assets/photos/categories/crime.png";
import Horror from "../../assets/photos/categories/horror.png";
import Romans from "../../assets/photos/categories/romantic.png";
import Category from "../../components/Category/Category";
import PageHeader from "../../components/UI/PageHeader/PageHeader";

const categories = (props) => {
    const categoriesData = [
        {identifier: "category-123-123-123", name: "Fantastyka", image: Fantastyka},
        {identifier: "category-234-234-234", name: "Science Fiction", image: ScienceFiction},
        {identifier: "category-345-345-345", name: "Literatura Piękna", image: LiteraturaPiekna},
        {identifier: "category-456-456-456", name: "Kryminał", image: Kryminal},
        {identifier: "category-567-567-567", name: "Horror", image: Horror},
        {identifier: "category-678-678-678", name: "Romans", image: Romans},
    ];

    let categories = categoriesData.map((category) => (
        <Category key={category.name} category={category}/>
    ));

    return (
        <div className={styles.Categories}>
            <PageHeader caption={"Kategorie"}/>
            <div className={styles.PageContent}>{categories}</div>
        </div>
    );
};

export default categories;
