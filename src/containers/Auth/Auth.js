import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import TextButton from "../../components/UI/Buttons/TextButton/TextButton";
import styles from "./Auth.module.css";
import * as actions from "../../store/actions/index";

import Form from "../../components/UI/Form/Form";

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      type: "input",
      name: "Login",
      placeholder: "youemail@example.com",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      type: "password",
      name: "Hasło",
      placeholder: "Password",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignup, setIsSignup] = useState(true);

  const submitHandler = (event) => {
    props.onLogin(authForm.email.value, authForm.password.value);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  let authRedirect = null;
  if (props.isAuthenticated && props.loginInProgress) {
    props.onFinishLogin();
    authRedirect = <Redirect to="/" />;
  }

  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <div className={styles.Auth}>
      {authRedirect}
      <Form
        submited={submitHandler}
        formTemplate={authForm}
        setFormTemplate={setAuthForm}
        isFormValid={isFormValid}
        setIsFormValid={setIsFormValid}
      />
      <div className={styles.SwitchButton}>
        <TextButton
          onClick={() => switchAuthModeHandler()}
          text={isSignup ? "Switch to register" : "Switch to login"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    loginInProgress: state.auth.loginTriggered,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
    onFinishLogin: () => dispatch(actions.finishLogin()),
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
