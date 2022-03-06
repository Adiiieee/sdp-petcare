import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-left"></div>
        <div className="home-content">
          <h2 className="home-title">PetCare</h2>
          <p className="home-description">
            PetCare is a platform for pet owners to find the best care for their
            pets. We provide the best vets for your pets near you and at minimal
            cost.
          </p>
          <Link to="/signup">
            <button className="home-button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
