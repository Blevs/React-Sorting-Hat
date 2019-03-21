import React from "react";
import Question from "./Question.js";

const Questions = ({questions}) => {
    return (
        <div className="questions">
          {questions.map(q => {
              return <Question {...q} />;
          })}
        </div>
    );
};

export default Questions;
