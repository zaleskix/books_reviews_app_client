const formTemplate = () => {
  return {
    image: {
      type: "photo",
      value: "",
      validation: { required: true },
      valid: true,
      touched: false,
    },
    name: {
      type: "input",
      name: "Nazwa kategorii",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
  };
};

export default formTemplate;
