import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ModernDigitalClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = () => {
    const hours = String(time.getHours()).padStart(2, '0')
    const minutes = String(time.getMinutes()).padStart(2, '0')
    const seconds = String(time.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    return time.toLocaleDateString(undefined, options)
  }

  return (
    <motion.div
      className="bg-transparent rounded-3xl p-6  w-full shadow-md border border-neutral-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Date Section */}
      <motion.div
        className="text-center mb-4"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm font-medium text-neutral-700 uppercase tracking-wider">
          {formatDate()}
        </p>
      </motion.div>

      {/* Time Section */}
      <motion.div
        className="flex justify-center items-baseline"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex space-x-1">
          {formatTime().split('').map((char, index) => (
            <motion.span
              key={index}
              className={`text-5xl font-mono font-bold ${
                char === ':' ? 'text-neutral-700/80' : 'text-neutral-100'
              } ${char !== ':' && 'bg-neutral-700/50 rounded-lg px-2 py-1'}`}
              animate={{ y: [0, -4, 0], opacity: [0.8, 1, 0.8] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: index * 0.1,
                repeatType: 'reverse',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Seconds Indicator */}
      <motion.div
        className="mt-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-neutral-400/80 to-transparent w-full max-w-xs rounded-full" />
      </motion.div>
    </motion.div>
  )
}

export default ModernDigitalClock
