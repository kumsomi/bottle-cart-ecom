import { useFilter } from "../../context";
const Checkbox = ({ category, name, id, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <label htmlFor={name} className="para-4 label-group container">
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
