import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Assistant</a>
          </div>
          <div className="footer-item">
            <a href="#">Tracker</a>
          </div>
          <div className="footer-item">
            <a href="#">Coach</a>
          </div>
          <div className="footer-item">
            <a href="#">Community</a>
          </div>
          {/* <div className="footer-item">
            <a href="#">Terms</a>
          </div> */}
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Twitter</a>
          </div>
          <div className="footer-item">
            <a href="#">Instagram</a>
          </div>
          <div className="footer-item">
            <a href="#">Facebook</a>
          </div>
          <div className="footer-item">
            <a href="#">Linkedln</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
