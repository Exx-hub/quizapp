import React from "react";

function Scoreboard({ score, restart }) {
  return (
    <div className="score-board">
      {score === 5 || score === 4 ? (
        <h1 className="result">Amazing!</h1>
      ) : score === 3 ? (
        <h1 className="result">Hmm...not bad!</h1>
      ) : (
        <h1 className="result">You can do better.</h1>
      )}
      <h1 className="score">Your Score is: {score} / 5</h1>
      <button className="playBtn" onClick={restart}>
        Play Again?
      </button>
    </div>
  );
}

export default Scoreboard;
