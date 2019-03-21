import React from "react";
import questions from "./questions.js";
import { Questions } from "./components/Questions";

const Quiz = (props) => {
    return (
        <div>
          <h1> Questions </h1>
          <Questions questions={questions} />
        </div>
    );
};

export default Quiz;
      
