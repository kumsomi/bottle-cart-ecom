const Footer=()=>{
    return(
        <footer class="footer flex flex-direction-row flex-wrap text-left p-1">
        <div>
            <h2 class="h-2">BottleCart</h2>
            {/* <p1 class="para-3">Lets you take your water along.</p1> */}
        </div>
        <div class="categories">
            <h3 class="h-3">Categories</h3>
            <p class="para-4">Glass Bottles</p>
            <p class="para-4">Plastic Bottles</p>
            <p class="para-4">Stainless steel Bottles</p>
            <p class="para-4">Aluminium Bottles</p>
        </div>
        <div class="address">
            <h4 class="h-3">Contact us</h4> 
            <p class="para-4">A-Block 245/7 </p>
            <p class="para-4">New Town Yelahanka</p>
            <p class="para-4">Bangalore, India</p>
        </div>
    </footer>
    );
}

export {Footer};