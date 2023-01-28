import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function SingleQuestion({ question }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="single-question">
      <div className="question-title">
        <h4>{question.title}</h4>
        <button
          className="plus-minus-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo ? <div className="question-info">{question.info}</div> : ""}
    </div>
  );
}

export default SingleQuestion;
