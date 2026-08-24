import * as React from "react";

type StaggeredFadeTwoLineProps = {
  line1: string;
  line2: string;
  line1Color?: string;
  line2Color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function StaggeredFadeTwoLine({
  line1,
  line2,
  line1Color = "#FFFFFF",
  line2Color = "#D4A017",
  className,
  style,
}: StaggeredFadeTwoLineProps) {
  return (
    <h1 className={className} style={style}>
      <span className="block" style={{ color: line1Color }}>
        {line1.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: 0,
              animation: "staggerFadeIn 0.4s ease forwards",
              animationDelay: `${i * 0.04}s`,
            }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
      <span style={{ color: line2Color }}>
        {line2.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: 0,
              animation: "staggerFadeIn 0.4s ease forwards",
              animationDelay: `${(line1.length + 1 + i) * 0.04}s`,
            }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </h1>
  );
}
