import React from "react";

import styles from "./Ranking.module.css";

import Ranking from "../../components/Ranking/Ranking";
import PageHeader from "../../components/UI/PageHeader/PageHeader";

import DoktorSen from "../../assets/photos/books/book1.png";
import Tatuazysta from "../../assets/photos/books/book2.png";
import OPolnocy from "../../assets/photos/books/book3.png";
import Instytut from "../../assets/photos/books/book4.png";
import Precedens from "../../assets/photos/books/book5.png";
import CzerwonaKrolowa from "../../assets/photos/books/book6.png";

import StephenKing from "../../assets/photos/authors/author1.png";
import JKRowling from "../../assets/photos/authors/author2.png";
import JRRTolkien from "../../assets/photos/authors/author3.png";
import RMroz from "../../assets/photos/authors/author4.png";
import ASpakowski from "../../assets/photos/authors/author5.png";
import OTokarczuk from "../../assets/photos/authors/author6.png";

const ranking = (props) => {
   const books = [
      {identifier: "book-1", ranking: 1, name: "Doktor Sen", image: DoktorSen },
      {identifier: "book-2",  ranking: 2, name: "Tatuażysta z Auschwitz", image: Tatuazysta },
      {identifier: "book-3",  ranking: 3, name: "O pólnocy w Czarnobylu", image: OPolnocy },
      {identifier: "book-4",  ranking: 4, name: "Instytut", image: Instytut },
      {identifier: "book-5",  ranking: 5, name: "Precedens", image: Precedens },
      {identifier: "book-6",  ranking: 6, name: "Czerwona Królowa", image: CzerwonaKrolowa },
      {identifier: "book-7",  ranking: 7, name: "Tatuażysta z Auschwitz", image: Tatuazysta },
      {identifier: "book-8",  ranking: 8, name: "Instytut", image: Instytut },
   ];

   const authors = [
      {identifier: "author-1",  ranking: 1, name: "Stephen King", image: StephenKing },
      {identifier: "author-2",   ranking: 2, name: "J.K. Rowling", image: JKRowling },
      {identifier: "author-3",   ranking: 3, name: "J.R.R. Tolkien", image: JRRTolkien },
      {identifier: "author-4",   ranking: 4, name: "Remigiusz Mróz", image: RMroz },
      {identifier: "author-5",   ranking: 5, name: "Andrzej Sapkowski", image: ASpakowski },
      {identifier: "author-6",   ranking: 6, name: "Olga Tokarczuk", image: OTokarczuk },
      {identifier: "author-7",   ranking: 7, name: "J.R.R. Tolkien", image: JRRTolkien },
      {identifier: "author-8",   ranking: 8, name: "Stephen King", image: StephenKing },
   ];

   let activeTableHeader = props.isBookRanking ? "Książki" : "Autorzy";
   let secondTableHeader = props.isBookRanking ? "Autorzy" : "Książki";
   let tableCaption = props.isBookRanking ? "Lista top 100 najlepszych autorów" : "Lista top 100 najlepszych książek";

   const secondClicked = () => {
      props.isBookRanking ? props.history.push("/authors/ranking") : props.history.push("/books/ranking");
   };

   const addBoo = () => {
      props.isBookRanking ? props.history.push("/authors/ranking") : props.history.push("/books/ranking");
   };

   const addButton = props.isBookRanking ?
      {text: "Dodaj ksiązkę", clicked: () => props.history.push("/books/new")} :
      {text: "Dodaj autora", clicked: () => props.history.push("/authors/new")};

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
               items={props.isBookRanking ? books : authors}
            />
         </div>
      </div>
   );
};

export default ranking;
