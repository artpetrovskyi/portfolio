import { motion } from "motion/react";
import type { JSX } from "react";

interface Props {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  tag: Wrapper = "p",
  className,
  delay = 0,
}: Props) {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
