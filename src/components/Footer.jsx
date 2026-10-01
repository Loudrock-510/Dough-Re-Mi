function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div><strong>Dough Re Mi</strong><span className="ms-2 text-white-50">A little joy, freshly baked.</span></div>
        <button className="btn btn-link text-white p-0" onClick={() => onNavigate("home")}>Back to home</button>
      </div>
    </footer>
  );
}

export default Footer;
