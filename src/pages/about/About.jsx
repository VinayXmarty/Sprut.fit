import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "How does Spur.fit work exactly?" ,
        content:
        "Spur.fit is an AI-powered fitness copilot designed to assist trainers in managing their clients' fitness journeys more efficiently. It automates tasks like creating personalized workout routines, tracking progress, and client engagement, allowing trainers to focus on building relationships and delivering exceptional training experiences.",
      },
      {
        title: "Can Spur.fit customize workout plans based on individual needs and goals?",
        content:
          " Absolutely! Spur.fit uses advanced algorithms to analyze each client's goals, preferences, and fitness levels, generating tailored workout plans that optimize results and cater to specific needs.",
      },
      {
        title: "How does Spur.fit ensure client progress is accurately tracked?",
        content:
          "Spur.fit utilizes cutting-edge tracking technology to monitor client performance, including exercise completion, progress measurements, and adherence to the program. Trainers can access detailed reports and insights to make informed decisions and adjust plans accordingly.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Supercharge your Fitness Training with Spur.fir
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
          Introducing Spur.fit, the game-changer in fitness training technology.
          With its innovative AI copilot, Spur.fit enables trainers to boost their
          productivity and impact like never before. Craft personalized workout routines,
          track client progress effortlessly, and say goodbye to manual tasks.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 2020</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
              Step into the future of fitness training with Spur.fit. Our groundbreaking AI copilot streamlines operations, empowering trainers to maximize their impact. Say goodbye to manual tasks and hello to personalized client experiences.
              </h3>
              <h3 style={{ textIndent: "100px" }}>
              Spur.fit redefines fitness training, blending innovation with efficiency. Experience the power of automation and personalization, transforming how trainers engage and succeed.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>hello@spur.fit.com</span>
              </p>
              <p>
                <span>Phone: </span> <span>+91 22222 11111</span>
              </p>
              <p>
                <span>Address: </span>{" "}
                <span>512 Banjara Hill, India ,500111</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2024</p>
              </div>
              <div className="award-view">
                <p>Best Fitness Tech Innovation</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>FitnessTech Magazine</p>
              </div>
              <div className="award-project">
                <p>Spur.fit's AI Copilot Technology</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023</p>
              </div>
              <div className="award-view">
                <p>Top Fitness Training Platformn</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>FitnessPros Association</p>
              </div>
              <div className="award-project">
                <p>Spur.fit's Personalized Workout Routines</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2022</p>
              </div>
              <div className="award-view">
                <p>Innovative AI Technology in Fitness</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>HealthTech Innovators</p>
              </div>
              <div className="award-project">
                <p>Spur.fit's Automated Client Progress Tracking</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Top Fitness Software of <br></br>the Year</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p> FitnessTech Awards</p>
              </div>
              <div className="award-project">
                <p>Spur.fit's Client Management Dashboard</p>
              </div>
            </div>
          </div>

          {/* <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2020</p>
              </div>
              <div className="award-view">
                <p>Creative Innovator </p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Design Intelligence Awards</p>
              </div>
              <div className="award-project">
                <p>Interactive Learning Module</p>
              </div>
            </div>
          </div> */}
        </section>

       

        {/* <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to
                hello@curafuturi.com
              </span>
            </p>

            <br />
            <p>
              <span>+1 416 555 1234</span>
            </p>
            <p>
              <span>Instagram • Twitter</span>
            </p>
          </div>
        </section> */}

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
