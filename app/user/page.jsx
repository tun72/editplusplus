'use client'

import { motion } from "framer-motion"
import { Sun, Cloud, Zap, Sparkles } from 'lucide-react'

export default function WelcomeHeader() {
    return (
        <div className="h-[90vh]  flex flex-col items-center justify-center p-4 overflow-hidden relative ">
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-10 left-10 text-yellow-500 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Sun size={60} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-10 text-yellow-500"
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Cloud size={80} />
            </motion.div>
            <motion.div
                className="absolute top-1/2 left-5 text-yellow-600 opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Zap size={40} />
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
                    <span className="text-yellow-500">Edit</span>
                    <span className="text-yellow-600 relative">
                        ++
                        <motion.span
                            className="absolute -top-1 -right-1 text-yellow-400 text-2xl"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            *
                        </motion.span>
                    </span>
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
                    {['Edit with ease', 'Collaborate in real-time', 'Share your creations'].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center space-x-2 text-gray-700"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles size={20} className="text-yellow-500" />
                            <span>{feature}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    )
}

