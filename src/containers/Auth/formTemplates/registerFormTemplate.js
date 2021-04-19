const registerFormTemplate = (props) => {
  return {
    avatar: {
      type: "photo",
      value: "",
      validation: { },
      valid: true,
      touched: false,
    },
    username: {
      type: "input",
      name: "Nazwa użytkownika *",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      type: "password",
      name: "Hasło *",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      type: "input",
      name: "Adres e-mail *",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    birthDate: {
      type: "date",
      name: "Data urodzenia *",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    firstName: {
      type: "input",
      name: "Imię",
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    lastName: {
      type: "input",
      name: "Nazwisko",
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    phoneNumber: {
      type: "input",
      name: "Nr telefonu",
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    gender: {
      type: "select",
      name: "Płeć",
      options: [
        {value: "NOT_GIVEN", displayValue: "Nie podana"},
        {value: "MALE", displayValue: "Mężczyzna"},
        {value: "FEMALE", displayValue: "Kobieta"},
        {value: "OTHER", displayValue: "Inne"},
      ],
      value: {value: "NOT_GIVEN", displayValue: "Nie podana"},
      validation: {},
      valid: true,
    }
  };
};

export default registerFormTemplate;
