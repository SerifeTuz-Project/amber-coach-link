import { motion, useInView } from "framer-motion";
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const letterVariant = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.04, duration: 0.3 },
    }),
  };

  if (!mounted) {
    return (
      <h1 className={className} style={style}>
        <span className="block" style={{ color: line1Color }}>{line1}</span>
        <span style={{ color: line2Color }}>{line2}</span>
      </h1>
    );
  }

  return (
    <h1 ref={ref} className={className} style={style}>
      <span className="block" style={{ color: line1Color }}>
        {line1.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            custom={i}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>
      <span style={{ color: line2Color }}>
        {line2.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            custom={line1.length + 1 + i}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
