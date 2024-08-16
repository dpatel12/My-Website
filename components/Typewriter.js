import React, { useState, useEffect } from 'react';

const Typewriter = ({
  initialText,
  words,
  typingSpeed = 100,   // Time per character in milliseconds
  deletingSpeed = 100, // Time per character in milliseconds
  delayBetweenPhrases = 300, // Delay between typing and deleting in milliseconds
  initialDelay = 3000  // Initial delay before starting the typing effect
}) => {
    const [text, setText] = useState(initialText);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [typing, setTyping] = useState(false);

    // Start typing after the initial delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setTyping(true);
        }, initialDelay); // Use initialDelay for the initial delay before starting

        return () => clearTimeout(timer);
    }, [initialDelay]);

    // Typing and deleting logic
    useEffect(() => {
        if (!typing) return;

        let timeout;
        if (!reverse && charIndex < words[wordIndex].length) {
            timeout = setTimeout(() => {
                setText(initialText + words[wordIndex].slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (!reverse && charIndex === words[wordIndex].length) {
            timeout = setTimeout(() => {
                setReverse(true);
            }, delayBetweenPhrases);
        } else if (reverse && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(initialText + words[wordIndex].slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, deletingSpeed);
        } else if (reverse && charIndex === 0) {
            timeout = setTimeout(() => {
                setWordIndex((wordIndex + 1) % words.length);
                setReverse(false);
            }, delayBetweenPhrases);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, wordIndex, reverse, typing, initialText, words, typingSpeed, deletingSpeed, delayBetweenPhrases]);

    return (
        <>
            <style>
                {`
                    .cursor {
                        display: inline-block;
                        width: 2px;
                        height: 1em;
                        background-color: currentColor;
                        margin-left: 0.1em;
                        animation: blink-animation 1s steps(2, start) infinite;
                    }

                    @keyframes blink-animation {
                        to {
                            visibility: hidden;
                        }
                    }
                `}
            </style>
            <span className="typewriter">
                {text}
                <span className="cursor"></span>
            </span>
        </>
    );
};

export default Typewriter;
