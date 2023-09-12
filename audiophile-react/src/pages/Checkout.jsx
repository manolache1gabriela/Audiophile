import React, { useEffect, useState } from 'react'
import ConfirmationModal from '../components/ConfirmationModal'
import BackButton from '../components/BackButton'
import CartItemCheckout from '../components/CartItemCheckout';

export default function Checkout() {
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
    const [payMethod, setPayMethod] = useState(true);
    let [totalPrice, setTotalPrice] = useState(0);
    let [calculatedVAT, setCalculatedVat] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
    let inCheckoutItems = [];
    for (const [productId, { quantity, price }] of Object.entries(cart)) {
        inCheckoutItems.unshift(<CartItemCheckout productId={productId} key={productId} quantity={quantity} price={price} />)
    }

    useEffect(() => {
        const newCart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        let values = Object.values(newCart);
        setTotalPrice(values.reduce((acc, item) => acc + item.price, 50));
        setCalculatedVat(parseInt(0.2 * totalPrice));
    }, [totalPrice])

    const [canSubmit, setCanSubmit] = useState(true);

    const [name, setName] = useState('');
    const [wrongName, setWrongName] = useState(false);
    const nameRgx = '[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+';

    const getValueName = event => {
        setName(event.target.value)
    }

    function checkName() {
        if (!name.match(nameRgx)) {
            setWrongName(true);
            document.querySelector('.name-label').classList.add('form-label-wrong');
            document.querySelector('#name').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongName(false);
            document.querySelector('.name-label').classList.remove('form-label-wrong');
            document.querySelector('#name').classList.remove('error');
        }
    }

    const [email, setEmail] = useState('');
    const [wrongEmail, setWrongEmail] = useState(false);
    const emailRgx = '[a-zA-Z0-9]+@[a-z]+[.][a-z]{2,3}';

    const getValueEmail = event => {
        setEmail(event.target.value)
    }

    function checkEmail() {
        if (!email.match(emailRgx)) {
            setWrongEmail(true);
            document.querySelector('.email-label').classList.add('form-label-wrong');
            document.querySelector('#email').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongEmail(false);
            document.querySelector('.email-label').classList.remove('form-label-wrong');
            document.querySelector('#email').classList.remove('error');
        }
    }

    const [phone, setPhone] = useState('');
    const [wrongPhone, setWrongPhone] = useState(false);
    const phoneRgx = '[+][0-9]{1,2}[ ][0-9]{3}[-][0-9]{3}[-][0-9]{4}'

    const getValuePhone = event => {
        setPhone(event.target.value)
    }

    function checkPhone() {
        if (!phone.match(phoneRgx)) {
            setWrongPhone(true);
            document.querySelector('.phone-label').classList.add('form-label-wrong');
            document.querySelector('#phone').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongPhone(false);
            document.querySelector('.phone-label').classList.remove('form-label-wrong');
            document.querySelector('#phone').classList.remove('error');
        }
    }
    const [address, setAddress] = useState('');
    const [wrongAddress, setWrongAddress] = useState(false);
    const addressRgx = '[1-9]{1,4}[ ][A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+';

    const getValueAddress = event => {
        setAddress(event.target.value)
    }

    function checkAddress() {
        if (!address.match(addressRgx)) {
            setWrongAddress(true);
            document.querySelector('.address-label').classList.add('form-label-wrong');
            document.querySelector('#address').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongAddress(false);
            document.querySelector('.address-label').classList.remove('form-label-wrong');
            document.querySelector('#address').classList.remove('error');
        }
    }

    const [ZIP, setZIP] = useState('');
    const [wrongZIP, setWrongZIP] = useState(false);
    const ZIPRgx = '^[0-9]{5}$';

    const getValueZIP = event => {
        setZIP(event.target.value)
    }

    function checkZIP() {
        if (!ZIP.match(ZIPRgx)) {
            setWrongZIP(true);
            document.querySelector('.zip-label').classList.add('form-label-wrong');
            document.querySelector('#zip-code').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongZIP(false);
            document.querySelector('.zip-label').classList.remove('form-label-wrong');
            document.querySelector('#zip-code').classList.remove('error');
        }
    }

    const [city, setCity] = useState('');
    const [wrongCity, setWrongCity] = useState(false);
    const cityRgx = '^[a-zA-Z]+(?:[[ ]-][a-zA-Z]+)*$';

    const getValueCity = event => {
        setCity(event.target.value)
    }

    function checkCity() {
        if (!city.match(cityRgx)) {
            setWrongCity(true);
            document.querySelector('.city-label').classList.add('form-label-wrong');
            document.querySelector('#city').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongCity(false);
            document.querySelector('.city-label').classList.remove('form-label-wrong');
            document.querySelector('#city').classList.remove('error');
        }
    }

    const [country, setCountry] = useState('');
    const [wrongCountry, setWrongCountry] = useState(false);
    const countryRgx = '[a-zA-Z]{2,}';

    const getValueCountry = event => {
        setCountry(event.target.value)
    }

    function checkCountry() {
        if (!country.match(countryRgx)) {
            setWrongCountry(true);
            document.querySelector('.country-label').classList.add('form-label-wrong');
            document.querySelector('#country').classList.add('error');
            setCanSubmit(false);
        } else {
            setWrongCountry(false);
            document.querySelector('.country-label').classList.remove('form-label-wrong');
            document.querySelector('#country').classList.remove('error');
        }
    }

    const [cardNumber, setCardNumber] = useState('');
    const [wrongCardNumber, setWrongCardNumber] = useState(false);
    const cardNumberRgx = '^[0-9]{9}';

    const getValueCardNumber = event => {
        setCardNumber(event.target.value)
    }

    function checkCardNumber() {
        if (payMethod === true) {
            if (!cardNumber.match(cardNumberRgx)) {
                setWrongCardNumber(true);
                document.querySelector('.card-number-label').classList.add('form-label-wrong');
                document.querySelector('#card-number').classList.add('error');
                setCanSubmit(false);
            } else {
                setWrongCardNumber(false);
                document.querySelector('.card-number-label').classList.remove('form-label-wrong');
                document.querySelector('#card-number').classList.remove('error');
                // setCanSubmit(true);
            }
        }
    }

    const [cardPIN, setCardPIN] = useState('');
    const [wrongCardPIN, setWrongCardPIN] = useState(false);
    const cardPINRgx = '^[0-9]{4}$';

    const getValueCardPIN = event => {
        setCardPIN(event.target.value)
    }

    function checkCardPIN() {
        if (payMethod === true) {
            if (!cardPIN.match(cardPINRgx)) {
                setWrongCardPIN(true);
                document.querySelector('.card-pin-label').classList.add('form-label-wrong');
                document.querySelector('#card-pin').classList.add('error');
                setCanSubmit(false);
            } else {
                setWrongCardPIN(false);
                document.querySelector('.card-pin-label').classList.remove('form-label-wrong');
                document.querySelector('#card-pin').classList.remove('error');
                // setCanSubmit(true);
            }
        }
    }




    function checkValidity() {
        checkName();
        checkEmail();
        checkPhone();
        checkAddress();
        checkZIP();
        checkCity();
        checkCountry();
        checkCardNumber();
        checkCardPIN();
    }

    // function handleSubmit() {
    //     checkValidity();
    //     if (canSubmit === true) {
    //         setOpenModalConfirmation(true);s
    //     }
    // }
    function handleSubmit() {

        checkValidity();
        if (payMethod) {
            console.log('hehheeeee')
            if (!wrongName && !wrongEmail && !wrongPhone && !wrongAddress && !wrongZIP && !wrongCity && !wrongCountry && !wrongCardNumber && !wrongCardPIN) {
                setOpenModalConfirmation(true)
            }
        }
    }
    // function handleSubmit() {
    //     if (canSubmit) {
    //         setOpenModalConfirmation(true)
    //     } else {
    //         setOpenModalConfirmation(false)
    //     }
    // }

    // function handleSubmit() {
    //     checkValidity();
    //     if (!wrongName && !wrongEmail && !wrongPhone && !wrongAddress && !wrongZIP && !wrongCity && !wrongCountry) {
    //         setOpenModalConfirmation(true);
    //     }
    // }


    return (
        <div>
            <div className="back-button-section-checkout">
                <BackButton />
            </div>
            <section className="checkout-summary">
                <div className="checkout">
                    <h3 className="checkout-title">CHECKOUT</h3>
                    <div className="billing details">
                        <p className="subtitle-checkout">Billing details</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label name-label" htmlFor="name">Name</label>
                                    {wrongName && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueName} className="inputs" type="text" required name="name" id="name" placeholder="Alexei Ward" value={name} />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label email-label" htmlFor="email">Email Address</label>
                                    {wrongEmail && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueEmail} className="inputs" type="email" required name="email" id="email" value={email} placeholder="alexei@mail.com" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label phone-label" htmlFor="phone">Phone Number</label>
                                    {wrongPhone && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValuePhone} className="inputs" type="tel" required name="phone" id="phone" value={phone} placeholder="+1 202-555-0136" />
                            </div>
                        </form>
                    </div>
                    <div className="shipping details">
                        <p className="subtitle-checkout">shipping info</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input address">
                                <div className="label-and-error">
                                    <label className="form-label address-label" htmlFor="address">Your Address</label>
                                    {wrongAddress && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueAddress} className="inputs" type="text" required name="address" value={address} id="address" placeholder="1137 Williams Avenue" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label zip-label" htmlFor="zip-code">ZIP Code</label>
                                    {wrongZIP && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueZIP} value={ZIP} className="inputs" type="text" required name="zip-code" id="zip-code" placeholder="10001" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label city-label" htmlFor="city">City</label>
                                    {wrongCity && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueCity} value={city} className="inputs" type="text" required name="city" id="city" placeholder="New York" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label country-label" htmlFor="country">Country</label>
                                    {wrongCountry && <span className="error-text">Wrong format</span>}
                                </div>
                                <input onChange={getValueCountry} value={country} className="inputs" type="text" required name="country" id="country" placeholder="United States" />
                            </div>
                        </form>
                    </div>
                    <div className="payment details">
                        <p className="subtitle-checkout">payment details</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input payment-form">
                                <label className="form-label" htmlFor="payment">Payment Method</label>
                                <div className="payment-methods">
                                    <div onClick={() => { setPayMethod(true) }} className="card-method">
                                        <label className="form-label" htmlFor="e-money">
                                            <input className="inputs input-method" type="radio" name="payment" id="e-money" defaultChecked />
                                            <span className="radio-text">e-Money</span>
                                        </label>
                                    </div>
                                    <div onClick={() => { setPayMethod(false) }} className="cash-method">
                                        <label className="form-label" htmlFor="cash">
                                            <input className="inputs input-method" type="radio" name="payment" id="cash" />
                                            <span className="radio-text">Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {payMethod &&
                                <div className='card-info-container'>
                                    <div className="form-inputs-e-money">
                                        <div className="label-and-error">
                                            <label className="form-label card-number-label" htmlFor="card-number">e-Money Number</label>
                                            {wrongCardNumber && <span className="error-text">Wrong format</span>}
                                        </div>
                                        <input onChange={getValueCardNumber} value={cardNumber} className="inputs" type="text" required name="card-number" id="card-number" placeholder="238521993" />
                                    </div>
                                    <div className="form-inputs-e-money">
                                        <div className="label-and-error">
                                            <label className="form-label card-pin-label" htmlFor="card-pin">e-Money PIN</label>
                                            {wrongCardPIN && <span className="error-text">Wrong format</span>}
                                        </div>
                                        <input onChange={getValueCardPIN} value={cardPIN} className="inputs" type="text" required name="card-pin" id="card-pin" placeholder="6891" />
                                    </div>
                                </div>
                            }
                            {!payMethod && <div className="cash-on-delivery-information cash-chose">
                                <img src="/assets/checkout/icon-cash-on-delivery.svg" alt="cash on delivery icon" />
                                <p className="cash-on-delivery-info">
                                    The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </p>
                            </div>}

                        </form>
                    </div>
                </div>
                <div className="summary">
                    <h6 className="product-price">summary</h6>
                    <div className="cart-summary">
                        {inCheckoutItems}
                    </div>
                    <div className="paying-summary">
                        <ul className="payment-parts">
                            <li className="payment-part">
                                <p className="part-name">TOTAL</p>
                                <span className="part-amount">$ {totalPrice - 50}</span>
                            </li>
                            <li className="payment-part">
                                <p className="part-name">SHIPPING</p>
                                <span className="part-amount">$ 50</span>
                            </li>
                            <li className="payment-part">
                                <p className="part-name">VAT (INCLUDED)</p>
                                <span className="part-amount">$ {calculatedVAT}</span>
                            </li>
                        </ul>
                        <ul className="payment-total">
                            <li className="total-sum">
                                <p className="total-sum-name">GRAND TOTAL</p>
                                <span className="total-amount">$ {totalPrice}</span>
                            </li>
                        </ul>
                    </div>
                    <input onClick={handleSubmit} className="button-primary submit-btn" type="submit" value="CONTINUE & PAY" />
                </div>
            </section>

            {openModalConfirmation && <ConfirmationModal openModalConfirmation={openModalConfirmation} setOpenModalConfirmation={setOpenModalConfirmation} inCheckoutItems={inCheckoutItems} totalPrice={totalPrice} />}
        </div>
    )
}
