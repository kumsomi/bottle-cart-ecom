import React from 'react';
import { Hero } from '../../components/Hero';
import { Thumbnail } from '../../components/Thumbnail';
import { categoryList } from '../../data/homeData';
import { setTitle } from '../../utils/set-title';
import { useToast } from "../../context";
import { useEffect } from "react";


const Home=()=>{
    const title = "BottleCart | Home";
    setTitle(title);
    const { toastDispatch } = useToast();
    useEffect(() => {
    toastDispatch({ type: "HIDE", payload: "" });
  }, [toastDispatch]);

    return(
        <div class="main-head text-center">
            <Hero/>
            <div className="h-3">Bottle Categories</div>
            <div className='flex justify-c-ctr flex-wrap m-2'>
            {categoryList.map(({image,category}, index) => {
                return(<Thumbnail image={image} category={category} key={index}/>
                    )
                    }
                )
                }      
            </div>

     </div>
    );
}
export {Home};