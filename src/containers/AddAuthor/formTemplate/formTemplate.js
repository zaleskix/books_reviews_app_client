const formTemplate = (props) => {
  let categories = []
  if (props.categories) {
    props.categories.map(category => {
      categories.push({
        value: category.name,
        displayValue: category.name
      })
    })
  }
  return {
    photo: {
      type: "photo",
      value: "",
      validation: {},
      valid: true,
    },
    firstName: {
      type: "input",
      name: "Imię",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    lastName: {
      type: "input",
      name: "Nazwisko",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    categories: {
      type: "multiselect",
      name: "Kategorie",
      options: categories,
      value: [],
      validation: {},
      valid: true,
    },
    website: {
      type: "input",
      name: "Strona autora",
      value: "",
      validation: {},
      valid: true,
    },
    biography: {
      type: "textarea",
      name: "Biografia",
      value: "",
      validation: {},
      valid: true,
    },
  };
};

export default formTemplate;
