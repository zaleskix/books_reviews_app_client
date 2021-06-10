import React, { useEffect } from "react";

import styles from "./Ranking.module.css";

import Ranking from "../../components/Ranking/Ranking";
import PageHeader from "../../components/UI/PageHeader/PageHeader";

import * as actions from "../../store/actions";
import { connect } from "react-redux";

const RankingPage = (props) => {
  if (!props.token) props.history.push("/login")
  let ranking = [];

  useEffect(() => {
    let searchCriteria = {
      "sort.sortBy": "votes",
      "sort.sortDirection": "ASC",
    };

    props.isBookRanking
      ? props.onBookGet(searchCriteria)
      : props.onAuthorGet(searchCriteria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.loadingBookAction && !props.loadingAuthorAction) {
    let i = 0;

    props.isBookRanking
      ? (ranking = props.books.map((book) => {
          i = i + 1;
          return {
            identifier: book.bookExternalId,
            ranking: i,
            name: book.title,
            image: book.cover,
          };
        }))
      : (ranking = props.authors.map((author) => {
          i = i + 1;
          return {
            identifier: author.authorExternalId,
            ranking: i,
            name: author.firstName + " " + author.lastName,
            image: author.photo,
          };
        }));
  }

  let activeTableHeader = props.isBookRanking ? "Książki" : "Autorzy";
  let secondTableHeader = props.isBookRanking ? "Autorzy" : "Książki";
  let tableCaption = props.isBookRanking
    ? "Lista top 100 najlepszych książek"
    : "Lista top 100 najlepszych autorów";

  const secondClicked = () => {
    props.isBookRanking
      ? props.history.push("/authors/ranking")
      : props.history.push("/books/ranking");
  };

  const addButton = props.isBookRanking
    ? { text: "Dodaj ksiązkę", clicked: () => props.history.push("/books/new") }
    : {
        text: "Dodaj autora",
        clicked: () => props.history.push("/authors/new"),
      };

  return (
    <div className={styles.Ranking}>
      <PageHeader caption={"Rankingi"} />
      <div className={styles.PageContent}>
        <Ranking
          tableCaption={tableCaption}
          secondClicked={secondClicked}
          activeTableHeader={activeTableHeader}
          secondTableHeader={secondTableHeader}
          addButton={addButton}
          items={ranking}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    authors: state.author.authors,
    books: state.book.books,
    loadingAuthorAction: state.author.loading,
    loadingBookAction: state.book.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorGet: (searchCriteria) =>
      dispatch(actions.getAuthors(searchCriteria)),
    onBookGet: (searchCriteria) =>
      dispatch(actions.getBooks(searchCriteria)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPage);
