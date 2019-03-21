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
    useEffect(() => {
        console.log(choices);
    });
    return (
        <div>
          <h1> Questions </h1>
          <Questions questions={questions} choices={choices} chooseAnswer={chooseAnswer} />
        </div>
    );
};

export default Quiz;
      
