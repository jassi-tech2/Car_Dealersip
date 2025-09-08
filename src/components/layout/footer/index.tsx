import React from "react";
import "./style.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__brand">
        <div className="footer__logo">(LOGO)</div>
        <p className="footer__desc">
          Excepteur sint occaecat cupidatat non proident, sunt<br />
          in culpa qui officia deserunt mollit anim id es
        </p>
        <div className="footer__contacts">
          <button className="footer__contact-btn">
            ********
          </button>
          <button className="footer__contact-btn">
            gmail@gmail.com
          </button>
        </div>
      </div>
      <div className="footer__subscribe">
        <h3>Join BoxCar</h3>
        <p>Receive pricing updates, shopping tips & more!</p>
        <input className="footer__input" type="email" placeholder="Your email address" />
        <button className="footer__signup-btn">Sign Up</button>
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="footer__links">
      <div>
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Services</li>
          <li>FAQs</li>
          <li>Terms</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>Get in Touch</li>
          <li>Help center</li>
          <li>Live chat</li>
          <li>How it works</li>
        </ul>
      </div>
      <div>
        <h4>Our Brands</h4>
        <ul>
          <li>Toyota</li>
          <li>Porsche</li>
          <li>Audi</li>
          <li>BMW</li>
          <li>Ford</li>
          <li>Nissan</li>
          <li>Peugeot</li>
          <li>Volkswagen</li>
        </ul>
      </div>
      <div>
        <h4>Vehicles Type</h4>
        <ul>
          <li>Sedan</li>
          <li>Hatchback</li>
          <li>SUV</li>
          <li>Hybrid</li>
          <li>Electric</li>
          <li>Coupe</li>
          <li>Truck</li>
          <li>Convertible</li>
        </ul>
      </div>
      <div>
        <h4>Our Mobile App</h4>
        <div className="footer__apps">
          <button className="footer__app-btn">
            Download on the Apple Store
          </button>
          <button className="footer__app-btn">
            Get it on Google Play
          </button>
        </div>
        <h4>Connect With Us</h4>
        <div className="footer__socials">
          <a href="#">F</a>
          <a href="#">T</a>
          <a href="#">I</a>
          <a href="#">L</a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© 2025 exemple.com. All rights reserved.</span>
      <div>
        <a href="#">Terms & Conditions</a> • <a href="#">Privacy Notice</a>
      </div>
    </div>
  </footer>
);
export default Footer;