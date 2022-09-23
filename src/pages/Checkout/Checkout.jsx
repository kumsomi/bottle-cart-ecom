import { useCart } from "../../context";
import { Link } from "react-router-dom";
import { useToast } from "../../custom-hooks/useToast";
// import {bottleIcon} from "assets/icon-ecom.png"; 

const RAZORPAY_URL = "https://checkout.razorpay.com/v1/checkout.js";

const handleLoadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			reject(false);
		};
		document.body.appendChild(script);
	});
};

const Checkout=({product, key})=>{
    const {cartState}=useCart();
    const totalCartAmount = Number(cartState.totalPrice) + 400;
    const {showToast}=useToast();

    const handleShowRazorPay = async () => {
		const response = await handleLoadScript(RAZORPAY_URL);

		if (!response) {
			showToast(
				"Could not load razorpay payment options. Please try again later.",
				"error"
			);
			return;
		}

		var options = {
			key: process.env.REACT_APP_RAZORPAY_KEY,
			amount: totalCartAmount * 100,
			currency: "INR",
            order_id: key,
			name: "BottleCart",
			description: "Thank you for shopping!",
			// image: bottleIcon,
            handler: function () {
				// alert("success")
                showToast("Not able to place order", "error");
			},
			
			prefill: {
				name: 'somi',
				email: 'kumsomi@gmail.com',
				contact: '909999900',
			},
			theme: { color: "#3399cc" },
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

    return(
        <div>
            <h1>Checkout Page</h1>
            {cartState.itemsInCart.length>0 && 
                (
                <>
                    <div>
                    
                        <div id="cart" class=" cart-side">
                            <div class="cart-checkout flex flex-direction-col">
                            <div class=" card card-shadow cart-total flex flex-direction-col">
                                <h1 className="primary-color p-1">Order Summary</h1>
                                {
                                    cartState.itemsInCart.map((item)=>(
                                    <div class="total flex flex-direction-row p-1">
                                        <h4>{item.title}</h4>
                                        <h4>{item.quantity}</h4>
                                    </div>
                                ))}
                                    <div class="grand total flex flex-direction-row">
                                        <h4>Total Amount</h4>
                                        <h4>{` Rs ${totalCartAmount} `}</h4>
                                    </div>
                                    <div class="total-button flex flex-direction-row">
                                    <Link to="/checkout">   
                                        <button class="btn outline-btn icon-text-btn"
                                            onClick={handleShowRazorPay}
                                        > 
                                            Place Order
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </>
                )
                
            }
            
        </div>
    )
}
export {Checkout};