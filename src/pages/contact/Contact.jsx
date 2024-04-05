import React from "react";
import Transition from "../../components/transition/Transition";

import "./contact.css";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Contact = () => {
  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                Feel free to write me a message <span>or let's be social!</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form action="">
                <div className="input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                  <textarea type="text" placeholder="Message" rows={6} />
                </div>
                <div className="input">
                  <input type="text" placeholder="Email" />
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>


        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Socials</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p>
                  <a href="#">Instagram</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">Twitter</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Contact);
