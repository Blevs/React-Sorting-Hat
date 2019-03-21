import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import questions from "./questions.js";
import { Questions } from "./components/Questions";

const Quiz = (props) => {
    const [choices, setChoices] = useState({});
    const chooseAnswer = (questionIdx, answerIdx, points) => {
        setChoices({...choices,
                    [questionIdx]: { "answerIdx": answerIdx, "points": points }
                   });
    };
    return (
        <div>
          <h1> Questions </h1>
          <Questions questions={questions} choices={choices} chooseAnswer={chooseAnswer} />
          <div >
            <Link
              onClick={event => {
                  return Object.getOwnPropertyNames(choices).length !== questions.length
                      ? event.preventDefault() : null;
              }}
              to={{
                pathname: "/results",
                state: {
                    "choices": choices
                }
            }}>
              See Results
            </Link>
          </div>
        </div>
    );
};

export default Quiz;
      
