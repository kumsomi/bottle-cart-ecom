import { useCart } from "../context";
import { useToast } from "../custom-hooks/useToast";

const CartProduct = ({ product }) => {
  const { cartDispatch } = useCart();
  const {showToast}=useToast();
    return(<div>
        <div class="products flex flex-wrap">
            <article class="card horizontal card-shadow">
        <div class="horizontal-card-img--container flex-jc-ac">
          <img 
            src={product.image} 
            alt={product.image}
            className="horizontal-card-img" />
        </div>
        <div class="horizontal-card-text--container">
          <p>{product.category}</p>
          <h3 class="horizontal-card-heading">{product.title}</h3>
          <span class="card-price-tag">
            <p>{`Rs ${product.price} `}</p>
          </span>
          <div class="horizontal-card-details-container">
            {/* <h4>Description</h4>
            <div >
              <section class="description">
                <ul>
                    <li>Made in India.</li>
                    <li>{product.category} bottle </li>
                    <li>Travel friendly</li>
                    <li>Environment friendly</li>
                    <li>Measurements: height:20cm, Volume: 35cl</li>
                </ul>
              </section>
            </div> */}
            <div>
              <span class="para-4">Quantity:</span>
               {/* <button class="quantity btn primary-btn">-</button>
               <span>2</span>
               <button class="quantity btn primary-btn">+</button> */}

               {product.quantity === 1 ? (
              <button
                disabled
                className="quantity btn primary-btn"
                onClick={() =>{
                  cartDispatch({
                    type: "DECREASE_CART_QUANTITY",
                    payload: product,
                  })
                  showToast("Quantity decreased", "info");
                }
                }
              > -
                {/* <i className="fas fa-minus"></i> */}
              </button>
            ) : (
              <button
                className="quantity btn primary-btn"
                onClick={() =>{
                  cartDispatch({
                    type: "DECREASE_CART_QUANTITY",
                    payload: product,
                  })
                  showToast("Quantity decreased", "info");
                }
                }
              >
                -
                {/* <i className="fas fa-minus"></i> */}
              </button>
            )}
            <span>{product.quantity}</span>
            <button
              className="quantity btn primary-btn"
              onClick={() =>{
                cartDispatch({
                  type: "INCREASE_CART_QUANTITY",
                  payload: product,
                })
                showToast("increased quantity", "info");
              }
              }
            >
              +
            </button>
            </div>          
            <div class="horizontal-card-btn-container flex-ac">
              <button class="card-btn card-cart horizintal-card-btn-primary"
                onClick={() =>{
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                  showToast("Item Removed from cart", "success");
                }
                }
              >
                <span class="cart-icon "><i class="fas fa-shopping-cart"></i></span>
                <p class="cart-text">Remove from Cart</p>
              </button>

              <button class="card-btn horizontal-card-btn-secondary"
                onClick={() =>{
                  cartDispatch({
                    type: "MOVE_TO_WISHLIST",
                    payload: product,
                  })
                  showToast("Item is moved to wishlist", "success");
                }
                }
              >
                <span class="wishlist-icon"><i class="far fa-heart"></i></span>
                <p class="wishlist-text">Move to wishlist</p>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>);
}
export {CartProduct};