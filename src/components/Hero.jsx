import { Link } from "react-router-dom";

const Hero=()=>{
    return(
        <div>
            <div class="background-image flex justify-c-ctr "></div>
            <div className="contents  m-2">
                {/* head-heading */}
                <h1 class="h-2">Get your bottles from BottleCart</h1>
                <p class="para-3">Save 10% on every purchase</p>
                <Link to="/products">
                    <button class="btn outline-btn" 
                    // onClick={()=>window.open("/products", "_self")}
                    >Shop now</button>
                </Link>
            </div>
        </div>
    );
}
export {Hero};