import { Link } from "react-router-dom";
import { useFilter } from "../context";
const Thumbnail=({image,category})=>{
    const {filterDispatch}=useFilter();
    // const handleCategoryItemSelection = (event) => {
	// 	filterDispatch({
	// 		type: "FILTER_BY_CATEGORY",
	// 		payload: { category },
	// 	});
	// };
    return(
            <div>
                {/* {console.log(category)} */}
                <Link to={`/products`} state={category} 
                onClick={
                    filterDispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: { category },
                    })}
                >
                    {/* {console.log(category)} */}
                <img src={image} className="bottle-category" alt={`${category} bottle`} />
                </Link>
                <p className='para-4'>{category}</p>
            </div>
    );
}
export {Thumbnail};


