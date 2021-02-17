import React from "react";
import Avatar from "react-avatar-edit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
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
        case "file":
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
                        <div className={styles.Preview}>
                            <p>Podgląd:</p>
                            <img src={props.value} alt="Preview"/>{" "}
                        </div>
                    ) : null}
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
