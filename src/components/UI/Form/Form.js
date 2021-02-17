import React from "react";
import { checkValidity, updateObject } from "../../../shared/formUtils";
import Input from "./Input/Input";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

const form = (props) => {
  const formHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementID in props.formTemplate) {
      props.formTemplate[formElementID].type === "file"
        ? (formData[formElementID] = props.formTemplate[
            formElementID
          ].value.slice(
            props.formTemplate[formElementID].value.indexOf("base64,") +
              "base64,".length
          ))
        : (formData[formElementID] = props.formTemplate[formElementID].value);
    }

    console.log("Form handled: {}", formData);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    let propertiesAfterUpdate =
      props.formTemplate[inputIdentifier].type !== "file"
        ? {
            value: event.target.value,
            valid: checkValidity(
              event.target.value,
              props.formTemplate[inputIdentifier].validation
            ),
            touched: true,
          }
        : {
            value: event,
          };
    const elementAfterUpdate = updateObject(
      props.formTemplate[inputIdentifier],
      propertiesAfterUpdate
    );

    const formAfterUpdate = updateObject(props.formTemplate, {
      [inputIdentifier]: elementAfterUpdate,
    });

    let isFormValid = true;
    for (let inputID in formAfterUpdate) {
      isFormValid = formAfterUpdate[inputID].valid && isFormValid;
    }

    props.setFormTemplate(formAfterUpdate);
    props.setIsFormValid(isFormValid);
  };

  const formArray = [];
  for (let key in props.formTemplate) {
    formArray.push({
      id: key,
      data: props.formTemplate[key],
    });
  }
  let formContent = (
    <form onSubmit={formHandler}>
      {formArray.map((element) => (
        <Input
          key={element.id}
          type={element.data.type}
          label={element.data.name}
          options={element.data.options}
          value={element.data.value}
          invalid={!element.data.valid}
          shouldValidate={element.data.validation}
          touched={element.data.touched}
          changed={(event) => inputChangedHandler(event, element.id)}
        />
      ))}
      <SubmitButton text="Submit" disabled={!props.isFormValid} />
    </form>
  );
  return (formContent);
};

export default form;
