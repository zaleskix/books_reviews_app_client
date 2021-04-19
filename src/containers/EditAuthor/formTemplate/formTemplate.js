const formTemplate = (props) => {
  return {
    photo: {
      type: "photo",
      editPhoto: true,
      placeholder: "Zdjęcie autora",
      value: props.authorDetails.photo,
      validation: {},
      valid: true,
      touched: false,
    },
    firstName: {
      type: "input",
      name: "Imię",
      placeholder: props.authorDetails.firstName,
      value: props.authorDetails.firstName,
      validation: { required: true },
      valid: true,
      touched: false,
    },
    lastName: {
      type: "input",
      name: "Nazwisko",
      placeholder: props.authorDetails.lastName,
      value: props.authorDetails.lastName,
      validation: { required: true },
      valid: true,
      touched: false,
    },
    categories: {
      type: "multiselect",
      name: "Kategorie",
      options: [
        { value: "fantasy", displayValue: "Fantastyka" },
        { value: "scifi", displayValue: "Science-Fiction" },
      ],
      value: props.authorDetails.categories,
      validation: {},
      valid: true,
    },
    website: {
      type: "input",
      name: "Strona autora",
      placeholder: props.authorDetails.website,
      value: props.authorDetails.website,
      validation: {},
      valid: true,
    },
    biography: {
      type: "textarea",
      name: "Biografia",
      placeholder: props.authorDetails.biography,
      value: props.authorDetails.biography,
      validation: {},
      valid: true,
    },
  };
};

export default formTemplate;
