export default function Validation(inputValues, payMethod) {

    const errors = {};

    const namePattern = /[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
    const emailPattern = /[a-zA-Z0-9]+@[a-z]+[.][a-z]{2,3}/;
    const phonePattern = /[+][0-9]{1,2}\s[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    const addressPattern = /[1-9]{1,4}\s[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
    const zipPattern = /^[0-9]{5}$/;
    const cityPattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    const countryPattern = /[a-zA-Z]{2,}/;
    const cardNumberPattern = /^[0-9]{9}$/;
    const cardPinPattern = /[0-9]{4}/;

    if (!namePattern.test(inputValues.name)) {
        errors.name = 'Wrong format';
    }

    if (!emailPattern.test(inputValues.email)) {
        errors.email = 'Wrong format';
    }

    if (!phonePattern.test(inputValues.phone)) {
        errors.phone = 'Wrong format';
    }

    if (!addressPattern.test(inputValues.address)) {
        errors.address = 'Wrong format';
    }

    if (!zipPattern.test(inputValues.zip)) {
        errors.zip = 'Wrong format';
    }

    if (!cityPattern.test(inputValues.city)) {
        errors.city = 'Wrong format';
    }

    if (!countryPattern.test(inputValues.country)) {
        errors.country = 'Wrong format';
    }

    if (payMethod === true) {
        if (!cardNumberPattern.test(inputValues.cardNumber)) {
            errors.cardNumber = 'Wrong format';
        }
        if (!cardPinPattern.test(inputValues.cardPin)) {
            errors.cardPin = 'Wrong format';
        }
    }
    return errors;
}