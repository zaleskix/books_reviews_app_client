import React from "react";
import ImageUploader from "react-images-upload";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import styles from "./Input.module.css";
import PhotoPlaceholder from "../../../../assets/icons/photo_placeholder.svg";
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
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "password":
      element = (
        <input
          className={inputStyles.join(" ")}
          {...props.config}
          type={props.type}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      element = (
        <textarea
          className={inputStyles.join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      element = (
        //TODO: dodac jakis ladny select
        <select
          className={inputStyles.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case "multiselect":
      element = (
        <select
          className={inputStyles.join(" ")}
          value={props.value}
          onChange={props.changed}
          multiple
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case "photo":
      let src = props.editPhoto
        ? props.value && props.value[0].startsWith("data")
          ? props.value
          : "data:image/png;name=b04.png;base64," + props.value
        : props.value
        ? props.value
        : PhotoPlaceholder;
      element = (
        <div className={styles.PhotoPreview}>
          <img alt={"preview"} src={src} />
          <ImageUploader
            className={styles.ImageUploader}
            {...props.config}
            withIcon={true}
            onChange={props.imgChanged}
            label={"Załaduj zdjęcie"}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>
      );
      break;
    case "date":
      element = (
        <DatePicker
          className={inputStyles.join(" ")}
          {...props.config}
          selected={props.value}
          onChange={props.changed}
        />
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
      {props.label ? (
        <label className={styles.Label}>{props.label}</label>
      ) : null}
      {element}
    </div>
  );
};

export default Input;
