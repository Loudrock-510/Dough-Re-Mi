import ProductList from "./ProductList.jsx";

function ShopView({ products, onSelect }) {
  return (
    <main className="section-padding">
      <div className="container">
        <div className="page-heading mb-5">
          <p className="eyebrow">The Dough Re Mi menu</p>
          <h1>Find something sweet</h1>
          <p className="lead text-muted">Browse cakes, pastries, cookies, and bakery boxes made for everyday treats and special occasions.</p>
        </div>
        <ProductList products={products} onSelect={onSelect} />
      </div>
    </main>
  );
}

export default ShopView;
