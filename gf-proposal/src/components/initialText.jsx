import "../styles/InitialText.css";
import { useState, useEffect, useMemo } from "react";

const InitialText = ({ onDone }) => {
  const fullText = `I’ve been thinking about how to say this for a while, and
    I figured the best way is simply—with honesty and heart.
    Spending time with you has been one of the most unexpectedly
    beautiful parts of my life. Whether we’re talking for hours or
    just sharing quiet moments, there’s something about you that
    makes everything feel lighter, brighter, and more real.
    You make me laugh in ways I didn’t know I needed, and you
    make me feel seen in ways I didn’t know I was missing.
    I admire your strength, your kindness, your quirks,
    and the way you move through the world. And the truth
    is—I’d love the chance to walk beside you in it. Not just
    as someone who cares deeply for you, but as someone who
    gets to call you mine`;

  const [index, setIndex] = useState(0);

  const displayed = useMemo(() => fullText.slice(0, index), [index, fullText]);

  useEffect(() => {
    if (index >= fullText.length) {
      onDone?.()
      return;
    }

    const startDelay = setTimeout(() => {
      const intervalId = setInterval(() => {
        setIndex((i) => i + 1);
      }, 50);

      return () => clearInterval(intervalId);
    }, 4000);

    return () => clearTimeout(startDelay);
  }, [index, fullText.length, onDone]);

  return <p className="typewriter">{displayed}</p>;
};

export default InitialText;
