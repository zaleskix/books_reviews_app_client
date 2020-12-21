import React from "react";

import styles from "./Profile.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";

import UserProfilePicture from "../../assets/photos/users/user1.jpg";
import Book1 from "../../assets/photos/books/book1.png";
import Book2 from "../../assets/photos/books/book5.png";

const profile = (props) => {
   const user = {
      id: 1,
      name: "Ania Kowalska",
      picture: UserProfilePicture,
      aboutMe: "American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels.",
      favourites: [
         { title: "Doktor Sen", author: "Stephen King", image: Book1 },
         { title: "Precedens", author: "Ramigiusz Mróz", image: Book2 },
      ],
   };

   let favourites = user.favourites.map((book) => (
      <div className={styles.FavouriteBook} key={book.title}>
         <img alt={book.title} src={book.image} />
         <div className={styles.Title}>{book.title}</div>
         <div className={styles.Author}>{book.author}</div>
      </div>
   ));

   return (
      <div className={styles.Profile}>
         <PageHeader name={user.name} />
         <div className={styles.PageContent}>
            <div className={styles.ProfilePicture}>
               <img alt={user.id} src={user.picture} />
            </div>
            <div className={styles.Buttons}>
               <TextButton text={"Zaproś do znajomych"} isPrimary />
               <TextButton text={"Wyślij wiadomość"} />
            </div>
            <div className={styles.AboutMeSection}>
               <div className={styles.AboutMeContent}>{user.aboutMe}</div>
            </div>
            <div className={styles.Favourites}>
               <div className={styles.FavouritesBookCaption}>Favourites books</div>
               <div className={styles.FavouritesBooks}>{favourites}</div>
            </div>
         </div>
      </div>
   );
};

export default profile;
