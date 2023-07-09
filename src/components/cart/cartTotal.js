import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="total">
        <h4>subTotal: {cartSubtotal} $</h4>
        <h4>tax: {cartTax} $</h4>
        <h4>total: {cartTotal} $</h4>
        <Link to="/">
          <button
            className="clearCart"
            onClick={() => {
              clearCart();
            }}
          >
            <AiOutlineClear />
            <span>clear cart</span>
          </button>
        </Link>
      </div>
    </>
  );
}
