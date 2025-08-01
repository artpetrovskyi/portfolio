import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Reveal({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // amount: 0.5
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
    >
      {children}
    </motion.div>
  );
}
