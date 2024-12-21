"use client";

import { motion } from "framer-motion";
import { Sun, Zap, Sparkles, Star, Moon } from "lucide-react";

export default function WelcomeHeader() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Enhanced background elements */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-500 opacity-30"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Sun size={60} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-5 text-yellow-600 opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap size={40} />
      </motion.div>

      {/* New animated elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-yellow-400 opacity-40"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star size={30} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-yellow-400 opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 z-10"
      >
        <motion.div
          className="flex items-center justify-center gap-1 text-5xl md:text-6xl font-bold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.span
            className="text-yellow-500"
            animate={{
              color: ["#EAB308", "#FCD34D", "#EAB308"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Edit
          </motion.span>
          <motion.span
            className="text-yellow-600 relative"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ++
            <motion.span
              className="absolute -top-1 -right-1 text-yellow-400 text-2xl"
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              *
            </motion.span>
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-2xl md:text-3xl text-gray-800 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          Welcome to EditPlusPlus
        </motion.h1>

        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          {[
            "Edit with ease",
            "Collaborate in real-time",
            "Share your creations",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 text-gray-700"
              whileHover={{ scale: 1.05 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} className="text-yellow-500" />
              </motion.div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-yellow-500 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Sun size={40} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3 text-yellow-400 opacity-30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star size={25} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-yellow-300 opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-1/3 text-yellow-200 opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Moon size={45} />
      </motion.div>
    </div>
  );
}
