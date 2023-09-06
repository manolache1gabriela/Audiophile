import React from 'react'
import ProductCategories from './ProductCategories'

export default function MenuModal({ setOpenModalMenu }) {

    return (
        <div className="modal-background">
            <div id="pages-links">
                <ProductCategories />
            </div>
        </div>
    )
}
