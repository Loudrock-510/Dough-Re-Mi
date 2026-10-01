function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/bakery-placeholder.svg";
  };

  return (
    <div className="cart-item d-flex flex-wrap gap-3 align-items-center">
      <img className="cart-item-image" src={item.image} alt={item.productName} onError={handleImageError} />
      <div className="flex-grow-1">
        <h2 className="h5 mb-1">{item.productName}</h2>
        <p className="small text-muted mb-1">{item.size} · {item.flavor}{item.message && ` · Message: ${item.message}`}</p>
        <p className="small mb-0">${item.unitPrice.toFixed(2)} each</p>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.productName}`}>
        <button onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.productName} quantity`}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} aria-label={`Increase ${item.productName} quantity`}>+</button>
      </div>
      <div className="cart-line-total text-end"><strong>${(item.unitPrice * item.quantity).toFixed(2)}</strong><button className="btn btn-link btn-sm d-block ms-auto text-danger px-0" onClick={() => onRemove(item.id)}>Remove</button></div>
    </div>
  );
}

export default CartItem;
