import React, { useEffect, useState } from 'react'
import ConfirmationModal from '../components/ConfirmationModal'
import BackButton from '../components/BackButton'
import CartItemCheckout from '../components/CartItemCheckout';
import Validation from '../hooks/Validation';

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


    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        cardNumber: '',
        cardPIN: ''
    });

    const [errors, setErrors] = useState({});

    function handleInput(event) {
        const newObj = { ...inputValues, [event.target.name]: event.target.value };
        setInputValues(newObj);
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(inputValues, payMethod));
        if (Object.keys(errors).length === 0) {
            setOpenModalConfirmation(false);
            console.log(22)
        } else {
            setOpenModalConfirmation(true);
            console.log(33)
        }
    }
    // console.log(Object.keys(errors).length)


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
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="text" required name="name" id="name" placeholder="Alexei Ward" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label email-label" htmlFor="email">Email Address</label>
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="email" required name="email" id="email" placeholder="alexei@mail.com" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label phone-label" htmlFor="phone">Phone Number</label>
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="tel" required name="phone" id="phone" placeholder="+1 202-555-0136" />
                            </div>
                        </form>
                    </div>
                    <div className="shipping details">
                        <p className="subtitle-checkout">shipping info</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input address">
                                <div className="label-and-error">
                                    <label className="form-label address-label" htmlFor="address">Your Address</label>
                                    {errors.address && <span className="error-text">{errors.address}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="text" required name="address" id="address" placeholder="1137 Williams Avenue" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label zip-label" htmlFor="zip-code">ZIP Code</label>
                                    {errors.zip && <span className="error-text">{errors.zip}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="text" required name="zip" id="zip-code" placeholder="10001" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label city-label" htmlFor="city">City</label>
                                    {errors.city && <span className="error-text">{errors.city}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="text" required name="city" id="city" placeholder="New York" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label country-label" htmlFor="country">Country</label>
                                    {errors.country && <span className="error-text">{errors.country}</span>}
                                </div>
                                <input onChange={handleInput} className="inputs" type="text" required name="country" id="country" placeholder="United States" />
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
                                            {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
                                        </div>
                                        <input onChange={handleInput} className="inputs" type="text" required name="cardNumber" id="card-number" placeholder="238521993" />
                                    </div>
                                    <div className="form-inputs-e-money">
                                        <div className="label-and-error">
                                            <label className="form-label card-pin-label" htmlFor="cardPin">e-Money PIN</label>
                                            {errors.cardPin && <span className="error-text">{errors.cardPin}t</span>}
                                        </div>
                                        <input onChange={handleInput} className="inputs" type="text" required name="card-pin" id="card-pin" placeholder="6891" />
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
                    <input onClick={handleValidation} className="button-primary submit-btn" type="submit" value="CONTINUE & PAY" />
                </div>
            </section>

            {openModalConfirmation && <ConfirmationModal openModalConfirmation={openModalConfirmation} setOpenModalConfirmation={setOpenModalConfirmation} inCheckoutItems={inCheckoutItems} totalPrice={totalPrice} />}
        </div>
    )
}
