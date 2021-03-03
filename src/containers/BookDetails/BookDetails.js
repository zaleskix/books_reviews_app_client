import React from "react";

import styles from "./BookDetails.module.css";
import Image from "../../assets/photos/books/book1.png";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Details from "../../components/Common/Details/Details";

import UserAvatar from "../../assets/photos/users/user1.jpg";

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
      evaluation: {
         rating: 7.5,
         votes: 13201,
         reviews: [
            {
               author: {
                  name: "Daniel",
                  avatar: UserAvatar,
               },
               score: +123,
               content:
                  "Jak w większości książek Kinga tak i w tej toczy się walka z demonami. Czasami mam wrażenie iż w swoich książkach King pokazuje synonimy walki z własnymi zmorami, lękami czy koszmarami. Co skłania człowieka do destrukcyjnych zachowań? Może właśnie demony przeszłości jak w przypadku Dana Torrance, który nie był słaby, ale był bezradny wobec mocy jaka drzemie w substancji, która odcinała go od rzeczywistości. Pozornie banalna opowieść, ale między wierszami kryje się rozpacz, cierpienie i strach.",
            },
            {
               author: {
                  name: "Anna",
                  avatar: UserAvatar,
               },
               score: -23,
               content:
                  "Jak w większości książek Kinga tak i w tej toczy się walka z demonami. Czasami mam wrażenie iż w swoich książkach King pokazuje synonimy walki z własnymi zmorami, lękami czy koszmarami. Co skłania człowieka do destrukcyjnych zachowań? Może właśnie demony przeszłości jak w przypadku Dana Torrance, który nie był słaby, ale był bezradny wobec mocy jaka drzemie w substancji, która odcinała go od rzeczywistości. Pozornie banalna opowieść, ale między wierszami kryje się rozpacz, cierpienie i strach.",
            },
         ],
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
         <div className={styles.PageContent}>
            <Details
               name={book.title}
               photo={book.cover}
               description={{ caption: "Opis:", content: book.description }}
               evaluation={book.evaluation}
               detailsInfos={bookInfos}
            />
         </div>
      </div>
   );
};

export default bookDetails;
