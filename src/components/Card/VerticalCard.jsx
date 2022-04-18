import { Link } from "react-router-dom";
import { useCart } from "../../context";

const VerticalCard = ({ product }) => {
  const { cartState, cartDispatch } = useCart();

  return (
    <article class="card vertical card-shadow card-hover">

        {/* <!-- Card image --> */}
        <section class="card-image-container flex-jc-ac">
        <img src={product.image} alt={`${product.image}`} class="card-image" />
        </section>

        {/* <!-- Card content --> */}
        <section class="card-content">
        <h1 class="card-title">{product.title}</h1>
        <p class="card-category">{product.category}</p>
        <span class="card-price-tag">
            <p>{`$ ${product.price}`}</p>
        </span>
        </section>

        {/* Wishlist  */}
        <section class="card-tag">
            <span class="icon-btn">
              {cartState.wishlistItems.some((item) => item._id === product._id) ? (
                <i
                  className="fas fa-heart"
                  onClick={() =>
                    cartDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    })
                  }
                >
                </i>
                  ) : (
                    <i
                      className="far fa-heart"
                      onClick={() =>
                        cartDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: product,
                        })
                      }
                    >
                    </i>
                  )}
            </span>
        </section>

        {/* Rating */}
        <div>
            {[...Array(5)].map((item, i) =>
              i + 1 > product.rating ? (
                <i className="far fa-star" key={i}></i>
              ) : (
                <i className="fas fa-star enabled" key={i}></i>
              )
            )}
        </div>
        {/* Add to cart button  */}
        {cartState.itemsInCart.some((i) => i._id === product._id) &&
        cartState.quantity > 0 ? (
          <Link to="/cart" className="card-btn card-cart">
            <button 
            className="card-btn card-cart"
            >
              <span class="cart-icon"><i class="fas fa-shopping-cart"></i></span>
              <p class="cart-text">Go to Cart</p>
            </button>
          </Link>
        ) : (
          <button
            className="card-btn card-cart"
            onClick={() =>
              cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            <span class="cart-icon"><i class="fas fa-shopping-cart"></i></span>
            <p class="cart-text">Add to Cart</p>
          </button>
        )}

    </article>
  );
};
export { VerticalCard };



