import Background from "./components/background.jsx";
import InitialText from "./components/initialText.jsx";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [showNextPart, setShowNextPart] = useState(false);
  const [done, setDone] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const phrases = [
    "Are you sure?",
    "Pretty please?",
    "Come on, say yes!",
    "Please?",
    "Can't we try?",
    "Think about it?",
  ];

  const handleNo = () => {
    setNoClicks((c) => c + 1);
  };
  const handleYes = () => {
    setShowCelebration(true);
  };

  const yesText =
    noClicks === 0
      ? "Of friggin course"
      : phrases[(noClicks - 1) % phrases.length];

  const yesScale = 1 + noClicks * 0.2;
  const noScale = Math.max(1 - noClicks * 0.1, 0.2);

  return (
    <div>
      <Background />

      {!showNextPart ? (
        <div className="container">
          <InitialText onDone={() => setDone(true)} />
          {done && (
            <button
              className="nextButton"
              onClick={() => setShowNextPart(true)}
            >
              Next
            </button>
          )}
        </div>
      ) : !showCelebration ? (
        <div className="container">
          <div className="proposal">
            <h1>Will You Be My Girlfriend?</h1>
            <div className="buttonsRow">
              <button
                className="yesButton"
                onClick={handleYes}
                style={{ transform: `scale(${yesScale})` }}
              >
                {yesText}
              </button>
              <button
                className="noButton"
                onClick={handleNo}
                style={{ transform: `scale(${noScale})` }}
              >
                No I hate you
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="celebration">
          <h1>YAYYYYY :D</h1>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhnbHIxNnh1dW8wNDd2NTk0cTN0bjAyMDR3NzMyd2t5NWI3ZGkwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MhHXeM4SpKrpC/giphy.gif"
            alt="Celebration"
          />
        </div>
      )}
    </div>
  );
}

export default App;
