import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductList({ products, onSelect }) {
  const [page, setPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const visibleProducts = products.slice((page - 1) * productsPerPage, page * productsPerPage);

  const changePage = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="row g-4">
        {visibleProducts.map((product) => (
          <div className="col-sm-6 col-lg-3" key={product.id}>
            <ProductCard product={product} onSelect={onSelect} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="mt-5" aria-label="Product pages">
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <li className="page-item" key={pageNumber}>
                <button className={`page-link ${page === pageNumber ? "active" : ""}`} onClick={() => changePage(pageNumber)}>{pageNumber}</button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default ProductList;
