import React from "react";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CartProducts({ item, value }) {
  const { id, title, img, price, count } = item;
  const { increamentCart, decreamentCart, deleteItem } = value;
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="productCartInfo">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="">
              <h3>{title}</h3>
              <p>
                price: {price}
                <span>$</span>
              </p>
            </div>
          </div>
          <div>
            <div className="btnAmount">
              <div>
                <button
                  className="increament"
                  onClick={() => {
                    increamentCart(id);
                  }}
                >
                  <AiOutlinePlus />
                </button>
                <span className="amount">{count}</span>
                <button
                  className="decreament"
                  onClick={() => {
                    decreamentCart(id);
                  }}
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="delete">
                <button
                  className="deletItem"
                  onClick={() => {
                    deleteItem(id);
                  }}
                >
                  <AiOutlineDelete />
                  <span>delete item</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
