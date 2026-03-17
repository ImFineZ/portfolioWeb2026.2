// Controller - Typing animation logic
import { useState, useEffect } from 'react';

export function useTypingController(fullText: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText, speed]);

  return displayedText;
}

export function useBlinkingCursor(interval: number = 530) {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, interval);
    return () => clearInterval(cursorInterval);
  }, [interval]);

  return showCursor;
}
