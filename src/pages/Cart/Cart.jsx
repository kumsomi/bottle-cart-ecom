import { useEffect } from "react";
import { CartProduct } from "../../components";
import { useCart, useToast } from "../../context";

import { setTitle } from "../../utils/set-title";
const Cart = () => {
  const title = "The BottleCart Closet | Cart";
  const deliveryCharge="400";
  const salesTaxes="400";

  setTitle(title);
  const { cartState } = useCart();
  const { toastDispatch } = useToast();
  const totalCartAmount = Number(cartState.totalPrice) + 400;
  useEffect(() => {
    toastDispatch({ type: "HIDE", payload: "" });
    cartState.itemsInCart.length <= 0 &&
      toastDispatch({ type: "SHOW", payload: "No items added in the cart" });
  }, [cartState.itemsInCart.length, toastDispatch]);
  return (
    // <div>Cart page</div>
    // <main className="outer-wrapper">
    //   <section className="display-screen">
    //     {cartState.itemsInCart.map(
    //       (item) =>
    //         item.quantity > 0 && <CartProduct product={item} key={item._id} />
    //     )}
    //     {cartState.quantity > 0 && cartState.itemsInCart.length && (
    //       <div className="text-card-container card">
    //         <div className="card-inner-container">
    //           <div className="card-body padding-sm">
    //             <div className="card-title text-left">Price Details</div>
    //             <div className="card-desc flex-column">
    //               <hr className="full-width" />
    //               <div className="flex-spbt">
    //                 <span className="items">
    //                   Price {`(${cartState.itemsInCart.length} items)`}
    //                 </span>
    //                 <span className="price">{` $${cartState.totalPrice} `}</span>
    //               </div>
    //               <div className="flex-spbt">
    //                 <span className="discount">Discount</span>
    //                 <span className="price">
    //                   - {` $ ${cartState.totalDiscountedPrice} `}
    //                 </span>
    //               </div>
    //               <div className="flex-spbt">
    //                 <span className="delivery">Delivery Charges</span>
    //                 <span className="price">$499</span>
    //               </div>
    //               <hr className="full-width" />
    //               <div className="flex-spbt">
    //                 <span className="total">Total Amount</span>
    //                 <span className="price">{` $ ${totalCartAmount} `}</span>
    //               </div>
    //               <hr className="full-width" />
    //               <span className="items">
    //                 You will save {` $ ${cartState.totalDiscountedPrice} `} on
    //                 this order
    //               </span>
    //               <button className="full-width btn btn-primary">
    //                 Place Order
    //               </button>
    //             </div>
    //           </div>
    //           <div className="hide-overlay"> Women</div>
    //         </div>
    //         <div className="hide">
    //           <button className=" btn-action flex-center">Add to Cart</button>
    //           <button className="btn-action-horizontal secondary">
    //             Remove from wishlist
    //           </button>
    //           <span className="dismiss flex-center">
    //             <button className="card-btn-close">
    //               <i className="fas fa-times-circle close"></i>
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //     )}
    //   </section>
    // </main>
    <div>
      <h2 class="main-heading h-3 flex ">My Cart</h2>
        <p class="para-4 main-subheading">
            {`Cart has total ${cartState.itemsInCart.length} items`}
        </p>
            <div class="shop ">
            {cartState.itemsInCart.map(
              (item) =>
                item.quantity > 0 && <CartProduct product={item} key={item._id} />
            )}
              {/* <CartProduct/> */}
              {cartState.quantity > 0 && cartState.itemsInCart.length && (
                <div id="cart" class="cart-side">
                    <div class="cart-checkout flex flex-direction-col">
                        <div class="cart-total flex flex-direction-col">
                            <div class="total flex flex-direction-row">
                                <h4 class="h-4">Subtotal of {`(${cartState.itemsInCart.length} items)`}</h4>
                                <h4 class="h-4">{` Rs ${cartState.totalPrice} `}</h4>
                            </div>
                            <div class="total flex flex-direction-row">
                                <p class="para-4">Delivery Charges</p>
                                <p class="para-4">{` Rs ${deliveryCharge}`}</p>
                            </div>
                            <div class="total flex flex-direction-row">
                                <p class="para-4">Sales Taxes</p>
                                <p class="para-4">{`Rs ${salesTaxes}`}</p>
                            </div>
                            <div class="grand total flex flex-direction-row">
                                <h4 class="h-4">Total Amount</h4>
                                <h4 class="h-4">{` Rs ${totalCartAmount} `}</h4>
                            </div>
                            <div class="total-button flex flex-direction-row">
                                <button class="btn outline-btn icon-text-btn"> 
                                    <i class="fas fa-lock"></i>
                                    Begin Checkout
                                </button>
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
