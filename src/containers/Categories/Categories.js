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
    { name: "Fantastyka", image: Fantastyka },
    { name: "Science Fiction", image: ScienceFiction },
    { name: "Literatura Piękna", image: LiteraturaPiekna },
    { name: "Kryminał", image: Kryminal },
    { name: "Horror", image: Horror },
    { name: "Romans", image: Romans },
  ];

  let categories = categoriesData.map((category) => (
    <Category key={category.name} name={category.name} image={category.image} />
  ));

  return (
    <div className={styles.Categories}>
      <PageHeader name={"Kategorie"} />
      <div className={styles.PageContent}>{categories}</div>
    </div>
  );
};

export default categories;
