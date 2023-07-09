import "./home-section.css";
import { React } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";

export default function ItemDetails() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, info, inCart } = value.productDetail;
        return (
          <div className="product-details">
            <div className="img">
              <img
                src={img}
                alt={title}
                onClick={() => {
                  console.log("click img");
                }}
              />
            </div>
            <div className="details-product-info">
              <h3>{title}</h3>
              <p className="info-p">{info}</p>
              <div className="price-p">
                {price} <span>$</span>
              </div>
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
              <button className="back-to-products">
                <Link to="/products" className="link">
                  back to products
                </Link>
              </button>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
