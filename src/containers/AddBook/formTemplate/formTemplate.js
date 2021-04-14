const formTemplate = (props) => {
  return {
    cover: {
      type: "photo",
      value: "",
      validation: {},
      valid: true,
    },
    title: {
      type: "input",
      name: "Tytul",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    authorsIds: {
      type: "multiselect",
      name: "Autorzy",
      options: props.authors,
      value: [],
      validation: {},
      valid: true,
    },
    categories: {
      type: "multiselect",
      name: "Kategorie",
      options: [
        { value: "fantasy", displayValue: "Fantastyka" },
        { value: "scifi", displayValue: "Science-Fiction" },
      ],
      value: [],
      validation: {},
      valid: true,
    },
    publishingDate: {
      type: "date",
      name: "Data wydania",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    publisher: {
      type: "input",
      name: "Wydawnictwo",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    isbn: {
      type: "input",
      name: "ISBN",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    description: {
      type: "textarea",
      name: "Opis",
      value: "",
      validation: {},
      valid: true,
    },
  };
};

export default formTemplate;
