import { parseISO } from "date-fns";

const formTemplate = (props) => {
  return {
    cover: {
      type: "photo",
      editPhoto: true,
      value: props.bookDetails.cover,
      validation: {},
      valid: true,
      touched: false,
    },
    title: {
      type: "input",
      name: "Tytul",
      value: props.bookDetails.title,
      validation: { required: true },
      valid: true,
      touched: false,
    },
    authorsIds: {
      type: "multiselect",
      name: "Autorzy",
      options: props.authors.options,
      value: props.authors.values,
      validation: {},
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
      value: props.bookDetails.categories,
      validation: {},
      valid: true,
      touched: false,
    },
    publishingDate: {
      type: "date",
      name: "Data wydania",
      value: parseISO(props.bookDetails.publishingDate),
      validation: { required: true },
      valid: true,
      touched: false,
    },
    publisher: {
      type: "input",
      name: "Wydawnictwo",
      value: props.bookDetails.publisher,
      validation: { required: true },
      valid: true,
      touched: false,
    },
    isbn: {
      type: "input",
      name: "ISBN",
      value: props.bookDetails.isbn,
      validation: { required: true },
      valid: true,
      touched: false,
    },
    description: {
      type: "textarea",
      name: "Opis",
      value: props.bookDetails.description,
      validation: {},
      valid: true,
    },
  };
};

export default formTemplate;
