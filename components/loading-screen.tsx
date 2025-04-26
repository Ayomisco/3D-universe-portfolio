"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing Digital Universe")

  useEffect(() => {
    const loadingTexts = [
      "Initializing Digital Universe",
      "Calibrating Cosmic Coordinates",
      "Generating Stellar Pathways",
      "Establishing Neural Networks",
      "Synchronizing Quantum Particles",
      "Activating Holographic Interface",
    ]

    let interval: NodeJS.Timeout
    let textInterval: NodeJS.Timeout

    // Simulate loading progress
    interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    // Cycle through loading texts
    textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingTexts.length
        return loadingTexts[nextIndex]
      })
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-orbitron neon-text-cyan mb-8">Digital Universe of You</h1>

        <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <p className="text-sm font-mono text-cyan-400 mb-8">
          {loadingText}... {Math.round(progress)}%
        </p>

        <div className="flex space-x-2 justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-purple-500"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
