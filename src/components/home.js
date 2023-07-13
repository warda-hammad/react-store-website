import React from "react";
import "./home-section.css";
import BackGround from "../images/background.jpg";
import ProductsList from "./productsList";
import About from "./about";
import {
  FaGripfire,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <div className="background">
          <div className="img">
            <img src={BackGround} alt="BackGround" />
          </div>
          <div className="overlay"></div>
        </div>
        <div className="info">
          <h1>decor</h1>
          <h3>new and stylish pieces</h3>
          <p>
            Our favorite interior designers reveal their top tips for crafting a
            stylish and inviting home.
          </p>
        </div>
      </div>

      <ProductsList />

      <About />

      <div className="footer">
        <form className="contact">
          <h2>contact us</h2>
          <div>
            <label htmlFor="name">your name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">your email</label>
            <input type="email" id="email" required />
          </div>
          <div className="message">
            <label htmlFor="message">your message</label>
            <textarea
              type="text"
              id="message"
              rows="10"
              maxLength="300"
              required
            />
          </div>
          <div>
            <button id="send" type="submit">
              Send
            </button>
          </div>
        </form>
        <div className="logo">
          <Link to="/" className="link">
            <span>
              decor
              <FaGripfire className="logo-icon" />
            </span>
          </Link>
          <div className="social-icons">
            <FaFacebookSquare className="icon facebook" />
            <FaTwitterSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaYoutubeSquare className="icon" />
          </div>
          <div className="privacy-policy">
            <a href="">Privacy Policy</a>
          </div>
          <div className="terms-of-use">
            <a href="">Terms of Use</a>
          </div>
          <div className="copyright">
            all rights reserved. created by <a href="">warda hammad</a>
          </div>
        </div>
      </div>
    </>
  );
}
