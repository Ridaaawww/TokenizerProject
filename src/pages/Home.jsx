import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-center relative overflow-hidden">
        {/* Matrix-style background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-600 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-green-600 rounded-full animate-ping delay-500"></div>
        </div>

        {/* Main content container */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Game title with terminal effect */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mb-4 text-white" >
              Can You Think Like <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">GPT</span>?
            </h1>
            <div className="w-32 h-0.5 bg-green-400 mx-auto rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
          </motion.div>

          {/* Subtitle with terminal styling */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8 font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Play the token count guessing game that reveals how AI breaks down thoughts one token at a time.
          </motion.p>

          {/* Terminal-style stats */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
                         <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
               <div className="text-green-400 font-mono text-sm">{'>'} AI_ACTIVE</div>
               <div className="text-gray-400 text-xs">Neural networks online</div>
             </div>
             <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
               <div className="text-green-400 font-mono text-sm">{'>'} TOKENS_READY</div>
               <div className="text-gray-400 text-xs">Pattern analysis complete</div>
             </div>
             <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
               <div className="text-green-400 font-mono text-sm">{'>'} SYSTEM_READY</div>
               <div className="text-gray-400 text-xs">Challenge mode enabled</div>
             </div>
          </motion.div> */}

          {/* CTA Button with terminal style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/game">
              <motion.button
                className="group relative px-8 py-3 bg-black border-2 border-green-400 rounded-lg font-mono font-bold text-green-400 text-lg hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(34,197,94,0.6)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                                 <span className="relative z-10 flex items-center justify-center gap-2">
                   <span className="text-green-400">{'>'}</span>
                   <span>START_GUESSING</span>
                   <span className="text-green-400">_</span>
                 </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Terminal-style progress bar */}
          <motion.div
            className="mt-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-2">
              <div className="flex items-center justify-between text-xs text-green-400 font-mono mb-2">
                <span>LOADING...</span>
                <span>100%</span>
              </div>
              <motion.div
                className="h-1 bg-green-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2 }}
              ></motion.div>
            </div>
                         <p className="text-gray-500 text-xs mt-2 font-mono">{'>'} Initializing token prediction engine...</p>
          </motion.div>
        </motion.div>

        {/* Terminal status indicators */}
        <motion.div
          className="absolute bottom-6 left-6 text-green-400 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span>STATUS: ONLINE</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 text-green-400 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span>READY_FOR_INPUT</span>
          </div>
        </motion.div>

        {/* Matrix-style corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-400/30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-green-400/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-green-400/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-400/30"></div>
      </div>
    </>
  );
}

export default Home;
