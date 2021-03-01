import React from "react";

import styles from "./BookDetails.module.css";
import Image from "../../assets/photos/books/book1.png";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import BookCover from "../../components/Book/BookCover/BookCover";
import BookDetails from "../../components/Book/BookDetails/BookDetails";
import BookScore from "../../components/Book/BookScore/BookScore";
import BookDescription from "../../components/Book/BookDescription/BookDescription";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";

const bookDetails = (props) => {
   const book = {
      id: 1,
      cover: Image,
      title: "Doktor Sen",
      author: {
         firstName: "Stephen",
         lastName: "King",
      },
      categories: [
         {
            id: 1,
            name: "Thriller",
         },
         {
            id: 3,
            name: "Kryminał",
         },
      ],
      publishingDate: "2010-03-12",
      language: "Polski",
      publisher: "Prószyński i S-ka",
      description:
         "Kontynuacja bestsellerowego „Lśnienia”! Pamiętacie małego chłopca obdarzonego niezwykłą mocą? Chłopca nękanego przez duchy? Chłopca uwięzionego w odludnym hotelu wraz z opętanym ojcem? Możecie już poznać jego dalsze losy! Grupa staruszków nazywająca się Prawdziwym Węzłem przemierza autostrady Ameryki w poszukiwaniu pożywienia. Z pozoru są nieszkodliwi - emeryci odziani w poliester, nierozstający się ze swoimi samochodami turystycznymi. Jednak Dan Torrance już wie, a rezolutna dwunastolatka Abra Stone wkrótce się przekona, że Prawdziwy Węzeł to prawie nieśmiertelne istoty żywiące się substancją wytwarzaną przez poddane śmiertelnym torturom dzieci obdarzone tym samym darem, co Dan.",
      ISBN: "9788394997298",
      reviews: {
         rating: 7.5,
         votes: 13201,
      },
   };

   let bookInfos = [
      {
         caption: "Autor:",
         value: book.author.firstName + " " + book.author.lastName,
      },
      {
         caption: "Kategorie:",
         value: book.categories.map((category) => category.name).join(" | "),
      },
      { caption: "Data publikacji:", value: book.publishingDate },
      { caption: "Język:", value: book.language },
   ];
   return (
      <div className={styles.BookDetails}>
         <PageHeader caption={book.title} subcaption={book.author.firstName + " " + book.author.lastName} />
         <div className={styles.BookContent}>
            <div className={styles.BookCover}>
               <BookCover name={book.title} image={book.cover} />
               <div className={styles.BookInfo}>
                  <BookDetails bookInfos={bookInfos} />
                  <div className={styles.Buttons}>
                     <TextButton text={"Dodaj do ulubionych"} isPrimary />
                     <TextButton text={"Udostepnij"} />
                  </div>
               </div>
            </div>
                  <BookScore rating={book.reviews.rating} numberOfRatings={book.reviews.votes} />
            <div className={styles.BookAdditionalInfo}>
               <BookDescription description={book.description} />
            </div>
         </div>
      </div>
   );
   //TODO: dodać recenzje
};

export default bookDetails;
