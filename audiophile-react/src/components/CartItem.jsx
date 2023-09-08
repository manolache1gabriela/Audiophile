import React, { useContext } from 'react'
import QuantityButton from './QuantityButton'
import { MyProductsData } from '../context/ProductsContext';

export default function CartItem({ quantity, productId, calculateTotal, removeItem }) {
    const data = useContext(MyProductsData);
    const productInCart = data.find((item) => item.id === Number(productId));
    return (
        <div className="cart-item">
            <div className="cart-product-img" style={{ backgroundImage: `url(${productInCart.image.mobile})` }}></div>
            <div className="cart-product-info">
                <div className="cart-product-name">
                    <p className="product-name">{productInCart.name}</p>
                    <p className="product-price">$ {productInCart.price}</p>
                </div>
                <div className="quantity">
                    <QuantityButton isPersistent={true} quantity={quantity} productId={productId} price={productInCart.price} calculateTotal={calculateTotal} removeItem={removeItem} />
                </div>
            </div>
        </div>
    )
}
