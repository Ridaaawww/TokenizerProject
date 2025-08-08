import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingDecodeButton({ onOpenGuide }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTokens, setShowTokens] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setShowTokens(true);
      
      // Show tooltip after animation
      setTimeout(() => {
        setShowTooltip(true);
      }, 1000);
      
      // Reset after animation completes
      setTimeout(() => {
        setShowTokens(false);
        setShowTooltip(false);
        setIsClicked(false);
      }, 3000);
    } else {
      // Second click opens the guide
      onOpenGuide();
    }
  };

  const tokens = ["Decode", "Language"].map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        x: Math.cos(index * Math.PI) * 80,
        y: Math.sin(index * Math.PI) * 80
      }}
      exit={{ opacity: 0, scale: 0, rotate: 180 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 200
      }}
      className={`absolute font-mono font-bold text-sm ${
        index === 0 ? 'text-green-400' : 'text-green-300'
      } drop-shadow-[0_0_10px_currentColor] whitespace-nowrap`}
    >
      {word}
    </motion.span>
  ));

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-16 h-16 rounded-full border-2 font-mono font-bold text-sm transition-all duration-300 ${
          isClicked 
            ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.6)]' 
            : 'bg-gradient-to-br from-green-400 to-green-500 border-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]'
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing effect */}
        <div className={`absolute inset-0 rounded-full ${
          isClicked 
            ? 'bg-gradient-to-br from-green-400 to-green-500 animate-pulse' 
            : 'bg-gradient-to-br from-green-400 to-green-500 animate-pulse'
        } opacity-20 blur-sm`}></div>
        
        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {isClicked ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-2xl"
            >
              🔮
            </motion.div>
          ) : (
            <span className="text-xs font-bold">DL</span>
          )}
        </div>

        {/* Token animation overlay */}
        <AnimatePresence>
          {showTokens && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center overflow-visible"
              style={{ width: '200px', height: '200px', left: '-50%', top: '-50%' }}
            >
              {tokens}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-black/90 border border-green-400/30 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] backdrop-blur-sm"
          >
            <p className="text-green-300 text-sm font-mono">
              <span className="text-green-400 font-bold"></span> This is how AI reads your words.
            </p>
            <div className="mt-2 pt-2 border-t border-green-400/20">
              <button
                onClick={onOpenGuide}
                className="w-full px-3 py-1 bg-green-400/20 border border-green-400/40 rounded text-green-400 text-xs font-mono hover:bg-green-400/30 transition-colors duration-200"
              >
                View Full Tokenization Guide
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && !showTooltip && !isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/90 border border-green-400/30 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] backdrop-blur-sm"
          >
            <p className="text-green-300 text-xs font-mono text-center">
              Click to decode language
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
