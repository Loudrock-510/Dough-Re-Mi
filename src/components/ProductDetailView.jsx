import { useState } from "react";

function ProductDetailView({ product, options, setOptions, onAddToCart, onBack }) {
  const [message, setMessage] = useState("");
  const displayPrice = product.salePrice ?? product.price;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/bakery-placeholder.svg";
  };

  const updateOption = (name, value) => {
    setOptions((current) => ({ ...current, [name]: value }));
  };

  const submitAddToCart = () => {
    if (!options.size || !options.flavor || options.quantity < 1) {
      setMessage("Please choose the required options and a valid quantity before adding this item.");
      return;
    }
    onAddToCart(product, options);
    setMessage("Added to your cart.");
  };

  return (
    <main className="section-padding">
      <div className="container">
        <button className="btn btn-link link-dark ps-0 mb-4" onClick={onBack}>← Back to shop</button>
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="detail-image-wrap">
              <img src={product.image} alt={product.name} onError={handleImageError} />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <div className="d-flex align-items-center gap-3 mb-3"><span className="rating">★ {product.rating}</span><span className="text-muted">{product.numberOfReviews} reviews</span></div>
            <div className="detail-price mb-4">${displayPrice.toFixed(2)} {product.salePrice && <span className="old-price">${product.price.toFixed(2)}</span>}</div>
            <p className="lead">{product.longDescription}</p>

            <div className="product-options border-top pt-4 mt-4">
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="product-size">Size <span className="text-danger">*</span></label>
                <select id="product-size" className="form-select" value={options.size} onChange={(event) => updateOption("size", event.target.value)}>
                  <option value="">Choose a size</option>
                  {product.sizes.map((size) => <option value={size} key={size}>{size}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="product-flavor">Flavor <span className="text-danger">*</span></label>
                <select id="product-flavor" className="form-select" value={options.flavor} onChange={(event) => updateOption("flavor", event.target.value)}>
                  <option value="">Choose a flavor</option>
                  {product.flavors.map((flavor) => <option value={flavor} key={flavor}>{flavor}</option>)}
                </select>
              </div>
              <div className="row g-3 align-items-end">
                <div className="col-sm-5">
                  <label className="form-label fw-semibold" htmlFor="product-quantity">Quantity</label>
                  <input id="product-quantity" className="form-control" type="number" min="1" max={product.quantityInStock} value={options.quantity} onChange={(event) => updateOption("quantity", Math.min(product.quantityInStock, Math.max(1, Number(event.target.value) || 1)))} />
                </div>
                <div className="col-sm-7"><button className="btn btn-primary w-100" onClick={submitAddToCart}>Add to cart</button></div>
              </div>
              <p className="small text-muted mt-3 mb-0">{product.quantityInStock} available today. {product.dietary}.</p>
              {message && <div className={`alert mt-4 mb-0 ${message.startsWith("Added") ? "alert-success" : "alert-warning"}`} role="status">{message}</div>}
            </div>

            <div className="product-information border-top pt-4 mt-5">
              <div className="row g-4">
                <div className="col-md-6">
                  <h2 className="h4">Ingredients</h2>
                  <ul className="ingredient-list">
                    {product.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                  </ul>
                  <p className="small text-muted mb-0">Please contact the bakery about allergies. Ingredients may be prepared in a kitchen that handles nuts, dairy, eggs, and wheat.</p>
                </div>
                <div className="col-md-6">
                  <h2 className="h4">Nutrition</h2>
                  <p className="small text-muted">Approximate values per {product.macros.serving}.</p>
                  <div className="macro-list">
                    <div><span>Calories</span><strong>{product.macros.calories}</strong></div>
                    <div><span>Protein</span><strong>{product.macros.protein}</strong></div>
                    <div><span>Carbohydrates</span><strong>{product.macros.carbohydrates}</strong></div>
                    <div><span>Fat</span><strong>{product.macros.fat}</strong></div>
                    <div><span>Sugar</span><strong>{product.macros.sugar}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailView;
