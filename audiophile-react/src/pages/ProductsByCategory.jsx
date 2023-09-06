import React, { useContext } from 'react'
import About from '../components/About'
import ProductOfType from '../components/ProductOfType'
import ProductCategories from '../components/ProductCategories'
import { MyProductsData } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'

export default function ProductsByCategory() {
    const params = useParams();
    const data = useContext(MyProductsData);
    const productsByCategory = [];
    const produce = data.filter((product) => product.category === params.id);
    for (let i = 0; i < produce.length; i++) {
        productsByCategory.unshift(<ProductOfType product={produce[i]} key={i} />)
    }
    const categoryName = params.id;

    return (
        <div>
            <div className="category-name">
                <h2 className="category-name-tag">{categoryName.toUpperCase()}</h2>
            </div>
            <section className="products-by-type">
                {productsByCategory}
            </section>
            <ProductCategories />
            <About />
        </div>
    )
}
