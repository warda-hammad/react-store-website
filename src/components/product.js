import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./context";

export default class Product extends Component {
  render() {
    const { id, img, title, price, inCart } = this.props.product;
    return (
      <>
        <ProductConsumer>
          {(value) => (
            <div className="div-img">
              <Link to="/itemDetails" className="link">
                <img
                  src={img}
                  alt={title}
                  onClick={() => {
                    value.handelDetail(id);
                  }}
                />
              </Link>
              <div className="product-info">
                <h3>{title}</h3>
                <p>
                  {price} <span>$</span>
                </p>
                <button
                  className="addToCart"
                  onClick={() => {
                    value.addToCart(id);
                    value.openModel(id);
                  }}
                  disabled={inCart ? true : false}
                >
                  {inCart ? <p disabled>In The Cart</p> : <p>Add To Cart</p>}
                </button>
                <button
                  className="details"
                  onClick={() => {
                    value.handelDetail(id);
                  }}
                >
                  <Link to="/itemDetails" className="link">
                    details
                  </Link>
                </button>
              </div>
            </div>
          )}
        </ProductConsumer>
      </>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
