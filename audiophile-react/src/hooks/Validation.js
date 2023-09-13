export default function Validation(inputValues, payMethod) {

    const errors = {};

    const namePattern = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
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
        document.querySelector('.name-label').classList.add('form-label-wrong');
        document.querySelector('#name').classList.add('error');
    } else {
        document.querySelector('.name-label').classList.remove('form-label-wrong');
        document.querySelector('#name').classList.remove('error');
    }

    if (!emailPattern.test(inputValues.email)) {
        errors.email = 'Wrong format';
        document.querySelector('.email-label').classList.add('form-label-wrong');
        document.querySelector('#email').classList.add('error');
    } else {
        document.querySelector('.email-label').classList.remove('form-label-wrong');
        document.querySelector('#email').classList.remove('error');
    }

    if (!phonePattern.test(inputValues.phone)) {
        errors.phone = 'Wrong format';
        document.querySelector('.phone-label').classList.add('form-label-wrong');
        document.querySelector('#phone').classList.add('error');
    } else {
        document.querySelector('.phone-label').classList.remove('form-label-wrong');
        document.querySelector('#phone').classList.remove('error');
    }

    if (!addressPattern.test(inputValues.address)) {
        errors.address = 'Wrong format';
        document.querySelector('.address-label').classList.add('form-label-wrong');
        document.querySelector('#address').classList.add('error');
    } else {
        document.querySelector('.address-label').classList.remove('form-label-wrong');
        document.querySelector('#address').classList.remove('error');
    }

    if (!zipPattern.test(inputValues.zip)) {
        errors.zip = 'Wrong format';
        document.querySelector('.zip-label').classList.add('form-label-wrong');
        document.querySelector('#zip-code').classList.add('error');
    } else {
        document.querySelector('.zip-label').classList.remove('form-label-wrong');
        document.querySelector('#zip-code').classList.remove('error');
    }

    if (!cityPattern.test(inputValues.city)) {
        errors.city = 'Wrong format';
        document.querySelector('.city-label').classList.add('form-label-wrong');
        document.querySelector('#city').classList.add('error');
    } else {
        document.querySelector('.city-label').classList.remove('form-label-wrong');
        document.querySelector('#city').classList.remove('error');
    }

    if (!countryPattern.test(inputValues.country)) {
        errors.country = 'Wrong format';
        document.querySelector('.country-label').classList.add('form-label-wrong');
        document.querySelector('#country').classList.add('error');
    } else {
        document.querySelector('.country-label').classList.remove('form-label-wrong');
        document.querySelector('#country').classList.remove('error');
    }

    if (payMethod === true) {
        if (!cardNumberPattern.test(inputValues.cardNumber)) {
            errors.cardNumber = 'Wrong format';
            document.querySelector('.card-number-label').classList.add('form-label-wrong');
            document.querySelector('#card-number').classList.add('error');
        } else {
            document.querySelector('.card-number-label').classList.remove('form-label-wrong');
            document.querySelector('#card-number').classList.remove('error');
        }
        if (!cardPinPattern.test(inputValues.cardPin)) {
            errors.cardPin = 'Wrong format';
            document.querySelector('.card-pin-label').classList.add('form-label-wrong');
            document.querySelector('#card-pin').classList.add('error');
        } else {
            document.querySelector('.card-pin-label').classList.remove('form-label-wrong');
            document.querySelector('#card-pin').classList.remove('error');
        }
    } else {
        delete errors.cardNumber;
        delete errors.cardPin;
    }
    // console.log(errors)
    return errors;
}