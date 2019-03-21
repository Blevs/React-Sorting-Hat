import React from "react";
import questions from "./questions.js";

const Questions = (props) => {
    return (
        <div>
          <h1> Questions </h1>
          <div>
            {questions.map(q => {
                return (
                    <div>
                      <h2>{q.question}</h2>
                      {q.answers.map(a => <div points={a.points}>{a.text}</div>)}
                    </div>
                );
            })}
          </div>
        </div>
    );
};

export default Questions;
      
