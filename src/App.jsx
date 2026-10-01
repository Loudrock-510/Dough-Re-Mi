import { useMemo, useState } from "react";
import products from "./data/products.json";
import Navigation from "./components/Navigation.jsx";
import HomeView from "./components/HomeView.jsx";
import ShopView from "./components/ShopView.jsx";
import ProductDetailView from "./components/ProductDetailView.jsx";
import Cart from "./components/Cart.jsx";
import AccountView from "./components/AccountView.jsx";
import CreateAccountView from "./components/CreateAccountView.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [productOptions, setProductOptions] = useState({ size: "", flavor: "", quantity: 1 });

  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);
  const subtotal = useMemo(() => cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0), [cartItems]);

  const navigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setProductOptions({ size: "", flavor: "", quantity: 1 });
    navigate("detail");
  };

  const addToCart = (product, options) => {
    const itemId = `${product.id}-${options.size}-${options.flavor}`;
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === itemId);
      if (existing) {
        return currentItems.map((item) => item.id === itemId ? { ...item, quantity: Math.min(product.quantityInStock, item.quantity + options.quantity) } : item);
      }
      return [...currentItems, { id: itemId, productId: product.id, productName: product.name, image: product.image, size: options.size, flavor: options.flavor, message: options.message || "", quantity: options.quantity, unitPrice: product.salePrice ?? product.price, stock: product.quantityInStock }];
    });
  };

  const updateQuantity = (itemId, amount) => {
    setCartItems((currentItems) => currentItems.map((item) => item.id === itemId ? { ...item, quantity: Math.min(item.stock, Math.max(1, item.quantity + amount)) } : item));
  };

  const removeItem = (itemId) => setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));

  let content;
  if (currentView === "shop") content = <ShopView products={products} onSelect={selectProduct} />;
  else if (currentView === "detail" && selectedProduct) content = <ProductDetailView product={selectedProduct} options={productOptions} setOptions={setProductOptions} onAddToCart={addToCart} onBack={() => navigate("shop")} />;
  else if (currentView === "cart") content = <Cart cartItems={cartItems} cartCount={cartCount} subtotal={subtotal} onIncrease={(id) => updateQuantity(id, 1)} onDecrease={(id) => updateQuantity(id, -1)} onRemove={removeItem} onNavigate={navigate} />;
  else if (currentView === "account") content = <AccountView onNavigate={navigate} />;
  else if (currentView === "create-account") content = <CreateAccountView />;
  else content = <HomeView products={products} onNavigate={navigate} onSelect={selectProduct} />;

  return (
    <div className="app-shell">
      <Navigation currentView={currentView} onNavigate={navigate} cartCount={cartCount} />
      {content}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
