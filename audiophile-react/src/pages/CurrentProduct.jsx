import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCategories from '../components/ProductCategories';
import About from '../components/About';
import OtherProduct from '../components/OtherProduct';
import BackButton from '../components/BackButton';
import { MyProductsData } from '../context/ProductsContext';
import QuantityButton from '../components/QuantityButton';
import FavoriteButton from '../components/FavoriteButton';

export default function CurrentProduct() {
    const params = useParams();
    const data = useContext(MyProductsData);
    const productChosen = data.filter((item) => { return item.slug === params.id })
    const quantityButton = useRef(null);

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

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleIsFavorite = event => {
        setIsFavorite(current => !current);
        if (!isFavorite) {
            addToFavorite();
        } else {
            removeFromFavorite(productChosen[0].id);
        }
    };

    function removeFromFavorite(productId) {
        let favorite = JSON.parse(localStorage.getItem('favorite') ?? '{}');
        delete favorite[productId];
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        let prevVal = cart[productChosen[0].id] === undefined ? 0 : cart[productChosen[0].id].quantity;
        let quantity = quantityButton.current + prevVal;
        cart[productChosen[0].id] = { quantity: quantity, price: (productChosen[0].price * quantity) };
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addToFavorite = () => {
        let favorite = JSON.parse(localStorage.getItem('favorite') ?? '{}');
        favorite[productChosen[0].id] = { name: productChosen[0].name, price: productChosen[0].price }
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }



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
                            <FavoriteButton addToFavorite={addToFavorite} isFavorite={isFavorite} toggleIsFavorite={toggleIsFavorite} />
                        </div>
                        <div className="cart-adding">
                            <QuantityButton isPersistent={false} quantity={1} innerRef={quantityButton} />
                            <div className="button-primary" onClick={addToCart}>
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
