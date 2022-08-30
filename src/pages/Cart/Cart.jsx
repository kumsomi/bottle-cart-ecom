import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartProduct } from "../../components";
import { useCart, useToast } from "../../context";

import { setTitle } from "../../utils/set-title";
import { Checkout } from "../Checkout/Checkout";
const Cart = () => {
  const title = "The BottleCart Closet | Cart";
  const deliveryCharge="400";
  const salesTaxes="400";

  setTitle(title);
  const { cartState } = useCart();
  const { showToast } = useToast();
  const totalCartAmount = Number(cartState.totalPrice) + 400;

  // useEffect(() => {
  //   // toastDispatch({ type: "HIDE", payload: "" });
  //   cartState.itemsInCart.length <= 0 &&
  //   showToast("No items added in the cart", "info");
  //     // toastDispatch({ type: "SHOW", payload: "No items added in the cart" });
  // }, [cartState.itemsInCart.length]);

  return (
    <div>
      <h2 class="main-heading h-3 flex ">My Cart</h2>
        <p class="para-4 main-subheading">
            {`Cart has total ${cartState.itemsInCart.length} items.`} 
            <Link to="/products" className="card-btn btn-to-shop">Shop More</Link>
        </p>
            <div class="shop ">
            {cartState.itemsInCart.map(
              (item) =>
                item.quantity > 0 && <CartProduct product={item} key={item._id} />
            )}
              {/* <CartProduct/> */}
              {cartState.quantity > 0 && cartState.itemsInCart.length && (
                <div id="cart" class=" cart-side">
                    <div class="cart-checkout flex flex-direction-col">
                        <div class=" card card-shadow cart-total flex flex-direction-col">
                            <div class="total flex flex-direction-row">
                                <h4>Subtotal of {`(${cartState.itemsInCart.length} items)`}</h4>
                                <h4>{` Rs ${cartState.totalPrice} `}</h4>
                            </div>
                            <div class="total flex flex-direction-row">
                                <h4>Delivery Charges</h4>
                                <h4>{` Rs ${deliveryCharge}`}</h4>
                            </div>
                            <div class="total flex flex-direction-row">
                                <h4>Sales Taxes</h4>
                                <h4>{`Rs ${salesTaxes}`}</h4>
                            </div>
                            <div class="grand total flex flex-direction-row">
                                <h4>Total Amount</h4>
                                <h4>{` Rs ${totalCartAmount} `}</h4>
                            </div>
                            <div class="total-button flex flex-direction-row">
                              <Link to="/checkout">   
                                <button class="btn outline-btn icon-text-btn"> 
                                    <i class="fas fa-lock"></i>
                                    Begin Checkout
                                </button>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
              )}
              
              </div>
              </div>
  );
};

export { Cart };
