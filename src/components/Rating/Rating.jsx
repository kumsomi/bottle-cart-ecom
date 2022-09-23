import { useFilter } from "../../context";
const Rating = (
  { value, name, type, payload }
  ) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      {/* <label htmlFor={value} className="para-4">
        <input type="radio" name={name} id={value} onChange={() =>{}}/>
          {value}
      </label> */}
      <label className="para-4" htmlFor="2">
        <input type="radio" 
        id={value}
        name={name}
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState.rating === payload}
        />
        
        {value}

      </label>
      {/* <input
        type="radio"
        id={value}
        name={name}
        className="margin-tb-sm"
        onChange={() =>{}} */}
        {/* //   filterDispatch({ */}
        {/* //     type: type,
        //     payload: payload,
        //   })
        // }
        // checked={filterState.rating === payload} */}
      {/* /> */}
      {/* <label htmlFor={value} className="label-content padding-xs">
        {value}
      </label> */}
    </>
  );
};

export { Rating };

                        
