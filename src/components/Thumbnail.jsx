import { Link } from "react-router-dom";
const Thumbnail=({image,category})=>{
    return(
            <div>
                <Link to="/products" state={category}>
                <img src={image} className="bottle-category" alt={`${category} bottle`} />
                </Link>
                <p className='para-4'>{category}</p>
            </div>
    );
}
export {Thumbnail};


