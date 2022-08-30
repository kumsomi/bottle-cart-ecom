import { useEffect, useState } from "react";
import axios from "axios";
import { useToast, useFilter } from "../../context";
import { Checkbox } from "../Button/Checkbox";
import { RadioButton } from "../Button/RadioButton";
import { Rating } from "../Rating/Rating";

const priceRangeList = [0, 700, 1500];

const Filter = () => {
  const { toastDispatch } = useToast();
  const { filterState, filterDispatch } = useFilter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch {
        toastDispatch({ type: "SHOW" });
      }
    })();
  }, [toastDispatch]);

  return (

    <div class="product-filter m-1">
      <button
        className="btn link-btn ml-auto filter-btn"
        onClick={() =>
          filterDispatch({
            type: "CLEAR",
          })
        }
      >
       Clear Filters
     </button>
      <div class="filters flex flex-direction-col">
        <div class="filter-heading">Categories</div>
          {categories.map((item, index) => (
              <div key={index}>
                <Checkbox 
                  category={item.category}
                  name={item.category}
                  id={item.category}
                  type="FILTER_BY_CATEGORY"
                  payload={item.category}
                />
              </div>
          ))}
      </div>
      <div class="filters flex flex-direction-col">
          <div class="filter-heading">
            <label htmlFor="priceRange">
            Price: 0 to {filterState.price}
            </label>
          </div>
          <input  
            list="tickmarks"
            type="range"
            name="priceRange"
            id="priceRange"
            min="0"
            max="1500"
            step="100"
            value={filterState.price}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: Number(e.target.value),
              })
            }
          />
          <div class="slider-price-range flex flex-direction-row align-i-ctr">
            {priceRangeList.map((item, index)=>(
              <span key={index}>{item}</span>
            ))}
          </div>
      </div>


      <div class="filters flex flex-direction-col">
      <div class="filter-heading">Rating</div>
          
          <Rating
          value={`4 Stars & above`}
          name="rating"
          type="RATING"
          payload={4}
          />
          <Rating
          value={`3 Stars & above`}
          name="rating"
          type="RATING"
          payload={3}
          />
          <Rating
          value={`2 Stars & above`}
          name="rating"
          type="RATING"
          payload={2}
          />
          <Rating
          value={`1 Stars & above`}
          name="rating"
          type="RATING"
          payload={1}
          />
        
      </div>
      <div class="filters flex flex-direction-col">
      <div class="filter-heading">Sort By</div>
        <RadioButton
          value={`Price- Low to High`}
          name="sortBy"
          type="SORT"
          payload="LOW_TO_HIGH"
        />
        <RadioButton
          value={`Price- High to Low`}
          name="sortBy"
          type="SORT"
          payload="HIGH_TO_LOW"
        />
      </div>
    </div>
  );
};
export { Filter };