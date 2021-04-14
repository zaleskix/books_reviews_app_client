const formTemplate = (props) => {
  return {
    image: {
      type: "photo",
      editPhoto: true,
      value: props.categoryDetails.image,
      validation: {},
      valid: true,
      touched: false,
    },
    name: {
      type: "input",
      name: "Nazwa",
      value: props.categoryDetails.name,
      validation: { required: true },
      valid: true,
      touched: false,
    },
  };
};

export default formTemplate;
