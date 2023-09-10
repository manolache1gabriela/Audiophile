import React, { useEffect, useRef, useState } from 'react'

export default function ConfirmationModal({ totalPrice, inCheckoutItems, key }) {
    const [viewOthers, setViewOthers] = useState(false);

    let modal = useRef(null);
    useEffect(() => {
        modal.current?.scrollIntoView()
    }, [modal]);

    const otherItemsBought = inCheckoutItems.slice(1, inCheckoutItems.length);


    return (
        <div className="modal-background on-confirmation-modal" ref={modal}>
            <div id="thanks-modal">
                <div className="dialog-visual">
                    <section className="confirmation">
                        <img src="/assets/checkout/icon-order-confirmation.svg" alt="confirmation icon" />
                        <h3 className="confirm-title">THANK YOU <br /> FOR YOUR ORDER</h3>
                        <p className="confirm-text">You will receive an email confirmation shortly.</p>
                    </section>
                    <section className="confirm-summary">
                        <div className="summary">
                            <div className="cart-items">
                                {inCheckoutItems[0]}
                                {viewOthers && <div>
                                    {otherItemsBought}
                                </div>}
                                <div className="others-from-cart">
                                    {!viewOthers && <button onClick={() => setViewOthers(true)} className="view-others">
                                        <span className="view-text">and {otherItemsBought.length} other item(s)</span>
                                    </button>}
                                    {viewOthers && <button onClick={() => setViewOthers(false)} className="view-others">
                                        <span className="view-text">View less</span>
                                    </button>}
                                </div>
                            </div>
                            <div className="grand-total">
                                <span className="grand-title">GRAND TOTAL</span>
                                <span className="grand-amount">$ {totalPrice}</span>
                            </div>
                        </div>
                    </section>
                    <a className='back-to-home-button' href='/' >
                        <div className="button-primary">
                            <p className="sub-title">BACK TO HOME</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
