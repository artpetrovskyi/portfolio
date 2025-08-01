import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Required (warning in console):
// html {
//  position: relative;
// }

interface Props {
  children: React.ReactNode;
}
export default function Reveal({ children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
