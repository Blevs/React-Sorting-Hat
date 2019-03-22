import React from "react";

const Answer = ({text, points, questionIdx, answerIdx, chosen, chooseAnswer}) => {
    return (
        <div className={"answer" + (chosen ? " chosen" : "")}
             onClick={() => chooseAnswer(questionIdx, answerIdx, points)}>
          {text}
        </div>
    );
};

export default Answer;
