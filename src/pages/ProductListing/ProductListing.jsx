import { useToast, useFilter} from "../../context";
import { useState, useEffect } from "react";
import { setTitle } from "../../utils/set-title";
import axios from "axios";
import { Filter, VerticalCard } from "../../components";
import { useLocation } from "react-router-dom";
import {
  getRatedProducts,
  getSortedProducts,
  getCheckedProducts,
  getPricedProducts,
  getSearchedProducts,
} from "../../utils";

const ProductListing = () => {
  const location = useLocation();
  const category = location?.state;
  const { filterState, filterDispatch } = useFilter();
  const [productList, setProductList] = useState([]);
  const title = "BottleCart | Products";
  const searchedProducts = getSearchedProducts(filterState, productList);
  const pricedProducts = getPricedProducts(filterState, searchedProducts);
  const ratedProducts = getRatedProducts(filterState, pricedProducts);
  const checkedProductList = getCheckedProducts(filterState, ratedProducts);
  const sortedProductList = getSortedProducts(filterState, checkedProductList);

  const [isFilterShow, setIsFilterShow] = useState(false);
  const handleFilterShow=()=>{
    setIsFilterShow(true);
  }

  const {showToast}= useToast();
  setTitle(title);
  useEffect(() => {
    // const category=location?.state;
    {console.log(category)}
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductList(products);
        // toastDispatch({ type: "HIDE", payload: "" });
        category && 
        filterDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: category,
        });
      } catch {
        // toastDispatch({
        //   type: "SHOW",
        //   payload: "Cannot fetch data right now.",
        // });
        showToast("Cannot fetch data right now. Try again after some time", "error");      }
    })();
    
    
  }, [location?.state, showToast, filterDispatch, category]);

  // let mediaMatch;
  // useEffect(()=>{
  // mediaMatch=window.matchMedia("(min-width: 768px)").matches
  // })
  
  return (
    <div >
      {/* <main> */}
      <div className="mobile-nav">
        <span>Filters</span><span className="icon-btn filter-btn"><i className="fas fa-sliders-h"></i></span>
      </div>
      <div className="product-list">
              {/* grid grid-product-cols-2 */}
        <div className="product-list-filter">
          <Filter/>
        </div>
              
        {isFilterShow &&
          <div className="mobile-filter">
            <button onClick={()=>setIsFilterShow(false)} className="btn link-btn filter-btn filter-close-btn"> X</button>
            <Filter/>
          </div>
        }
              
              <div className="product-list-main">
                <div className="flex product-list-header">
                  <h2 className="h-3 product-count">Products: {sortedProductList.length} </h2>
                  <button className="mobile-view-filter-btn btn link-btn filter-btn" onClick={handleFilterShow}>Filters</button>
                </div>
                
                {/* <div className="product-container"> */}
                  <div className="product-wrapper">
                  {/* <div className="product-wrapping-lists"> */}
                    {sortedProductList.map((item)=> 
                    <VerticalCard product={item} key={item._id}/>)
                    }
                  {/* </div> */}
                </div>
              </div>
            </div>
            
        {/* </main> */}
    </div>
  );
};

export { ProductListing };
