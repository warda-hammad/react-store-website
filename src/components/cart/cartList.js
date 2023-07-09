import React from "react";
import CartProducts from "./cartProducts";

export default function cartList({ value }) {
  const { cart } = value;

  return (
    <>
      {cart.map((item) => {
        return <CartProducts key={item.id} item={item} value={value} />;
      })}
    </>
  );
}
