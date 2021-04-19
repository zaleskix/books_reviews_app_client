import React from "react";

import styles from "./Homepage.module.css";

import BookOfTheDay from "./BookOfTheDay/BookOfTheDay";
import TopAuthors from "./TopAuthors/TopAuthors";
import DiscoverCategories from "./DiscoverCategories/DiscoverCategories";

import SKing from "../../assets/photos/authors/author1.png";
import JKRowling from "../../assets/photos/authors/author2.png";
import JRRTolkien from "../../assets/photos/authors/author3.png";
import RMroz from "../../assets/photos/authors/author4.png";
import ASapkowski from "../../assets/photos/authors/author5.png";
import Fantastyka from "../../assets/photos/categories/fantasy.png";
import ScienceFiction from "../../assets/photos/categories/sci_fi.png";
import LiteraturaPiekna from "../../assets/photos/categories/lit_piekna.png";
import DoktorSen from "../../assets/photos/books/book1.png";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";

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
    //     [
    //
    //     {identifier: "author-82318213-2138asd-asd123", name: "Stephen King", ranking: 1, image: SKing},
    //     {identifier: "author-02190jwd-dasj12k-mnn11", name: "J.K. Rowling", ranking: 2, image: JKRowling},
    //     {identifier: "author-jiqew9-pkdaposa-nqewoj", name: "J. R. R. Tolkien", ranking: 3, image: JRRTolkien},
    //     {identifier: "author-w0qe-120939-21o3jb1b", name: "Remigiusz Mróz", ranking: 4, image: RMroz},
    //     {identifier: "author-da8a8s9d-1203j-zcpoczpo", name: "Andrzej Sapkowski", ranking: 5, image: ASapkowski},
    // ];

    const categories = [
        {identifier: "category-123asd123-0132i0jeqw-312-sad", name: "Fantastyka", image: Fantastyka},
        {identifier: "category-lejwqo12-qweowqpe[wqe-das-123da", name: "Science Fiction", image: ScienceFiction},
        {identifier: "category-okdoak[s-weiq-iqw-0=eqwi-sad", name: "Literatura Piękna", image: LiteraturaPiekna},
    ];

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
)(ErrorHandler(Homepage, axiosInstance));
