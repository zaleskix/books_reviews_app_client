const formTemplate = (props) => {
  let categories = [];
  let authors = [];

  if (props.authors) {
    props.authors.map((author) =>
      authors.push({
        value: author.authorExternalId,
        displayValue: author.firstName + " " + author.lastName,
      })
    );
  }

  if (props.categories) {
    // eslint-disable-next-line array-callback-return
    props.categories.map((category) => {
      categories.push({
        value: category.name,
        displayValue: category.name,
      });
    });
  }

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
      options: authors,
      value: [],
      validation: {},
      valid: true,
    },
    categories: {
      type: "multiselect",
      name: "Kategorie",
      options: categories,
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
