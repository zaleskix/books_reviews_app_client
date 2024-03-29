import React from "react";

import AuthorItem from "../../../components/Author/AuthorListItem/AuthorListItem";

import styles from "./TopAuthors.module.css";

const topAuthors = (props) => {
    let authorsRanking = props.authors.map((author) => (
        <AuthorItem
            key={author.name}
            author={author}
        />
    ));

    return <div className={styles.TopAuthors}>{authorsRanking}</div>;
};

export default topAuthors;
