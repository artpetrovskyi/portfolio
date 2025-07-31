import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

interface Props {
  duration?: number;
  onComplete?: () => void;
}

export default function Loader({ duration = 5, onComplete }: Props) {
  const progress = useMotionValue(0);
  const rounded = useTransform(() => Math.round(progress.get()));

  useEffect(() => {
    const controls = animate(progress, 99, {
      duration,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
    return () => controls.stop();
  }, [duration, onComplete, progress]);

  return (
    <motion.div
      style={{
        opacity: useTransform(progress, [0, 80], [0, 1]),
      }}
      className="relative w-full sm:min-w-96 min-w-64"
    >
      <div className="bg-background absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 p-2 text-sm tabular-nums">
        <motion.span>{rounded}</motion.span>%
      </div>

      <div className="relative h-1 w-full animate-pulse overflow-hidden rounded-full">
        <motion.div
          className="bg-gradient absolute top-0 left-1/2 h-full w-full -translate-x-1/2"
          style={{
            scaleX: useTransform(progress, [0, 99], [0, 1]),
          }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
