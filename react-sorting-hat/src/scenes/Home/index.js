import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Home.scss";

const Home = (props) => {
    return (
        <div className="home">
          <h1>Hogwarts School of Witchcraft and Wizardry</h1>
          <h2 className="byline">Dear .............,</h2>
          <div className="body">
            <p>
              We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry.
            </p>
            <p>
              Students shall be requied to report to the Chamber of Reception upon arrival, the dates for which shall be duly advised.
            </p>
            <p>
              Due to resurfaced tweets, the Sorting Hat has been let go. House selection will now be done via a Highly-Advanced Machine Learning Algorithm, which is from the Magical School of Linear Algebra.
            </p>
          </div>
          <NavLink to="/quiz">Quiz</NavLink>
        </div>
    );
};

export default Home;
