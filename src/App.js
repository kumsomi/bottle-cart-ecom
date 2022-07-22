import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ProductListing, Cart, Wishlist, Login, Signup } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider, FilterProvider, CartProvider } from "./context";

function App() {
  return (
    <div className="App">
    <CartProvider>
    <FilterProvider>
      <ToastProvider>
        <Toast/>
        <NavBar className="navigation-mode"/>
        <div className="main-mode">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />           
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>           
        </div>
        <Footer className="footer-mode"/>
      </ToastProvider>
    </FilterProvider>
    </CartProvider>
    </div>

  );
}

export default App;
