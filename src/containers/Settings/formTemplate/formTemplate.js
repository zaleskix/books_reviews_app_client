import {parseISO} from "date-fns";

const formTemplate = (props) => {

    let gender;
    if (props.userDetails.gender.toLowerCase() === "male") {
        gender = {value: "MALE", displayValue: "Mężczyzna"};
    } else if (props.userDetails.gender.toLowerCase() === "female") {
        gender = {value: "FEMALE", displayValue: "Kobieta"};
    } else if (props.userDetails.gender.toLowerCase() === "other") {
        gender = {value: "OTHER", displayValue: "Inna"};
    } else {
        gender = {value: "NOT_GIVEN", displayValue: "Nie podano"};
    }

    return {
        avatar: {
            type: "photo",
            editPhoto: true,
            value: props.userDetails.avatar,
            validation: { },
            valid: true,
            touched: false,
        },
        username: {
            type: "input",
            name: "Nazwa użytkownika *",
            value: props.userDetails.username ? props.userDetails.username : "",
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
        },
        password: {
            type: "password",
            name: "Hasło *",
            value: props.userDetails.password ? props.userDetails.password : "******",
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
        },
        email: {
            type: "input",
            name: "Adres e-mail *",
            value: props.userDetails.email ? props.userDetails.email : "",
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
        },
        birthDate: {
            type: "date",
            name: "Data urodzenia *",
            value: props.userDetails.birthDate ? parseISO(props.userDetails.birthDate) : null,
            validation: { required: true },
            valid: true,
            touched: false,
        },
        firstName: {
            type: "input",
            name: "Imię",
            value: props.userDetails.firstName ? props.userDetails.firstName : "",
            validation: {},
            valid: true,
            touched: false,
        },
        lastName: {
            type: "input",
            name: "Nazwisko",
            value: props.userDetails.lastName ? props.userDetails.lastName : "",
            validation: {},
            valid: true,
            touched: false,
        },
        phoneNumber: {
            type: "input",
            name: "Nr telefonu",
            value: props.userDetails.phoneNumber ? props.userDetails.phoneNumber : "",
            validation: {},
            valid: true,
            touched: false,
        },
        gender: {
            type: "select",
            name: "Płeć",
            options: [
                {value: "NOT_GIVEN", displayValue: "Nie podana"},
                {value: "MALE", displayValue: "Mężczyzna"},
                {value: "FEMALE", displayValue: "Kobieta"},
                {value: "OTHER", displayValue: "Inne"},
            ],
            value: gender,
            validation: {},
            valid: true,
        },
        aboutMe: {
            type: "input",
            name: "O mnie",
            value: props.userDetails.aboutMe ? props.userDetails.aboutMe : "",
            validation: {},
            valid: true,
            touched: false,
        },
    };
};

export default formTemplate;
