import React from 'react';
import { NavLink } from 'react-router-dom'

export default function ProductOfType({ product }) {

    return (
        <div className="product-of-type">
            <div className="product-image" style={{ backgroundImage: `url(${product.categoryImage.mobile})` }}></div>
            <div className="product-info">
                {product.new && <p className="overline">NEW PRODUCT</p>}
                <h2 className="product-title">
                    {product.name}
                </h2>
                <p className="info-paragraph">{product.description}</p>
                <NavLink to={`/product/${product.slug}`}>
                    <div className="button-primary">
                        <p className="sub-title">See Product</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
