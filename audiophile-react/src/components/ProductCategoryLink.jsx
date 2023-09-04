import React from 'react'

export default function ProductCategoryLink({ category }) {
    return (
        <a href={category.link} className="category-link">
            <div className="gray-div">
                <div className="prod-category-img">
                    <img src={category.imageSrc} alt={category.imageAlt} />
                </div>
                <div className="product-category-title">
                    <h6 className="prod-type">{category.title}</h6>
                    <div className="button-outline">
                        <p className="sub-title">Shop</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    )
}
