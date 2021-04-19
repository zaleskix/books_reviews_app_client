import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

import Avatar from "react-avatar-edit";
import styles from "./Input.module.css";
const Input = (props) => {
  let element = null;
  const inputStyles = [styles.Element];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.type) {
    case "input":
      element = (
        <input
          className={inputStyles.join(" ")}
          ref={props.form(props.validations)}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      element = (
        <textarea
          className={inputStyles.join(" ")}
          ref={props.form(props.validations)}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      element = (
        <Controller
            className={inputStyles.join(" ")}
            name={props.value}
            control={props.form}
            onChange={props.changed}
            options={[props.config.options.map((option) => (
              { value: option.value, label: option.displayValue }
            ))]}
            as={Select}
        />
      );
      break;
    case "photo":
      element = (
        <div className={styles.AvatarInput}>
          <Avatar
            width={240}
            height={240}
            onCrop={props.changed}
            onClose={props.changed}
            src={props.value}
          />
          {props.value ? (
            <React.Fragment>
              <p>Podgląd:</p>
              <img src={props.value} alt="Preview" />{" "}
            </React.Fragment>
          ) : null}
        </div>
      );
      break;
    default:
      element = (
        <input
          className={inputStyles.join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {props.label ? <label className={styles.Label}>{props.label}</label> : null }
      {element}
    </div>
  );
};

export default Input;
