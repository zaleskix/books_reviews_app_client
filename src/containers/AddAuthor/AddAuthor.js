import React, {useState} from "react";

import styles from "./AddAuthor.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import From from "../../components/UI/Form/Form"

const AddAuthor = (props) => {
    const [authorForm, setAuthorForm] = useState({
        image: {
            type: "file",
            placeholder: "Zdjęcie autora",
            value: "",
            validation: {},
            valid: true,
        },
        firstName: {
            type: "input",
            name: "Imię",
            placeholder: "Stephen",
            value: "",
            validation: {required: true},
            valid: false,
            touched: false,
        },
        lastName: {
            type: "input",
            name: "Nazwisko",
            placeholder: "King",
            value: "",
            validation: {required: true},
            valid: false,
            touched: false,
        },
        categories: {
            type: "select",
            name: "Kategorie",
            options: [
                {value: "fantasy", displayValue: "Fantastyka"},
                {value: "scifi", displayValue: "Science-Fiction"},
            ],
            value: "fantasy",
            validation: {},
            valid: true,
        },
        homepage: {
            type: "input",
            name: "Strona autora",
            placeholder: "https://www.stephenking.com",
            value: "",
            validation: {},
            valid: true,
        },
        biography: {
            type: "textarea",
            name: "Biografia",
            placeholder:
                "Stephen Edwin King – amerykański pisarz, autor głównie literatury grozy. W przeszłości wydawał książki pod pseudonimem Richard Bachman, raz jako John Swithen. Jego książki rozeszły się w nakładzie przekraczającym 350 milionów egzemplarzy, co czyni go jednym z najbardziej poczytnych pisarzy na świecie. ",
            value: "",
            validation: {},
            valid: true,
        },
    });

    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <div className={styles.AddAuthor}>
            <PageHeader caption={"Dodaj autora"}/>
            <div className={styles.PageContent}>
                <From
                    formTemplate={authorForm}
                    setFormTemplate={setAuthorForm}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                />
            </div>
        </div>
    );
};

export default AddAuthor;
