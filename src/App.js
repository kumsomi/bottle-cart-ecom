import "./App.css";
// import { Footer } from "./components/Footer";
// import { NavBar } from "./components/NavBar";
// import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Home, ProductListing, Cart, Wishlist, Login, Signup } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider, FilterProvider, CartProvider } from "./context";
// import Mockman from "mockman-js";

function App() {
  return (
    // <CartProvider>
    //   <FilterProvider>
    //     <ToastProvider>
    //       {/* <Toast />
    //       <NavBar /> */}
    //       <div className="App">
    //         <Routes>
    //           <Route path="/" exact element={<Home />} />
    //           <Route path="/products" element={<ProductListing />} />
    //           <Route path="/cart" element={<Cart />} />
    //           <Route path="/wishlist" element={<Wishlist />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/signup" element={<Signup />} />
    //           {/* <Route path="/mock" element={<Mockman />} /> */}
    //         </Routes>
    //       </div>
    //       <Footer />
    //     </ToastProvider>
    //   </FilterProvider>
    // </CartProvider>
    <>
    <CartProvider>
    <FilterProvider>
      <ToastProvider>
        <Toast/>
        <NavBar/>
        <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />           
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>           
        {/* <Home/> */}
        </div>
        <Footer/>
      </ToastProvider>
    </FilterProvider>
    </CartProvider>
    </>
  );
}

export default App;
