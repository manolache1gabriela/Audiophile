import React, { useEffect, useState } from 'react'

export default function QuantityButton({ quantity, isPersistent, productId, innerRef, price, calculateTotal, removeItem }) {
    let [itemQuantity, setItemQuantity] = useState(quantity);

    useEffect(() => {
        if (innerRef === undefined) {
            return
        }
        innerRef.current = itemQuantity;
    }, [itemQuantity, innerRef]);

    function modifyQuantity(newQuantity) {
        setItemQuantity(newQuantity);
        if (isPersistent) {
            saveToLocalStorage(productId, newQuantity);
        }

        if (calculateTotal !== undefined) {
            calculateTotal()
        }
    }
    function deleteItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function subtract() {
        const newQuantity = itemQuantity - 1;
        if (itemQuantity === 0) {
            if (isPersistent) {
                deleteItem(productId);
                removeItem();
            }
            return
        }
        modifyQuantity(newQuantity);
    }

    function add() {
        const newQuantity = itemQuantity + 1;
        modifyQuantity(newQuantity);
    }

    function saveToLocalStorage(productId, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        cart[productId] = { quantity: quantity, price: (price * quantity) };
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="quantity">
            <span onClick={subtract} className="subtract">-</span>
            <span className="amount">{itemQuantity}</span>
            <span onClick={add} className="add">+</span>
        </div>
    )
}
