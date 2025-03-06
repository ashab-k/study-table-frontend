"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
                color: ["#000", "#3b82f6", "#000"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              STUDY
            </motion.span>
            <motion.span
              className="inline-block font-normal"
              animate={{
                scale: [1, 1.1, 1],
                color: ["#000", "#3b82f6", "#000"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.2,
              }}
            >
              table
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <motion.p
          className="mt-4 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Preparing your personalized learning experience...
        </motion.p>
      </div>
    </div>
  );
}
