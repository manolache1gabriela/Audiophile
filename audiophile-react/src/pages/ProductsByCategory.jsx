import React from 'react'
import About from '../components/About'
import ProductOfType from '../components/ProductOfType'
import ProductCategories from '../components/ProductCategories'
// import { Link, useParams } from 'react-router-dom'

export default function ProductsByCategory() {
    // const params = useParams();
    return (
        <div>
            <section className="products-by-type">
                <ProductOfType />
            </section>
            <ProductCategories />
            <About />
        </div>
    )
}
