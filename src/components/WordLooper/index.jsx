import { useState, useEffect } from "react";
import "./wordlooper.css";
// eslint-disable-next-line react/prop-types
const WordLooper = ({ words }) => {
  const [displayedWord, setDisplayedWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentIndex];
    let currentLetterIndex = 0;

    const displayLetters = () => {
      // eslint-disable-next-line react/prop-types
      if (currentLetterIndex <= currentWord.length) {
        // eslint-disable-next-line react/prop-types
        setDisplayedWord(currentWord.slice(0, currentLetterIndex));
        currentLetterIndex++;
        setTimeout(displayLetters, 100);
      } else {
        setTimeout(removeLetters, 1000);
      }
    };

    const removeLetters = () => {
      if (currentLetterIndex >= 0) {
        // eslint-disable-next-line react/prop-types
        setDisplayedWord(currentWord.slice(0, currentLetterIndex));
        currentLetterIndex--;
        setTimeout(removeLetters, 100);
      } else {
        // eslint-disable-next-line react/prop-types
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    displayLetters();

    return () => clearTimeout(displayLetters);
  }, [currentIndex, words]);

  return (
    <div className="displayed-word">
      I develop websites using: {displayedWord}
    </div>
  );
};

export default WordLooper;
