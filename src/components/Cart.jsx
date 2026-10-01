import CartItem from "./CartItem.jsx";

function Cart({ cartItems, cartCount, subtotal, onIncrease, onDecrease, onRemove, onNavigate }) {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="page-heading mb-5">
          <p className="eyebrow">Your order</p>
          <h1>Shopping cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-state text-center">
            <div className="empty-icon">♫</div>
            <h2 className="h3">Your cart is waiting for a little music.</h2>
            <p className="text-muted">Choose something fresh from the bakery and it will appear here.</p>
            <button className="btn btn-primary" onClick={() => onNavigate("shop")}>Browse the bakery</button>
          </div>
        ) : (
          <div className="row g-5 align-items-start">
            <div className="col-lg-8">
              <div className="cart-list">
                {cartItems.map((item) => <CartItem item={item} key={item.id} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />)}
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="summary-card">
                <h2 className="h4">Order summary</h2>
                <div className="d-flex justify-content-between mt-4"><span>Items</span><span>{cartCount}</span></div>
                <div className="d-flex justify-content-between border-top pt-3 mt-3"><strong>Subtotal</strong><strong>${subtotal.toFixed(2)}</strong></div>
                <p className="small text-muted mt-3">This is a class project storefront. Checkout and payment are not connected.</p>
                <button className="btn btn-primary w-100" onClick={() => onNavigate("account")}>Continue to account</button>
              </aside>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
