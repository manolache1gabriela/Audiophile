import React from 'react'
import ProductCategoryLink from './ProductCategoryLink'

export default function ProductCategories() {
    const categoriesArr = [];
    const categories = [
        { link: '/category/headphones', imageSrc: '/assets/shared/desktop/image-category-thumbnail-headphones.png', imgAlt: 'category headphones', title: 'HEADPHONES' },
        { link: '/category/speakers', imageSrc: '/assets/shared/desktop/image-category-thumbnail-speakers.png', imgAlt: 'category speakers', title: 'SPEAKERS' },
        { link: '/category/earphones', imageSrc: '/assets/shared/desktop/image-category-thumbnail-earphones.png', imgAlt: 'category earphones', title: 'EARPHONES' },
    ]
    for (let i = 0; i < categories.length; i++) {
        categoriesArr.push(<ProductCategoryLink category={categories[i]} key={i} />)
    }

    return (
        <section className="products-section">
            <div className="products">
                {categoriesArr}
            </div>
        </section>
    )
}
