import React from 'react'
import About from '../components/About'
// import Footer from '../components/Footer'
import ProductCategories from '../components/ProductCategories'

export default function Home() {
    return (
        <div>
            <section className="home">
                <div className="darken"></div>
                <div className="new-product">
                    <p className="overline">NEW PRODUCT</p>
                    <h1 className="product-title">XX99 Mark II HeadphoneS</h1>
                    <p className="paragraph">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <a href="/product/id">
                        <div className="button-primary">
                            <p className="sub-title">See Product</p>
                        </div>
                    </a>
                </div>
            </section>
            <ProductCategories />
            <section className="best-products-section">
                <div className="best-products">
                    <div className="special-product-card">
                        <div className="special-product-card-images">
                            <img src="/assets/shared/desktop/pattern-circles.svg"
                                className="circles"
                                alt="Circles" />
                            <img src="/assets/home/desktop/image-speaker-zx9.png" className="speaker-img" alt="ZX9 Speaker" />
                        </div>
                        <div className="special-product-card-info">
                            <h1 className="product-title">ZX9 SPEAKER</h1>
                            <p className="paragraph">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <a href="/product/id">
                                <div className="button-special-product">
                                    <p className="sub-title">See Product</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="normal-product-card">
                        <div className="normal-product-card-info">
                            <h1 className="product-title">ZX7 SPEAKER</h1>
                            <a href="/product/id">
                                <div className="button-secondary">
                                    <p className="sub-title">See Product</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="product-card-split">
                        <div className="earphones-image"></div>
                        <div className="product-card-split-info">
                            <h1 className="product-title">YX1 EARPHONES</h1>
                            <a href="/product/id">
                                <div className="button-secondary">
                                    <p className="sub-title">See Product</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </div>
    )
}
