import { Link } from "react-router-dom";

const Hero=()=>{
    return(
        <div>
            <div className="background-image flex justify-c-ctr "></div>
            <div className="contents  m-2">
                <h1 className="h-2">Get your bottles from BottleCart</h1>
                <p className="para-3">Save 10% on every purchase</p>
                <Link to="/products">
                    <button className="btn outline-btn" 
                    >Shop now</button>
                </Link>
            </div>
        </div>
    );
}
export {Hero};