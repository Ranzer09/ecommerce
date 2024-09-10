import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Casual Dress', category: 'casual', price: 149, image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Formal Dress', category: 'formal', price: 348, image: 'https://images.pexels.com/photos/17782709/pexels-photo-17782709/free-photo-of-a-woman-in-a-white-shirt-and-black-pinstripe-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Sport Dress', category: 'sport', price: 497, image: 'https://images.pexels.com/photos/27328542/pexels-photo-27328542/free-photo-of-a-man-wearing-a-jersey-with-the-number-8-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Gown', category: 'casual', price: 2300, image: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Suit', category: 'formal', price: 4500, image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, name: 'Basket Ball', category: 'sport', price: 1800, image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const App = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  const filteredProducts = products
    .filter((product) => {
      const Category = filters.category ? product.category === filters.category : true;
      const Price = filters.price
        ? filters.price === 'low'
          ? product.price > 0 && product.price <=500
          : product.price > 500
        : true;
      return Category && Price;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex">
      
      <ProductList products={filteredProducts} />
      <Sidebar
        filters={filters}
        sort={sort}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default App;
