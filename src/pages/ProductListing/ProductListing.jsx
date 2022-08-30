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
  const category = location.state;
  const { toastDispatch } = useToast();
  const { filterState, filterDispatch } = useFilter();
  const [productList, setProductList] = useState([]);
  const title = "BottleCart | Products";
  const searchedProducts = getSearchedProducts(filterState, productList);
  const pricedProducts = getPricedProducts(filterState, searchedProducts);
  const ratedProducts = getRatedProducts(filterState, pricedProducts);
  const checkedProductList = getCheckedProducts(filterState, ratedProducts);
  const sortedProductList = getSortedProducts(filterState, checkedProductList);

  const {showToast}= useToast();
  setTitle(title);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductList(products);
        // toastDispatch({ type: "HIDE", payload: "" });
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

    
  }, [toastDispatch, filterDispatch, category]);

  return (
    <div >
      {/* <main> */}
            <div class="product-list">
              {/* grid grid-product-cols-2 */}
              <div className="product-list-filter">
                <Filter/>
              </div>
              <div class="product-list-main">
                <h2 class="main-heading h-3 ">BottleCart Products</h2>

                <div className="product-container">
                  <div className="product-wrapper">
                  {/* <div className="product-wrapping-lists"> */}
                    {sortedProductList.map((item)=> 
                    <VerticalCard product={item} key={item._id}/>)
                    }
                  </div>
                </div>
              </div>
            </div>
        {/* </main> */}
    </div>
  );
};

export { ProductListing };
