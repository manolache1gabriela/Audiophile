import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductCategoryLink() {
    return (
        <NavLink to='/category/headphones' className="category-link">
            <div className="gray-div">
                <div className="prod-category-img">
                    <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category headphones" />
                </div>
                <div className="product-category-title">
                    <h6 className="prod-type">HEADPHONES</h6>
                    <div className="button-outline">
                        <p className="sub-title">Shop</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
