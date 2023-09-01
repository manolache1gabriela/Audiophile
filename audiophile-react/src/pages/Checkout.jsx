import React from 'react'

export default function Checkout() {
    return (
        <div>
            <a href="#">
                <p className="back from-checkout">Go Back</p>
            </a>
            <section className="checkout-summary">
                <div className="checkout">
                    <h3 className="checkout-title">CHECKOUT</h3>
                    <div className="billing details">
                        <p className="subtitle-checkout">Billing details</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="name" id="name" placeholder="Alexei Ward" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="email" required name="email" id="email" placeholder="alexei@mail.com" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="tel" required name="phone" id="phone" placeholder="+1 202-555-0136" />
                            </div>
                        </form>
                    </div>
                    <div className="shipping details">
                        <p className="subtitle-checkout">shipping info</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input address">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="address">Your Address</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="address" id="address" placeholder="1137 Williams Avenue" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="zip-code">ZIP Code</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="zip-code" id="zip-code" placeholder="10001" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="city">City</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="city" id="city" placeholder="New York" />
                            </div>
                            <div className="form-input">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="country" id="country" placeholder="United States" />
                            </div>
                        </form>
                    </div>
                    <div className="payment details">
                        <p className="subtitle-checkout">payment details</p>
                        <form action="#" method="post" className="check-form">
                            <div className="form-input payment-form">
                                <label className="form-label" htmlFor="payment">Payment Method</label>
                                <div className="payment-methods">
                                    <div className="card-method">
                                        <label className="form-label" htmlFor="e-money">
                                            <input className="inputs input-method" type="radio" name="payment" id="e-money" defaultChecked />
                                            <span className="radio-text">e-Money</span>
                                        </label>
                                    </div>
                                    <div className="cash-method">
                                        <label className="form-label" htmlFor="cash">
                                            <input className="inputs input-method" type="radio" name="payment" id="cash" />
                                            <span className="radio-text">Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-inputs-e-money">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="card-number">e-Money Number</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="card-number" id="card-number" placeholder="238521993" />
                            </div>
                            <div className="form-inputs-e-money">
                                <div className="label-and-error">
                                    <label className="form-label" htmlFor="card-pin">e-Money PIN</label>
                                    <span className="error-text">Wrong format</span>
                                </div>
                                <input className="inputs" type="text" required name="card-pin" id="card-pin" placeholder="6891" />
                            </div>
                            <div className="cash-on-delivery-information cash-chose">
                                <img src="../images/home-page-images/icon-cash-on-delivery.svg" alt="cash on delivery icon" />
                                <p className="cash-on-delivery-info">
                                    The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="summary">
                    <h6 className="product-price">summary</h6>
                    <div className="cart-summary">
                        <div className="cart-item">
                            <div className="cart-product-img"></div>
                            <div className="cart-product-info">
                                <div className="cart-product-name">
                                    <p className="product-name">XX99 MK II</p>
                                    <p className="product-price">$ 2,999</p>
                                </div>
                                <span className="number-of-items">x1</span>
                            </div>
                        </div>
                    </div>
                    <div className="paying-summary">
                        <ul className="payment-parts">
                            <li className="payment-part">
                                <p className="part-name">TOTAL</p>
                                <span className="part-amount">$ 5,396</span>
                            </li>
                            <li className="payment-part">
                                <p className="part-name">SHIPPING</p>
                                <span className="part-amount">$ 50</span>
                            </li>
                            <li className="payment-part">
                                <p className="part-name">VAT (INCLUDED)</p>
                                <span className="part-amount">$ 1,079</span>
                            </li>
                        </ul>
                        <ul className="payment-total">
                            <li className="total-sum">
                                <p className="total-sum-name">GRAND TOTAL</p>
                                <span className="total-amount">$ 5,446</span>
                            </li>
                        </ul>
                    </div>
                    <input className="button-primary submit-btn" type="submit" value="CONTINUE & PAY" />
                </div>
            </section>
            <dialog id="thanks-modal">
                <div className="dialog-visual">
                    <section className="confirmation">
                        <img src="../images/home-page-images/icon-order-confirmation.svg" alt="confirmation icon" />
                        <h3 className="confirm-title">THANK YOU <br /> FOR YOUR ORDER</h3>
                        <p className="confirm-text">You will receive an email confirmation shortly.</p>
                    </section>
                    <section className="confirm-summary">
                        <div className="summary">
                            <div className="cart-items">
                                <div className="cart-item">
                                    <div className="cart-product-img"></div>
                                    <div className="cart-product-info">
                                        <div className="cart-product-name">
                                            <p className="product-name">XX99 MK II</p>
                                            <p className="product-price">$ 2,999</p>
                                        </div>
                                        <span className="number-of-items">x1</span>
                                    </div>
                                </div>
                                <div className="others-from-cart">
                                    <button className="view-others">
                                        <span className="view-text">and 2 other item(s)</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grand-total">
                                <span className="grand-title">GRAND TOTAL</span>
                                <span className="grand-amount">$ 5,446</span>
                            </div>
                        </div>
                    </section>
                    <div className="button-primary">
                        <p className="sub-title">BACK TO HOME</p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
