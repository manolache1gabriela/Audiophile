import React from 'react'
// import { useParams } from 'react-router-dom';
import ProductCategories from '../components/ProductCategories';
import About from '../components/About';
import OtherProduct from '../components/OtherProduct';
import BackButton from '../components/BackButton';
// let data = data.filter((item) => item.category===params.id)
export default function CurrentProduct() {
    // const params = useParams();
    return (
        <div>
            <div className="back-button-section-product">
                <BackButton />
            </div>
            <section className="chosen-product">
                <div className="product-chosen">
                    <div className="product-image"></div>
                    <div className="product-info">
                        <p className="overline">NEW PRODUCT</p>
                        <h2 className="product-title">XX99 Mark II
                            Headphones</h2>
                        <p className="info-paragraph">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                    <div className="price-cart-adding">
                        <div className="price-favorite">
                            <h6 className="product-price">$ 2,999</h6>
                            <div className="favorite-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" width="2rem" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                            </div>
                        </div>
                        <div className="cart-adding">
                            <div className="quantity">
                                <span className="subtract">-</span>
                                <span className="amount">1</span>
                                <span className="add">+</span>
                            </div>
                            <div className="button-primary">
                                <p className="sub-title">ADD TO CART</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-content">
                <div className="features">
                    <h3 className="features-content-title">FEATURES</h3>
                    <p className="features-paragraph">
                        Featuring a genuine leather head strap and premium ear cups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.
                        <br />
                        <br />
                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>
                <div className="box-content">
                    <h3 className="features-content-title">in the box</h3>
                    <ul className="items-list">
                        <li className="box-items"><span className="number-of-items">1x</span><p className="item">Headphone Unit</p></li>
                        <li className="box-items"><span className="number-of-items">2x</span><p className="item">Replacement Ear Cups</p></li>
                        <li className="box-items"><span className="number-of-items">1x</span><p className="item">User Manual</p></li>
                        <li className="box-items"><span className="number-of-items">1x</span><p className="item">3.5mm 5m Audio Cable</p></li>
                        <li className="box-items"><span className="number-of-items">1x</span><p className="item">Travel Bag</p></li>
                    </ul>
                </div>
            </section>
            <section className="images-cards">
                <div className="cards">
                    <div className="cards-split">
                        <div className="image-card-split first"></div>
                        <div className="image-card-split second"></div>
                    </div>
                    <div className="card-singular"></div>
                </div>
            </section>
            <section className="other-products">
                <div className="also-want">
                    <h3 className="also-like-title">you may also like</h3>
                    <div className="other-products-list">
                        <OtherProduct />
                    </div>
                </div>
            </section>
            <ProductCategories />
            <About />
        </div>
    )
}
