import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelOpen, closeModel } = value;
          const { img, title, price } = value.modelProduct;
          if (!modelOpen) {
            return null;
          } else {
            return (
              <div className="modelConrainer">
                <div className="modelContect">
                  <div className="modelImg">
                    <img src={img} alt={title} />
                  </div>
                  <div className="modelProductInfo">
                    <h3>{title}</h3>
                    <p>
                      price: {price} <span>$</span>
                    </p>
                    <Link to="/products" className="link">
                      <button
                        onClick={() => {
                          closeModel();
                        }}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart" className="link">
                      <button
                        onClick={() => {
                          closeModel();
                        }}
                      >
                        go to the cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
