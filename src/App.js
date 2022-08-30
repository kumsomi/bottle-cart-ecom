import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ProductListing, Cart, Wishlist, Login, Signup, Checkout } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { FilterProvider, CartProvider } from "./context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <CartProvider>
    <FilterProvider>
      {/* <ToastProvider> */}
        {/* <Toast/> */}

        <NavBar className="navigation-mode"/>
        <div className="main-mode">
        <ToastContainer/>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />           
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>           
        </div>
        {/* <Footer className="footer-mode"/> */}
      {/* </ToastProvider> */}
    </FilterProvider>
    </CartProvider>
    </div>

  );
}

export default App;
