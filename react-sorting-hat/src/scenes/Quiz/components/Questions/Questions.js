import React from "react";
import Question from "./Question.js";

const Questions = ({questions, choices, chooseAnswer}) => {
    return (
        <div className="questions">
          {questions.map((q, qidx) => {
              return <Question {...q}
                               questionIdx={qidx}
                               choice={choices[qidx]}
                               chooseAnswer={chooseAnswer}/>;
          })}
        </div>
    );
};

export default Questions;
