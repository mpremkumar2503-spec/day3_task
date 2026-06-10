import React, { useState } from "react";

function ProductSearch() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 800 },
    { id: 5, name: "Mouse", price: 500 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product Search System</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
            >
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          ))
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;