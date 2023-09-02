import React, { useEffect } from 'react'

export default function FavoriteModal() {

    useEffect(() => {
        document.getElementById('favorite-modal').showModal();
    }, [])

    return (
        <dialog id="favorite-modal">
            <div className="favorite-modal-view">
                <section className="items-number-remove">
                    <span className="items-number">favorite (3)</span>
                    <span className="remove">Remove all</span>
                </section>
                <section className="favorite-summary">
                    <div className="cart-item">
                        <div className="cart-product-img"></div>
                        <div className="favorite-product-info">
                            <div className="cart-product-name">
                                <p className="product-name">XX99 MK II</p>
                                <p className="product-price">$ 2,999</p>
                            </div>
                            <div className="trash">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" width="2rem" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg>
                            </div>
                        </div>
                    </div>
                </section>
                <span className="no-items">No items in favorites</span>
            </div>
        </dialog>
    )
}
