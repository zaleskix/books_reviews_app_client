const loginFormTemplate = (props) => {
  return {
    username: {
      type: "input",
      name: "Nazwa użytkownika",
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
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  };
};

export default loginFormTemplate;
