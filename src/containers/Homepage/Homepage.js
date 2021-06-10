import React from "react";

import styles from "./Homepage.module.css";

import BookOfTheDay from "./BookOfTheDay/BookOfTheDay";
import TopAuthors from "./TopAuthors/TopAuthors";
import DiscoverCategories from "./DiscoverCategories/DiscoverCategories";

import * as actions from "../../store/actions";
import {connect} from "react-redux";

const Homepage = (props) => {
    if (!props.token) props.history.push("/login")
    const authors = [];
    let i = 0;
    if (props.authors) {
        for (i = 0; i < 5; i++) {
            let author = props.authors[i];
            if (!author) break;
            authors.push({
                identifier: author.authorExternalId,
                ranking: i + 1,
                name: author.firstName + " " + author.lastName,
                image: author.photo,
            })
        }
    }

    console.log(props.categories)
    const book = props.books[Math.floor(Math.random() * props.books.length)];

    return (
        <div className={styles.Homepage}>
            <div className={styles.HomepageTop}>
                <div className={styles.BookOfTheDay}>
                    <div className={styles.Caption}>Książka dnia</div>
                    <BookOfTheDay book={book}/>
                </div>
                <div className={styles.VerticalSplitter}/>
                <div className={styles.TopAuthors}>
                    <div className={styles.Caption}>Top autorzy</div>
                    <TopAuthors authors={authors}/>
                </div>
            </div>
            <div className={styles.DiscoverCategories}>
                <div className={styles.Caption}>{`Odkryj \n kategorie`}</div>
                <DiscoverCategories categories={props.categories ? props.categories.slice(0,3): null}/>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        authors: state.author.authors,
        books: state.book.books,
        categories: state.category.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEditCategory: (categoryId, categoryData) =>
            dispatch(actions.editCategory(categoryId, categoryData)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
