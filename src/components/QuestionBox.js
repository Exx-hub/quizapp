import React, { useState } from "react";

function QuestionBox({ question, options, selectedValue }) {
  const [answer, setAnswers] = useState(options);
  return (
    <div className="questionBox">
      <h3 className="question">{question}</h3>
      {answer.map((item, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswers([item]);
            selectedValue(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default QuestionBox;
