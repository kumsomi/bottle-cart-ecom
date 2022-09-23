import { useCart } from "../context";
import { useToast } from "../custom-hooks/useToast";

const CartProduct = ({ product }) => {
  const { cartDispatch } = useCart();
  const {showToast}=useToast();
    return(<div>
        <div className="products flex flex-wrap">
            <article className="card horizontal card-shadow">
        <div className="horizontal-card-img--container flex-jc-ac">
          <img 
            src={product.image} 
            alt={product.image}
            className="horizontal-card-img" />
        </div>
        <div className="horizontal-card-text--container">
          <p>{product.category}</p>
          <h3 className="horizontal-card-heading">{product.title}</h3>
          <span className="card-price-tag">
            <p>{`Rs ${product.price} `}</p>
          </span>
          <div className="horizontal-card-details-container">
            {/* <h4>Description</h4>
            <div >
              <section className="description">
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
              <span className="para-4">Quantity:</span>
               {/* <button className="quantity btn primary-btn">-</button>
               <span>2</span>
               <button className="quantity btn primary-btn">+</button> */}

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
            <div className="horizontal-card-btn-container flex-ac">
              <button className="card-btn card-cart horizintal-card-btn-primary"
                onClick={() =>{
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                  showToast("Item Removed from cart", "success");
                }
                }
              >
                <span className="cart-icon "><i className="fas fa-shopping-cart"></i></span>
                <p className="cart-text">Remove from Cart</p>
              </button>

              <button className="card-btn horizontal-card-btn-secondary"
                onClick={() =>{
                  cartDispatch({
                    type: "MOVE_TO_WISHLIST",
                    payload: product,
                  })
                  showToast("Item is moved to wishlist", "success");
                }
                }
              >
                <span className="wishlist-icon"><i className="far fa-heart"></i></span>
                <p className="wishlist-text">Move to wishlist</p>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>);
}
export {CartProduct};