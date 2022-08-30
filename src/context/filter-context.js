import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    rating: 0,
    Aluminium: false,
    Steel: false,
    Copper:false,
    Glass: false,
    Plastic: false,
    Disposable: false,
    OldSchool:false,
    Baby:false,
    price: 1500,
    searchKeyword: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };