import React from 'react';

import AuthorItem from "./AuthorItem/AuthorItem";

import styles from "./TopAuthors.module.css";

const topAuthors = props => {

    let authorsRanking = props.authors.map(author =>
        <AuthorItem
            key={author.name}
        image={author.image}
        name={author.name}
        ranking={author.ranking}/>
    );

    return (
        <div className={styles.TopAuthors}>

            {authorsRanking}
        </div>
    )
}

export default topAuthors;