import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

export default function CartModal({ setOpenModalCart }) {

    const cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
    let [cartItems, setCartItems] = useState([])
    let [totalPrice, setTotalPrice] = useState(0);
    const calculateTotal = () => {
        const newCart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        let values = Object.values(newCart);
        setTotalPrice(values.reduce((acc, item) => acc + item.price, 50))
    }

    useEffect(() => {
        calculateTotal();
        refreshCartItems(cart);
    }, [setOpenModalCart])

    function refreshCartItems(cart) {
        let newCartItems = []
        for (const [productId, { quantity }] of Object.entries(cart)) {
            newCartItems.unshift(<CartItem quantity={quantity} productId={productId} key={productId} calculateTotal={calculateTotal} removeItem={removeItem} />)
        }
        setCartItems(newCartItems)
    }

    function removeAll() {
        localStorage.removeItem('cart');
        setCartItems([])
        calculateTotal()
    }

    function removeItem() {
        const cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        refreshCartItems(cart);
        calculateTotal();
    }

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
                    <span className="items-number">cart ({cartItems.length})</span>
                    {cartItems.length > 0 && <span className="remove" onClick={removeAll}>Remove all</span>}
                </section>
                {
                    cartItems.length > 0 &&
                    <div className='cart-summary-total'>
                        <section className="cart-summary ">
                            {cartItems}
                        </section>
                        <section className="total ">
                            <span className="total-text">TOTAL</span>
                            <span className="total-amount">$ {totalPrice}</span>
                        </section>
                    </div>
                }

                {cartItems.length === 0 && <span className="no-items">No items in cart</span>}

                <a href="/checkout">
                    <div className="button-primary">
                        <p className="sub-title">checkout</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
