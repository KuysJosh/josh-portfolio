import { useState, useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 32, pauseDelay = 1600): string {
  const reducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState(reducedMotion ? words[0] || "" : "");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(words[0] || "");
      return;
    }

    const currentWord = words[wordIndex] || "";
    let timeoutId: number;

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeoutId = window.setTimeout(() => {}, 300);
    } else {
      const nextCharIndex = charIndex + (isDeleting ? -1 : 1);
      const delay = isDeleting ? deletingSpeed : typingSpeed;

      timeoutId = window.setTimeout(() => {
        setCharIndex(nextCharIndex);
        setDisplayedText(currentWord.slice(0, nextCharIndex));
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay, reducedMotion]);

  return displayedText;
}

