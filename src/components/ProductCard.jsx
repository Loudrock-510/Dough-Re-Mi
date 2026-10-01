function ProductCard({ product, onSelect }) {
  const displayPrice = product.salePrice ?? product.price;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/bakery-placeholder.svg";
  };

  return (
    <article className="card product-card h-100" onClick={() => onSelect(product)} onKeyDown={(event) => event.key === "Enter" && onSelect(product)} tabIndex="0" role="button">
      <div className="product-image-wrap">
        <img src={product.image} className="card-img-top product-image" alt={product.name} onError={handleImageError} />
        {product.newArrival && <span className="product-label">New</span>}
        {product.salePrice && <span className="product-label sale-label">Sale</span>}
      </div>
      <div className="card-body d-flex flex-column">
        <p className="product-category mb-1">{product.category}</p>
        <h3 className="h5 card-title">{product.name}</h3>
        <p className="card-text text-muted flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-end gap-2 mt-3">
          <div>
            <span className="price">${displayPrice.toFixed(2)}</span>
            {product.salePrice && <span className="old-price ms-2">${product.price.toFixed(2)}</span>}
          </div>
          <span className="rating" aria-label={`${product.rating} out of 5 stars`}>★ {product.rating}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
