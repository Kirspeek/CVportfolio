"use client";

import React, { useEffect, useState } from "react";

export default function CodeTypingAnimation({
    style,
    className,
}: {
    style?: React.CSSProperties;
    className?: string;
}) {
    const [codeIndex, setCodeIndex] = useState(0);
    const [displayedCode, setDisplayedCode] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const codeSnippets = [
        "const skills = ['React', 'Next.js', 'TypeScript'];",
        "npm install --save-dev @types/react",
        "export default function Portfolio() {",
        "const { data } = useQuery(['projects']);",
        "async function buildProject() {",
        "const api = await fetch('/api/contact');",
        "import { useState, useEffect } from 'react';",
        "const theme = useTheme();",
        "const router = useRouter();",
        "const [state, dispatch] = useReducer(reducer);",
    ];

    useEffect(() => {
        const cycleCode = () => {
            setIsTyping(true);
            const currentCode = codeSnippets[codeIndex];
            let charIndex = 0;
            setDisplayedCode("");

            const typeInterval = setInterval(() => {
                if (charIndex < currentCode.length) {
                    setDisplayedCode(currentCode.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        setIsTyping(false);
                        setTimeout(() => {
                            setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
                        }, 1000);
                    }, 2000);
                }
            }, 50);

            return () => clearInterval(typeInterval);
        };

        const timer = setTimeout(cycleCode, 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codeIndex]);

    return (
        <div
            className={className}
            style={{
                padding: "16px",
                background: "#1a1a1a",
                borderRadius: "4px",
                border: "1px solid #333",
                minHeight: "80px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "#33ff66",
                position: "relative",
                overflow: "hidden",
                ...style,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    color: "#666",
                    fontSize: "10px",
                }}
            >
                $&gt;
            </div>
            <div
                style={{
                    marginLeft: "24px",
                    wordBreak: "break-all",
                    lineHeight: "1.6",
                }}
            >
                {displayedCode}
                {isTyping && (
                    <span
                        style={{
                            display: "inline-block",
                            width: "8px",
                            height: "14px",
                            background: "#33ff66",
                            marginLeft: "2px",
                            animation: "blink 1s infinite",
                        }}
                    />
                )}
            </div>
            <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}
