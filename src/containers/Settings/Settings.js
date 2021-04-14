import React, { useState, useEffect } from "react";

import styles from "./Settings.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Menu from "../../assets/icons/menu.svg";
import ExpandedDiv from "../../components/UI/AnimatedComponents/ExpandedDiv/ExpandedDiv";
import FullSizePhoto from "../../components/Common/FullSizePhoto/FullSizePhoto";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";
import Avatar from "../../assets/photos/users/user1.jpg";
import From from "../../components/UI/Form/Form";

const Settings = (props) => {
   if (!props.token) props.history.push("/login")
   const user = {
      photo: Avatar,
      username: "zaleskix",
      firstName: "Daniel",
      lastName: "Załęski",
      gender: "male",
      phoneNumber: "+48 790 428 657",
      email: "daniel.zaleski9@gmail.com",
      birthDate: new Date(1995, 9, 9),
   };

   const [userForm, setUserForm] = useState({
      username: {
         type: "input",
         name: "Nazwa wyświetlana",
         placeholder: "username2021",
         value: user.username,
         validation: { required: true },
         valid: user.username,
         touched: false,
      },
      firstName: {
         type: "input",
         name: "Imię",
         placeholder: "Daniel",
         value: user.firstName,
         validation: {},
         valid: true,
         touched: false,
      },
      lastName: {
         type: "input",
         name: "Nazwisko",
         placeholder: "Zaleski",
         value: user.lastName,
         validation: {},
         valid: true,
         touched: false,
      },
      phoneNumber: {
         type: "input",
         name: "Numer telefonu",
         placeholder: "+48 111 222 333",
         value: user.phoneNumber,
         validation: {},
         valid: true,
         touched: false,
      },
      email: {
         type: "input",
         name: "Adres email",
         placeholder: "example@example.com",
         value: user.email,
         validation: { required: true },
         valid: user.email,
         touched: false,
      },
      gender: {
         type: "select",
         name: "Płeć",
         options: [
            { value: "male", displayValue: "Mężczyzna" },
            { value: "female", displayValue: "Kobieta" },
            { value: "other", displayValue: "Inna" },
            { value: "no_data", displayValue: "Nie chcę podawać" },
         ],
         value: user.gender ? user.gender : "no_data",
         validation: {},
         valid: true,
      },
      birthDate: {
         type: "date",
         name: "Data urodzenia",
         value: user.birthDate,
         validation: {},
         valid: true,
         touched: false,
      },
   });

   const [isFormValid, setIsFormValid] = useState(false);
   const [isMenuExpanded, setExpandMenu] = useState(false);

   useEffect(() => {
      let formValidity = true;
      for (let field in userForm) {
         formValidity = userForm[field].valid && formValidity;
      }

      setIsFormValid(formValidity);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   const expandMenu = () => {
      setExpandMenu(!isMenuExpanded);
   };

   return (
      <div className={styles.Settings}>
         <PageHeader caption={"Ustawienia"} />
         <div className={styles.PageContent}>
            <div className={styles.Menu}>
               <div className={styles.ActiveMenu}>Ustawienia konta</div>
               <div className={styles.MenuDropdown} onClick={expandMenu}>
                  <div className={styles.Dropdown}>
                     <img src={Menu} alt={"menu"} />
                  </div>
               </div>
               <div className={styles.FullMenu}>
                     <div className={styles.ExpandMenuLink}>Ustawienia prywatności</div>
                     <div className={styles.ExpandMenuLink}>Powiadomienia</div>
                     <div className={styles.ExpandMenuLink}>Integracje</div>
                     <div className={styles.ExpandMenuLink}>Hasła</div>
                  </div>
            </div>
            <div className={styles.ExpandedMenuSection}>
               <ExpandedDiv isExpanded={isMenuExpanded}>
                  <div className={styles.ExpandMenu}>
                     <div className={styles.ExpandMenuLink}>Ustawienia prywatności</div>
                     <div className={styles.ExpandMenuLink}>Powiadomienia</div>
                     <div className={styles.ExpandMenuLink}>Integracje</div>
                     <div className={styles.ExpandMenuLink}>Hasła</div>
                  </div>
               </ExpandedDiv>
            </div>
            <div className={styles.UserData}>
               <div className={styles.ProfilePicture}>
                  <FullSizePhoto name={user.username} image={user.photo} />
                  <TextButton text={"Zmień"} />
               </div>
               <From
                  formTemplate={userForm}
                  setFormTemplate={setUserForm}
                  isFormValid={isFormValid}
                  setIsFormValid={setIsFormValid}
               />
            </div>
         </div>
      </div>
   );
};

export default Settings;
