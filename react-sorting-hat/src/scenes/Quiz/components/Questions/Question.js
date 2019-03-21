import React from "react";
import Answer from "./Answer";

const Question = ({question, answers, questionIdx, choice, chooseAnswer}) => {
    return (
        <div className="question">
          <h3>{question}</h3>
          {answers.map((a, aidx) => <Answer {...a}
                                            questionIdx={questionIdx}
                                            answerIdx={aidx}
                                            chosen={choice && choice.answerIdx === aidx}
                                            chooseAnswer={chooseAnswer}
                                    />)}
        </div>
    );
};

export default Question;
