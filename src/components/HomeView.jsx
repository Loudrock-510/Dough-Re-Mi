function HomeView({ products, onNavigate, onSelect }) {
  const featuredProducts = products.filter((product) => product.featuredProduct).slice(0, 4);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/bakery-placeholder.svg";
  };

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="eyebrow">Small batches. Big comfort.</p>
              <h1>Good food has a melody.</h1>
              <p className="hero-copy">Dough Re Mi makes familiar bakery favorites with thoughtful ingredients, warm flavors, and a little joy in every box.</p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg" onClick={() => onNavigate("shop")}>Shop the bakery</button>
                <button className="btn btn-outline-dark btn-lg" onClick={() => onNavigate("create-account")}>Create an account</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-card">
                <img src="/images/storefront.jpg" alt="Dough Re Mi bakery display" onError={handleImageError} />
                <div className="hero-note">Baked fresh for your next good day.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-heading d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <p className="eyebrow">A few favorites</p>
              <h2>Made for sharing</h2>
            </div>
            <button className="btn btn-link link-dark p-0" onClick={() => onNavigate("shop")}>See everything</button>
          </div>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div className="col-sm-6 col-lg-3" key={product.id}>
                <button className="featured-tile text-start w-100" onClick={() => onSelect(product)}>
                  <img src={product.image} alt={product.name} onError={handleImageError} />
                  <span className="d-block mt-3 fw-semibold">{product.name}</span>
                  <span className="text-muted small">From ${product.salePrice?.toFixed(2) ?? product.price.toFixed(2)}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding soft-section">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4"><div className="value-card"><span className="value-icon">✦</span><h3 className="h5">Baked in small batches</h3><p className="mb-0 text-muted">Freshness comes first, from the first whisk to the last crumb.</p></div></div>
            <div className="col-md-4"><div className="value-card"><span className="value-icon">♡</span><h3 className="h5">Made to feel personal</h3><p className="mb-0 text-muted">Choose flavors and sizes that fit the moment you are celebrating.</p></div></div>
            <div className="col-md-4"><div className="value-card"><span className="value-icon">♫</span><h3 className="h5">A little joy included</h3><p className="mb-0 text-muted">The best bakery order is one that makes the room feel warmer.</p></div></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeView;
