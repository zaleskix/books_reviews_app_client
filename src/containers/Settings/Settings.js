import React, { useState, useEffect } from "react";

import styles from "./Settings.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Menu from "../../assets/icons/menu.svg";
import ExpandedDiv from "../../components/UI/AnimatedComponents/ExpandedDiv/ExpandedDiv";
import FullSizePhoto from "../../components/Common/FullSizePhoto/FullSizePhoto";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";
import Avatar from "../../assets/photos/users/user1.jpg";
import From from "../../components/UI/Form/Form";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import formTemplate from "./formTemplate/formTemplate";
import {useLocation} from "react-router-dom";

const Settings = (props) => {
   if (!props.token) props.history.push("/login")

   const [userForm, setUserForm] = useState();
   const [isFormValid, setIsFormValid] = useState(false);
   const [isFormSubmitted, setFormSubmitted] = useState(false);

   useEffect(() => {
      setUserForm(formTemplate({userDetails: props.userDetails}))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   const submitted = (userData) => {
      const changedData = userData;
      for (let key in userData) {
         if (!userForm[key].touched) {
            delete changedData[key];
         }
      }
      props.onEditUser(props.userId, userData);
      setFormSubmitted(true);
   };

   if (isFormSubmitted && !props.loading && props.actionFinished) {
      window.scrollTo(0,0)
      setTimeout(() => {
         props.history.push("/")
      }, 1500)
   }

   return (
      <div className={styles.Settings}>
         <PageHeader caption={"Edycja profilu"} />
         <div className={styles.PageContent}>
            <div className={styles.UserData}>
               {isFormSubmitted && !props.loading && props.actionFinished ? (
                   <div className={styles.Success}>
                      Pomyślnie edytowałeś profil. Za 2 sekundy zostaniesz przekierowany na stronę główną
                   </div>
               ) : null}
               <From
                   submited={submitted}
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

const mapStateToProps = (state) => {
   return {
      token: state.auth.token,
      userId: state.util.userId,
      loading: state.user.loading,
      actionFinished: state.user.actionFinished,
      userDetails: state.util.userDetails
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onEditUser: (userId, userData) =>
          dispatch(actions.editUser(userId, userData)),
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorHandler(Settings, axiosInstance));
