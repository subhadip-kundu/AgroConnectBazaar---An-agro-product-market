import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Shoping = () => {
    const categories = useSelector((state) => state.category.value);
    console.log("selectedCategory in Shoping:", categories);

    // Example data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            category: 'Rice',
            image: 'product1.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            category: 'Nuts',
            image: 'product2.jpg'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* {products
                .filter((pro) => pro.category === category)
                .map(product => (
                    <ProductCard key={product.id} item={product} />
                ))
            } */}
        </div>
    );
};

export default Shoping;
