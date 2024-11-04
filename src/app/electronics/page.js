"use client"
import ProductList from "../copmponents/ProductList";
import { useEffect, useState } from "react";

export default function ElectronicsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return <ProductList products={products} />;
}