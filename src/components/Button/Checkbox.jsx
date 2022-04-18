import { useFilter } from "../../context";
const Checkbox = ({ category, name, id, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      {/* <input
        type="checkbox"
        required
        name={name}
        id={id}
        className="inputBox margin-tb-sm"
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState[payload]}
      />
      <label htmlFor={name} className="label-content padding-xs">
        {categoryName}
      </label> */}
      <label htmlFor={name} class="para-4 label-group container">
        <input 
          type="checkbox" 
          required
          name={name}
          id={id}
          onChange={() =>
            filterDispatch({
              type: type,
              payload: payload,
            })
          }
        checked={filterState[payload]}
        />
        {category}
      </label>
    </>
  );
};

export { Checkbox };
