import React, { useState } from 'react'

export default function QuantityButton({ itemQuantity, setItemQuantity }) {


    function subtract() {
        if (itemQuantity === 1) {
            return
        }
        setItemQuantity(prevQuantity => prevQuantity - 1);
    }
    function add() {
        setItemQuantity(prevQuantity => prevQuantity + 1);
    }

    return (
        <div className="quantity">
            <span onClick={subtract} className="subtract">-</span>
            <span className="amount">{itemQuantity}</span>
            <span onClick={add} className="add">+</span>
        </div>
    )
}
