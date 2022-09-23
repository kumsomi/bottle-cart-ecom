import React, { useState } from 'react';
import { Hero } from '../../components/Hero';
import { Thumbnail } from '../../components/Thumbnail';
// import { categoryList } from '../../data/homeData';
import { setTitle } from '../../utils/set-title';
// import { useFilter, useToast } from "../../context";
import { useEffect } from "react";
import axios from "axios";
import { PageFooter } from '../../components';


const Home=()=>{
    const title = "BottleCart | Home";
    setTitle(title);
    // const { toastDispatch } = useToast();
    const [categories, setCategories] = useState([]);
  // const {showToast}=useToast();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } 
      catch {
        // toastDispatch({ type: "SHOW" });
      }
    })();
  });

    return(
        <div className="main-head text-center">
            <Hero/>
            <div className="h-3">Bottle Categories</div>
            <div className='flex justify-c-ctr flex-wrap m-2'>
            {categories.map((item, index) => {
                return(
                <><Thumbnail 
                        image= {item.image} 
                        category={item.category}
                        type="FILTER_BY_CATEGORY"        
                        key={index}/>
                        </>
                    )
                    }
                )
                }      
            </div>
            
            {/* <PageFooter/>       */}
     </div>
    );
}
export {Home};