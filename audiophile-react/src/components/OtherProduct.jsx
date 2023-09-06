import React from 'react'

export default function OtherProduct({ others }) {

    return (
        <div className="other-product">
            <div className="other-product-image" style={{ backgroundImage: `url(${others.image.mobile})` }}></div>
            <div className="other-name-btn">
                <h3 className="other-product-title">{others.name}</h3>
                <a href={`/product/${others.slug}`}>
                    <div className="button-primary">
                        <p className="sub-title">See Product</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
