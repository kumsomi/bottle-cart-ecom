import { Link, useLocation } from "react-router-dom";
import { NavBadgeIcon, NavIcon } from "./NavBadgeIcon";
import { useCart, useFilter } from "../context";

const NavBar=()=>{
const location = useLocation();
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
    return(
        <nav className="navigation-bar p-1">
            <Link to="/" className="site-link">
                <span className="h-2 nav-heading flex flex-wrap">Bottle<span>Cart</span></span>
            </Link>
            <div className="navigation-brand-link search h-4 m-1">
                <input className="p-1 primary-color fw-600 navigation-search-input" 
                type="text" placeholder="Search..." name="search" id="search" 
                onChange={(e) =>
                    filterDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }
                  value={filterState.searchKeyword}
                />
                <Link to="/products" className="site-link">
                <button className="btn primary-btn">Shop</button>
                </Link>
            </div>

            <div className="navigation-brand-link">
                <ul className="no-bullet spaced-list mt-1">
                    {cartState.itemsInCart.length>0 ? <NavBadgeIcon
                        linkTo="/cart"
                        iconclassName={"fas fa-shopping-cart"}
                        badgeCount={cartState.itemsInCart.length}
                    />: <NavIcon
                    linkTo="/cart"
                    iconclassName={"fas fa-shopping-cart"}
                />}
                    
                    
                    {cartState.wishlistItems.length>0 ? <NavBadgeIcon
                        linkTo="/wishlist"
                        iconclassName={"fab fa-gratipay"}
                        badgeCount={cartState.wishlistItems.length}
                    /> :<NavIcon
                    linkTo="/wishlist"
                    iconclassName={"fab fa-gratipay"}
                />}
                    
                    
                    <NavIcon
                        linkTo="/login"
                        iconclassName={"fas fa-user"}
                    />   
                    
                </ul> 
            </div>
        </nav>
    );

}
export {NavBar};