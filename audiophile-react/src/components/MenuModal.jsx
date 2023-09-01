import React from 'react'

export default function MenuModal() {
    return (
        <dialog id="pages-links">
            <section className="products-section">
                <div className="products">
                    <a href="#">
                        <div className="headphones-products">
                            <img src="../images/home-page-images/image-category-thumbnail-headphones.png" alt="headphones image" />
                            <div className="gray-div">
                                <h6 className="prod-type">HEADPHONES</h6>
                                <div className="button-outline">
                                    <p className="sub-title">Shop</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="speakers-products">
                            <img src="../images/home-page-images/image-category-thumbnail-speakers.png" alt="speakers image" />
                            <div className="gray-div">
                                <h6 className="prod-type">SPEAKERS</h6>
                                <div className="button-outline">
                                    <p className="sub-title">Shop</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="earphones-products">
                            <img src="../images/home-page-images/image-category-thumbnail-earphones.png" alt="earphones image" />
                            <div className="gray-div">
                                <h6 className="prod-type">EARPHONES</h6>
                                <div className="button-outline">
                                    <p className="sub-title">Shop</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </dialog>
    )
}
