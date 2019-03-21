import React from "react";
import Answer from "./Answer";

const Question = ({question, answers}) => {
    return (
        <div className="question">
          <h3>{question}</h3>
          {answers.map(a => <Answer {...a} />)}
        </div>
    );
};

export default Question;
