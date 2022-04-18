// import { VerticalCard, FilterButton, Filter } from "../../components";
import { useToast, useFilter } from "../../context";
import { useState, useEffect } from "react";
import { setTitle } from "../../utils/set-title";
import axios from "axios";
// import { products } from "../../backend/db/products";
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
  setTitle(title);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductList(products);
      // }
      // catch{
      //   console.log(err);
      // }
        toastDispatch({ type: "HIDE", payload: "" });
        filterDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: category,
        });
      } catch {
        toastDispatch({
          type: "SHOW",
          payload: "Cannot fetch data right now.",
        });
      }
    })();

    
  }, [toastDispatch, filterDispatch, category]);

  return (
    <div >
      <main>
            <h2 class="main-heading h-3 flex justify-c-ctr align-i-ctr">BottleCart Products</h2>
            <div class="grid grid-product-cols-2">
              <Filter/>
              <div class="products flex flex-wrap">
                {sortedProductList.map((item)=> 
                <VerticalCard product={item} key={item._id}/>)
                }
              </div>
            </div>
        </main>
    </div>
  );
};

export { ProductListing };
