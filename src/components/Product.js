import React from 'react';
function Product({ product }) {
    return (
        <div className = "max-w-sm rounded over flow-hidden shadow-lg m-2">
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">
                {product.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>
        </div>
    </div>
    );
}

export default Product;