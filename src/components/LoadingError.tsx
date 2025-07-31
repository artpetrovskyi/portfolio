import { motion } from "motion/react";

interface Props {
  text: string;
  error: string | null;
}

export default function LoadingError({ text, error }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-28 flex-col justify-center text-center text-sm text-red-500"
    >
      <p>{text}</p>
      {error && <p>{error}</p>}
    </motion.div>
  );
}
