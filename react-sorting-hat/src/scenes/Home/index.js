import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
          Home
          <Link to="/questions">Questions</Link>
        </div>
    );
};

export default Home;
