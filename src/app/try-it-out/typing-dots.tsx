'use client';
import { motion } from "framer-motion";

const Dot = ({ delay = 0 }: { delay?: number }) => (
<motion.div
    className="w-2 h-2 bg-gray-400 rounded-full"
    animate={{
    opacity: [0.3, 1, 0.3],
    y: [0, -2, 0]
    }}
    transition={{
    duration: 1,
    repeat: Infinity,
    delay
    }}
/>
);

const TypingDots = () => (
    <div className="flex gap-1 items-center">
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </div>
  );

export default TypingDots;