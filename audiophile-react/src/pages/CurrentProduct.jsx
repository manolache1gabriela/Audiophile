import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCategories from '../components/ProductCategories';
import About from '../components/About';
import OtherProduct from '../components/OtherProduct';
import BackButton from '../components/BackButton';
import { MyProductsData } from '../context/ProductsContext';
import QuantityButton from '../components/QuantityButton';

export default function CurrentProduct() {
    const params = useParams();
    const data = useContext(MyProductsData);
    const productChosen = data.filter((item) => { return item.slug === params.id })

    const include = productChosen[0].includes;
    let itemsIncluded = [];
    for (let i = 0; i < include.length; i++) {
        itemsIncluded.push(<li key={i} className="box-items"><span className="number-of-items">{include[i].quantity}x</span><p className="item">{include[i].item}</p></li>);
    }

    const others = productChosen[0].others;
    let other = [];
    for (let i = 0; i < others.length; i++) {

        other.push(<OtherProduct key={i} others={others[i]} />)
    }



    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };

    const [itemQuantity, setItemQuantity] = useState(1);

    return (
        <div>
            <div className="back-button-section-product">
                <BackButton />
            </div>
            <section className="chosen-product">
                <div className="product-chosen">
                    <div className="product-image" style={{ backgroundImage: `url(${productChosen[0].image.mobile})` }}></div>
                    <div className="product-info">
                        {productChosen[0].new && <p className="overline">NEW PRODUCT</p>}
                        <h2 className="product-title">{productChosen[0].name}</h2>
                        <p className="info-paragraph">{productChosen[0].description}</p>
                    </div>
                    <div className="price-cart-adding">
                        <div className="price-favorite">
                            <h6 className="product-price">$ {productChosen[0].price}</h6>
                            <div className="favorite-svg">
                                <svg className={isActive ? 'favorite-added' : ''} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="1.25em" width="2rem" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                            </div>
                        </div>
                        <div className="cart-adding">
                            <QuantityButton itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
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
                    <p className="features-paragraph">{productChosen[0].features}</p>
                </div>
                <div className="box-content">
                    <h3 className="features-content-title">in the box</h3>
                    <ul className="items-list">
                        {itemsIncluded}
                    </ul>
                </div>
            </section>
            <section className="images-cards">
                <div className="cards">
                    <div className="cards-split">
                        <div className="image-card-split first" style={{ backgroundImage: `url(${productChosen[0].gallery.first.mobile})` }}></div>
                        <div className="image-card-split second" style={{ backgroundImage: `url(${productChosen[0].gallery.second.mobile})` }}></div>
                    </div>
                    <div className="card-singular" style={{ backgroundImage: `url(${productChosen[0].gallery.third.mobile})` }}></div>
                </div>
            </section>
            <section className="other-products">
                <div className="also-want">
                    <h3 className="also-like-title">you may also like</h3>
                    <div className="other-products-list">
                        {other}
                    </div>
                </div>
            </section>
            <ProductCategories />
            <About />
        </div>
    )
}
