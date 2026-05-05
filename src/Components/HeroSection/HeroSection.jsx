import React from "react";
import "./HeroSection.css";
import girl from "../../assets/plant.webp";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">It works!</span>

        <h1>
          Try Our Business <br />
          Ideas to grow <br />
          Rapidly
        </h1>

        <p>
          We understand how desperately you want to grow in the business world &
          our motto is to help you with practical idea and plan
        </p>

        <div className="buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">
            ▶ Demo Video
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={girl} alt="girl" className="main-img" />

        <div className="floating-card">
          <div className="icon yellow"></div>
          <div className="icon green"></div>
          <div className="icon blue"></div>
          <div className="icon orange"></div>
        </div>
      </div>

      <div className="brands">
        <span>NETFLIX</span>
        <span>Forbes</span>
        <span>itel</span>
        <span>FedEx</span>
        <span>audiomack</span>
        <span>penguins</span>
        <span>GoToMeeting</span>
      </div>
    </section>
  );
}