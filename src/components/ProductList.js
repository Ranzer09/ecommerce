import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 border rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-sm lg:text-lg font-semibold">{product.name}</h3>
            <p className="text-sm lg:text-lg text-gray-800">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
