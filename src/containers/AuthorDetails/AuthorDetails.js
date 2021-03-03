import React from "react";

import styles from "./AuthorDetails.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Details from "../../components/Common/Details/Details";
import StephenKing from "../../assets/photos/authors/author1.png";
import UserAvatar from "../../assets/photos/users/user1.jpg";

const authorDetails = (props) => {
   const author = {
      firstName: "Stephen",
      lastName: "King",
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
      website: "https://www.stephenking.com",
      photo: StephenKing,
      biography:
         "Kontynuacja bestsellerowego „Lśnienia”! Pamiętacie małego chłopca obdarzonego niezwykłą mocą? Chłopca nękanego przez duchy? Chłopca uwięzionego w odludnym hotelu wraz z opętanym ojcem? Możecie już poznać jego dalsze losy! Grupa staruszków nazywająca się Prawdziwym Węzłem przemierza autostrady Ameryki w poszukiwaniu pożywienia. Z pozoru są nieszkodliwi - emeryci odziani w poliester, nierozstający się ze swoimi samochodami turystycznymi. Jednak Dan Torrance już wie, a rezolutna dwunastolatka Abra Stone wkrótce się przekona, że Prawdziwy Węzeł to prawie nieśmiertelne istoty żywiące się substancją wytwarzaną przez poddane śmiertelnym torturom dzieci obdarzone tym samym darem, co Dan.",

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

   const authorInfos = [
      {
         caption: "Imię:",
         value: author.firstName,
      },
      {
         caption: "Nazwisko:",
         value: author.lastName,
      },
      {
         caption: "Kategorie:",
         value: author.categories.map((category) => category.name).join(" | "),
      },
      { caption: "Strona internetowa:", value: author.website },
   ];

   const authorName = author.firstName + " " + author.lastName;
   return (
      <div className={styles.AuthorDetails}>
         <PageHeader caption={authorName} />
         <Details
            name={authorName}
            photo={author.photo}
            description={{ caption: "Biografia:", content: author.biography }}
            evaluation={author.evaluation}
            detailsInfos={authorInfos}
         />
      </div>
   );
};

export default authorDetails;
