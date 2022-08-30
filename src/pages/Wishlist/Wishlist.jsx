import { useEffect } from "react";
import { VerticalCard } from "../../components";
import { useCart, useToast } from "../../context";
import { setTitle } from "../../utils/set-title";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const title = "BottleCart | Wishlist";
  setTitle(title);
  const { cartState } = useCart();
  const { toastDispatch } = useToast();
  // useEffect(() => {
  //   toastDispatch({ type: "HIDE", payload: "" });
  //   cartState.wishlistItems.length <= 0 &&
  //     toastDispatch({
  //       type: "SHOW",
  //       payload: "No items added in the wishlist",
  //     });
  // }, [cartState.wishlistItems.length, toastDispatch]);
  return (
    // <div>Wishlist page</div>
    <div>
    <h2 class="main-heading h-3 flex ">My Wishlist</h2>
        <p class="para-4 main-subheading">
            {`Wishlist has total ${cartState.wishlistItems.length} items.`}
            <Link to="/products" className="card-btn btn-to-shop">Shop More</Link>
        </p>
        <div class="products flex flex-wrap">
        {cartState.wishlistItems.map((item) => (
          <VerticalCard product={item} key={item._id} />
        ))}
        </div>
    </div>
  );
};

export { Wishlist };
