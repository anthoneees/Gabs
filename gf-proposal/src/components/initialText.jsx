import "../styles/InitialText.css";
import { useState, useEffect, useMemo } from "react";

const InitialText = ({ onDone }) => {
  const fullText = `Hey Gabby, I am writing this because I know I probably 
  wasn't able to get all of my thoughts out in person. But the past 2 months with you 
  have been some of the best months of my life. Even the smallest things like short
  phone calls have become the best parts of my day. I look forward to hearing your voice
  every day even if its just for a few minutes. Every time I get to see you, I become so excited
  that it makes all the waiting, driving, and planning worth it. Just spending a 
  few days with you makes me so happy. You're one of the 
  most motivated and driven people I've met. Watching you study so hard makes me want 
  to grow too. Not just for myself, but so I can be someone who stand proud next to you. 
  You inspire me in ways I didn't expect and I am so grateful for all of it. I value 
  every moment with you even if its just studying or brain rotting. You're so fun to be 
  around and I genuinely enjoy every second I am able to spend with you. I don't know 
  exactly what the future holds and everything is so uncertain. But I do know that you 
  have become such an important part of my life and there is no one I would rather be 
  with. You've become such an important part of my life, and I want you to know how much 
  that means to me. So, with that being I said I have a question.`;

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
