import { Link} from "react-router-dom";
import { NavBadgeIcon, NavIcon } from "./NavBadgeIcon";
import { useCart, useFilter } from "../context";
import { useState } from "react";

const NavBar=()=>{
// const location = useLocation();
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
  const [showDrawer, setShowDrawer]=useState(false);
  const handleChangeDrawer=()=>{
    setShowDrawer(prev=>!prev);
  }
    return(
        <nav className="navigation-bar p-1">
            <Link to="/" className="nav-heading site-link">
                <span className="h-2 flex flex-wrap">Bottle<span>Cart</span></span>
            </Link>
            {/* <Link to="/" className="mobile-nav-bars site-link"> */}
            <div className="mobile-nav-bars" onClick={handleChangeDrawer}>
                <i className="fas fa-bars icon-btn"></i>
            </div>
                {/* </Link> */}
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
                    {/* {cartState.itemsInCart.length>0 ?  */}
                    <NavBadgeIcon
                        linkTo="/cart"
                        iconclassName={"fas fa-shopping-cart"}
                        badgeCount={cartState.itemsInCart.length}
                    />
                    {/* :  
                    <NavIcon
                    linkTo="/cart"
                    iconclassName={"fas fa-shopping-cart"}
                /> 
                 */}
                    
                    
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
            {/* <div className="nav-drawer-container"> */}
            {showDrawer && 
                <div className="nav-drawer">
                    <Link to="/" className="site-link" onClick={()=>setShowDrawer(false)}>BottleCart</Link>
                    <Link to="/products" className="site-link" onClick={()=>setShowDrawer(false)}>Shop</Link>
                    <div className="icon-btn close-nav-drawer" onClick={()=>setShowDrawer(false)}>X</div>
                </div>
            }
            {/* </div> */}
            
        </nav>
    );

}
export {NavBar};