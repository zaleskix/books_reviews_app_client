import React, {useState} from "react";

import styles from "./AddBook.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import From from "../../components/UI/Form/Form"

const AddBook = (props) => {
    const [bookForm, setBookForm] = useState({
        image: {
            type: "file",
            placeholder: "Okładka",
            value: "",
            validation: {},
            valid: true,
        },
        authors: {
            type: "select",
            name: "Autorzy",
            options: [
                {value: "AS", displayValue: "Andrzej Sapkowski"},
                {value: "RM", displayValue: "Remigiusz Mróz"},
            ],
            value: "author",
            validation: {},
            valid: true,
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
        publishingDate: {
            type: "date",
            name: "Data wydania",
            value: "",
            validation: {required: true},
            valid: false,
            touched: false,
        },
        publisher: {
            type: "input",
            name: "Wydawnictwo",
            placeholder: "Nowa Era",
            value: "",
            validation: {required: true},
            valid: false,
            touched: false,
        },
        isbn: {
            type: "input",
            name: "ISBN",
            placeholder: "1-84356-028-3",
            value: "",
            validation: {required: true},
            valid: false,
            touched: false,
        },
        description: {
            type: "textarea",
            name: "Opis",
            placeholder:
                "Stephen Edwin King – amerykański pisarz, autor głównie literatury grozy. W przeszłości wydawał książki pod pseudonimem Richard Bachman, raz jako John Swithen. Jego książki rozeszły się w nakładzie przekraczającym 350 milionów egzemplarzy, co czyni go jednym z najbardziej poczytnych pisarzy na świecie. ",
            value: "",
            validation: {},
            valid: true,
        },
    });

    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <div className={styles.AddBook}>
            <PageHeader caption={"Dodaj książkę"}/>
            <div className={styles.PageContent}>
                <From
                    formTemplate={bookForm}
                    setFormTemplate={setBookForm}
                    isFormValid={isFormValid}
                    setIsFormValid={setIsFormValid}
                />
            </div>
        </div>
    );
};

export default AddBook;
