import React, { useContext } from 'react'
import { MyProductsData } from '../context/ProductsContext';

export default function CartItemCheckout({ productId, quantity }) {
    const data = useContext(MyProductsData);
    const productInCheckout = data.find((item) => item.id === Number(productId));

    return (
        <div className="cart-item">
            <div className="cart-product-img" style={{ backgroundImage: `url(${productInCheckout.image.mobile})` }}></div>
            <div className="cart-product-info">
                <div className="cart-product-name">
                    <p className="product-name">{productInCheckout.name}</p>
                    <p className="product-price">$ {productInCheckout.price}</p>
                </div>
                <span className="number-of-items">x{quantity}</span>
            </div>
        </div>
    )
}
