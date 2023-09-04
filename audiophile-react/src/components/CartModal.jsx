import React from 'react'

export default function CartModal({ setOpenModalCart }) {
    return (
        <div id="cart-modal"
            onMouseEnter={() => {
                setOpenModalCart(true)
            }}
            onMouseLeave={() => {
                setOpenModalCart(false)
            }}
        >
            <div className="cart-modal-view">
                <section className="items-number-remove">
                    <span className="items-number">cart (3)</span>
                    <span className="remove">Remove all</span>
                </section>
                <section className="cart-summary ">
                    <div className="cart-item">
                        <div className="cart-product-img"></div>
                        <div className="cart-product-info">
                            <div className="cart-product-name">
                                <p className="product-name">XX99 MK II</p>
                                <p className="product-price">$ 2,999</p>
                            </div>
                            <div className="quantity">
                                <span className="subtract">-</span>
                                <span className="amount">1</span>
                                <span className="add">+</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="total ">
                    <span className="total-text">TOTAL</span>
                    <span className="total-amount">$ 5,396</span>
                </section>
                <span className="no-items">No items in cart</span>
                <a href="/checkout">
                    <div className="button-primary">
                        <p className="sub-title">checkout</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
