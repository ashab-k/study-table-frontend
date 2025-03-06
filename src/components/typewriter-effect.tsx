"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterEffect({
  text,
  className,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting to type
    timeout = setTimeout(() => {
      setIsTyping(true);

      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 30); // Speed of typing

      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className={className}>
      {displayText}
      {isTyping && (
        <span className="inline-block w-1 h-4 ml-1 bg-blue-500 animate-pulse"></span>
      )}
    </div>
  );
}
