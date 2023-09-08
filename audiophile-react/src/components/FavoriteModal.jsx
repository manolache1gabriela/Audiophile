import React, { useEffect, useState } from 'react'
import FavoriteItem from './FavoriteItem';

export default function FavoriteModal({ setOpenModalFavorite }) {
    const favorite = JSON.parse(localStorage.getItem('favorite') ?? '{}');
    let [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        refreshFavoriteItems(favorite);
    }, [setOpenModalFavorite])


    function refreshFavoriteItems(favorite) {
        let newFavoriteItems = []
        for (const [productId, { name }] of Object.entries(favorite)) {
            newFavoriteItems.unshift(<FavoriteItem productId={productId} key={productId} removeItem={removeItem} refreshFavoriteItems={refreshFavoriteItems} />)
        }
        setFavoriteItems(newFavoriteItems)
    }

    function removeAll() {
        localStorage.removeItem('favorite');
        setFavoriteItems([])
    }

    function removeItem() {
        const favorite = JSON.parse(localStorage.getItem('favorite') ?? '{}');
        refreshFavoriteItems(favorite);
    }

    return (
        <div id="favorite-modal"
            onMouseEnter={() =>
                setOpenModalFavorite(true)
            }
            onMouseLeave={() => {
                setOpenModalFavorite(false)
            }}>
            <div className="favorite-modal-view">
                <section className="items-number-remove">
                    <span className="items-number">favorite ({favoriteItems.length})</span>
                    {favoriteItems.length > 0 && <span onClick={removeAll} className="remove">Remove all</span>}
                </section>
                {favoriteItems.length > 0 && <section className="favorite-summary">
                    {favoriteItems}
                </section>}
                {favoriteItems.length === 0 && <span onClick={removeAll} className="no-items">No items in favorites</span>}
            </div>
        </div>
    )
}
