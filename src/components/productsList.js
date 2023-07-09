import React from "react";
import "./home-section.css";
import { itemData } from "../data";
import { ProductConsumer } from "./context";
import Product from "./product";

export default class ProductsList extends React.Component {
  state = {
    productData: itemData,
  };
  render() {
    return (
      <div className="products-section">
        <ProductConsumer>
          {(value) => {
            return value.productData.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}
