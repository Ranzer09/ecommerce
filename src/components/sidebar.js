import React from 'react';

const Sidebar = ({onFilterChange, onSortChange }) => {
  return (
    <div className=" w-32 lg:w-64 mt-4 p-4 bg-gray-200 h-fit rounded-lg">
      <h2 className="text-sm lg:text-xl font-semibold mb-4 text-center">Filters</h2>
      <div>
        <h3 className="text-sm lg:text-lg font-medium">Category</h3>
        <select
          onChange={(e) => onFilterChange({ category: e.target.value })}
          className=" text-sm lg:text-lg w-3/4 lg:w-full mt-2 p-2 border rounded"
        >
          <option value="">All</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="sport">Sport</option>
        </select>
      </div>
      <div className="mt-4 ">
        <h3 className="text-sm lg:text-lg font-medium">Price</h3>
        <select
          onChange={(e) => onFilterChange({ price: e.target.value })}
          className=" text-sm lg:text-lg w-3/4 lg:w-full mt-2 p-2 border rounded"
        >
          <option value="">All</option>
          <option value="low">0 - 500</option>
          <option value="high"> >500  </option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="text-sm lg:text-lg font-medium">Sort By</h3>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className=" text-sm lg:text-lg w-3/4 lg:w-full mt-2 p-2 border rounded"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
