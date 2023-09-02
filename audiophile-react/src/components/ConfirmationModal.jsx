import React from 'react'

export default function ConfirmationModal() {
    return (
        <dialog id="thanks-modal">
            <div className="dialog-visual">
                <section className="confirmation">
                    <img src="/assets/checkout/icon-order-confirmation.svg" alt="confirmation icon" />
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
    )
}
