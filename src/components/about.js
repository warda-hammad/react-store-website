import React from "react";
import "./home-section.css";
import designer from "../images/designer.png";
import { aboutData } from "../data";
import { ProductConsumer } from "./context";

export default class about extends React.Component {
  state = {
    aboutdata: aboutData,
  };
  render() {
    return (
      <>
        <div className="about">
          <h2>about as</h2>
          <div className="about-sections">
            <ProductConsumer>
              {(value) => {
                return value.aboutdata.map((section) => {
                  return (
                    <div key={section.id} className="section1">
                      <img src={section.img} alt={section.title} />
                      <h3>{section.title}</h3>
                      <p>{section.info}</p>
                    </div>
                  );
                });
              }}
            </ProductConsumer>
          </div>
          <h2>our designers</h2>
          <div className="our-designers">
            <div className="designer1">
              <img src={designer} alt="designer" />
              <h3 className="name">Lorem dolo</h3>
              <p className="about-designer">
                onsectetur adipisicing elit Molestiae doloribus non temporibus
                aliquam
              </p>
            </div>
            <div className="designer2">
              <img src={designer} alt="designer" />
              <h3 className="name">sit amet</h3>
              <p className="about-designer">
                velit neque beatae quas ducimus harum quasi officiis eos
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
