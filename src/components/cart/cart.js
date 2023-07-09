import React from "react";
import CartEmpty from "./cartEmpty";
import CartList from "./cartList";
import CartTotal from "./cartTotal";
import { ProductConsumer } from "../context";

export default function cart() {
  return (
    <>
      <h2 className="cartHeader">your cart</h2>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart?.length > 0) {
            return (
              <>
                <CartList value={value} />
                <CartTotal value={value} />
              </>
            );
          } else return <CartEmpty />;
        }}
      </ProductConsumer>
    </>
  );
}
