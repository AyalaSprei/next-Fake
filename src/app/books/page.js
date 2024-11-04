"use client"
import { useState, useEffect } from "react";
import ProductList from '../copmponents/ProductList';

function Books() {
  const [BooksProducts, setBooksProducts] = useState([]);
   
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setBooksProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); 

  return (
    <div>
       <ProductList products={BooksProducts} />;
    </div>
  );

}

export default Books;
