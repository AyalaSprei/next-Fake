import "./ProducrList.css"; // Import the CSS file

const ProductList = ({ products }) => {
  const category = products.length > 0 ? products[0].category : "";

  return (
    <div>
      <h1>{category}</h1>{" "}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <h2 className="product-title">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="product-description">
              <strong>Description:</strong> {product.description}
            </p>
            <p className="product-price">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="product-rating">
              <strong>Rating:</strong> {product.rating.rate} (
              {product.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
