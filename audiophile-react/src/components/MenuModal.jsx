import React from 'react'
import ProductCategories from './ProductCategories'

export default function MenuModal({ setOpenModalMenu }) {

    return (
        <div className="modal-background">
            <div id="pages-links">
                {/* <div className="closing-modal">
                    <button onClick={() => {
                        setOpenModalMenu(false);
                        const body = document.querySelector('body');
                        body.classList.remove('body-overflow');
                    }}
                        className='button-close'><img src="/assets/shared/desktop/xmark-solid.svg" alt="closing button" /></button>
                </div> */}
                <ProductCategories />
            </div>
        </div>
    )
}
