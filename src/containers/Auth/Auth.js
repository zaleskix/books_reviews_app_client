import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import TextButton from "../../components/UI/Buttons/TextButton/TextButton";
import styles from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import loginFormTemplate from "./formTemplates/loginFormTemplate";
import registerFormTemplate from "./formTemplates/registerFormTemplate";
import Form from "../../components/UI/Form/Form";

const Auth = (props) => {
  const [authForm, setAuthForm] = useState();
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    isSignup
      ? setAuthForm(loginFormTemplate)
      : setAuthForm(registerFormTemplate);
  }, [isSignup]);

  const submitHandler = (userData) => {
    if (isSignup) {
      props.onLogin(userData.username, userData.password);
    } else {
      let gender = userData.gender;
      userData.gender = gender.value;
      userData.role = "USER"
      props.onRegister(userData);
    }
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  if (props.isAuthenticated && props.loginInProgress) {
    setTimeout(() => {
    props.onFinishLogin();
      props.history.push("/")
    }, 3000)
  }

  if (props.registerInProgress) {
    setTimeout(() => {
    props.onFinishRegister();
      props.history.push("/login")
    }, 3000)
  }

  const [isFormValid, setIsFormValid] = useState(false);


  return (
    <div className={styles.Auth}>

      <Form
        submited={submitHandler}
        formTemplate={authForm}
        setFormTemplate={setAuthForm}
        isFormValid={isFormValid}
        setIsFormValid={setIsFormValid}
      />
      <div className={styles.SwitchButton}>
        <TextButton
          clicked={switchAuthModeHandler}
          text={isSignup ? "Switch to register" : "Switch to login"}
        />
      </div>
      { isSignup && props.isAuthenticated && props.loginInProgress ?
          <div className={styles.Success}>Zalogowano pomyślnie.<br/>
            Zostaniesz przekierowany w ciągu 3s.</div> : null}
      { !isSignup && props.registerInProgress ?
          <div className={styles.Success}>Zarejestrowano pomyślnie.<br/>
            Zostaniesz przekierowany w ciągu 3s.</div> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    loginInProgress: state.auth.loginTriggered,
    registerInProgress: state.user.registerProcess,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
    onRegister: (userData) => dispatch(actions.addUser(userData)),
    onFinishLogin: () => dispatch(actions.finishLogin()),
    onFinishRegister: () => dispatch(actions.finishRegister()),
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
