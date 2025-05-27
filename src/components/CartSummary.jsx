import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CategoryWiseItemList from "./CategoryWiseItemList";
import {clearCart} from "../utils/redux/slices/cartSlice";

const CartSummary = () => {
    const cartItem = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md font-manrope mt-5 ">
            {/* Header */}
            {/*<div className="flex gap-4 items-start border-b pb-4">*/}
            {/*    <img*/}
            {/*        src="https://res.cloudinary.com/dxg9gszax/image/upload/v1658239990/Dominos_pizza_image.jpg"*/}
            {/*        alt="Domino's"*/}
            {/*        className="w-14 h-14 rounded-md object-cover"*/}
            {/*    />*/}
            {/*    <div>*/}
            {/*        <h2 className="text-xl font-semibold">Domino's Pizza</h2>*/}
            {/*        <p className="text-gray-500 text-sm">Rajarajeshwari Nagar</p>*/}
            {/*        <div className="w-6 h-0.5 bg-black mt-1"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Item */}
            {cartItem.length > 0 && <button
                onClick={handleClearCart}
                className="p-2 m-2 rounded-lg font-bold text-black border-2 border-black "
            >Clear Cart
            </button>}

            {cartItem.length === 0 && <h1>Your cart is empty. Please add some items to the cart!</h1>}
            <CategoryWiseItemList itemCards={cartItem}/>

            {/*<div className="flex items-center justify-between py-4 border-b">*/}
            {/*    <div className="flex items-center gap-2">*/}
            {/*        <span className="text-green-600 text-lg">🟢</span>*/}
            {/*        <span className="font-medium">Burger Pizza – Classic Veg</span>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center border px-2 py-1 rounded-md gap-3">*/}
            {/*        <button className="text-lg text-gray-700">−</button>*/}
            {/*        <span className="text-green-700 font-semibold">2</span>*/}
            {/*        <button className="text-lg text-gray-700">+</button>*/}
            {/*    </div>*/}
            {/*    <span className="font-medium">₹250</span>*/}
            {/*</div>*/}


            {/* Bill Details */}
            {/*<div className="mt-6 text-sm text-gray-700">*/}
            {/*    <h3 className="font-semibold text-base mb-3">Bill Details</h3>*/}
            {/*    <div className="flex justify-between py-1">*/}
            {/*        <span>Item Total</span>*/}
            {/*        <span>₹250</span>*/}
            {/*    </div>*/}
            {/*    <div className="flex justify-between py-1">*/}
            {/*        <span>Delivery Fee | 1.3 kms</span>*/}
            {/*        <span className="text-green-600">FREE</span>*/}
            {/*    </div>*/}
            {/*    <div className="flex justify-between py-1">*/}
            {/*        <div className="flex items-center gap-1">*/}
            {/*            <span>GST & Other Charges</span>*/}
            {/*            <span className="text-gray-400 cursor-pointer" title="Government tax">ℹ️</span>*/}
            {/*        </div>*/}
            {/*        <span>₹50.55</span>*/}
            {/*    </div>*/}
            {/*    <div className="border-t my-3"></div>*/}
            {/*    <div className="flex justify-between text-lg font-bold">*/}
            {/*        <span>TO PAY</span>*/}
            {/*        <span>₹301</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default CartSummary;
