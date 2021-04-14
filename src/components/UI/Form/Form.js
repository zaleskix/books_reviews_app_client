import React from "react";
import { checkValidity, updateObject } from "../../../shared/utils";
import Input from "./Input/Input";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

const form = (props) => {
  const formHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementID in props.formTemplate) {
      props.formTemplate[formElementID].type === "photo"
        ? (formData[formElementID] = props.formTemplate[
            formElementID
          ].value[0].slice(
            props.formTemplate[formElementID].value[0].indexOf("base64,") +
              "base64,".length
          ))
        : (formData[formElementID] = props.formTemplate[formElementID].value);
    }

    props.submited(formData);
  };

  const inputFileChangedHandler = (
    pictureFiles,
    pictureDataURLs,
    inputIdentifier
  ) => {
    let propertiesAfterUpdate = {
      value: pictureDataURLs,
      touched: true,
    };

    processFormHandling(propertiesAfterUpdate, inputIdentifier);
  };
  const inputChangedHandler = (event, inputIdentifier) => {
    let propertiesAfterUpdate =
      props.formTemplate[inputIdentifier].type !== "date"
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
            valid: true,
            touched: true
          };

    let propsToSave =
      props.formTemplate[inputIdentifier].type === "multiselect"
        ? {
            value: [
              ...new Set([
                ...props.formTemplate[inputIdentifier].value,
                propertiesAfterUpdate.value,
              ]),
            ],
          }
        : propertiesAfterUpdate;

    processFormHandling(propsToSave, inputIdentifier);
  };

  const processFormHandling = (propertiesToUpdate, inputIdentifier) => {
    const elementAfterUpdate = updateObject(
      props.formTemplate[inputIdentifier],
      propertiesToUpdate
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
          editPhoto={element.data.editPhoto}
          changed={(event) => inputChangedHandler(event, element.id)}
          imgChanged={(pictureFiles, pictureDataURLs) =>
            inputFileChangedHandler(pictureFiles, pictureDataURLs, element.id)
          }
        />
      ))}
      <SubmitButton text="Submit" disabled={!props.isFormValid} />
    </form>
  );
  return formContent;
};

export default form;
