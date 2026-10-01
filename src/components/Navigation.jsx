function Navigation({ currentView, onNavigate, cartCount }) {
  const goTo = (view) => {
    onNavigate(view);
    const menu = document.getElementById("mainNavigation");
    if (menu?.classList.contains("show")) {
      window.bootstrap?.Collapse.getOrCreateInstance(menu).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar sticky-top">
      <div className="container">
        <button className="navbar-brand brand-button" onClick={() => goTo("home")} aria-label="Go to Dough Re Mi home">
          <span className="brand-mark">♫</span>
          <span>Dough Re Mi</span>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavigation">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <button className={`nav-link nav-button ${currentView === "home" ? "active" : ""}`} onClick={() => goTo("home")}>Home</button>
            <button className={`nav-link nav-button ${currentView === "shop" || currentView === "detail" ? "active" : ""}`} onClick={() => goTo("shop")}>Shop</button>
            <button className={`nav-link nav-button ${currentView === "account" || currentView === "create-account" ? "active" : ""}`} onClick={() => goTo("account")}>Account</button>
            <button className={`nav-link nav-button cart-link ${currentView === "cart" ? "active" : ""}`} onClick={() => goTo("cart")}>
              Cart <span className="badge rounded-pill cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
