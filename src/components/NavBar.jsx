import { Link, useLocation } from "react-router-dom";
import { NavBadgeIcon, NavIcon } from "./NavBadgeIcon";
import { useCart, useFilter } from "../context";

const NavBar=()=>{
const location = useLocation();
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
    return(

        <nav class="navigation-bar  p-1">
            
            <Link to="/" className="site-link">
                <span class="h-2 nav-heading flex flex-wrap">Bottle<span>Cart</span></span>
            </Link>
            <div class="navigation-brand-link search h-4 m-1">
                <input class="p-1 primary-color fw-600 navigation-search-input" 
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

            <div class="navigation-brand-link">
                <ul class="nav-menu no-bullet spaced-list mt-1">
                    
                    <NavBadgeIcon
                        linkTo="/cart"
                        iconclassName={"fas fa-shopping-cart"}
                        // badgeCount="24"
                        badgeCount={cartState.itemsInCart.length}
                    />
                    <NavBadgeIcon
                        linkTo="/wishlist"
                        iconclassName={"fab fa-gratipay"}
                        // badgeCount="24"
                        badgeCount={cartState.wishlistItems.length}
                    />
                    <NavIcon
                        linkTo="/login"
                        iconclassName={"fas fa-user"}
                    />
                    {/* <div class="badge iconic-pills">
                        <span class="badge-icon icon-btn">
                            <i class="fab fa-gratipay"></i></span> 
                        <p class="badge-text top right">24</p>  
                    </div>
                    <div class="badge iconic-pills">
                        <span class="badge-icon icon-btn"><i class="fas fa-shopping-cart "></i></span>
                        <p class="badge-text top right">24</p>
                    </div>*/}
                    {/* <div class="badge iconic-pills">
                        <span class="badge-icon icon-btn"><i class="fas fa-user"></i></span>
                    </div>  */}
                </ul> 
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    );

}
export {NavBar};