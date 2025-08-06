import React, { useState } from 'react';
import Game from '../components/Game';
import StarBackground from '../components/StarBackground';

function TokenGame() {
  const [showTips, setShowTips] = useState(false);

  return (
    <>
      <StarBackground />
      <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center p-3 sm:p-4 md:p-8 relative overflow-hidden">
        {/* Matrix-style background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-600 rounded-full animate-bounce shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
          <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-green-600 rounded-full animate-ping delay-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
        </div>

        {/* Corner border elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-400/30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-green-400/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-green-400/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-400/30"></div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-4xl px-2 sm:px-4">
          {/* Header section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white font-mono drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <span className="text-green-400 animate-pulse">{'>'}</span> GUESS_THE_TOKEN_COUNT
            </h1>
            <div className="w-24 xs:w-32 sm:w-40 md:w-48 h-1 bg-green-400 mx-auto rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] animate-pulse"></div>
          </div>

          {/* Description */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="bg-black/30 border border-green-400/20 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-green-400 font-mono leading-relaxed drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
                Test your intuition for how LLMs break text into tokens, guess the count, and see how close you are!
              </p>
              <div className="mt-2 sm:mt-3 md:mt-4 text-xs text-gray-400 font-mono">
                <span className="text-green-400">{'>'}</span> NEURAL_NETWORK_READY
              </div>
            </div>
          </div>

          {/* Game component */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-2xl mx-2 sm:mx-0">
              <Game />
            </div>
          </div>
        </div>

        {/* Status indicators */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 text-green-400 text-xs font-mono">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="drop-shadow-[0_0_3px_rgba(34,197,94,0.3)] text-xs">SYSTEM_ACTIVE</span>
          </div>
        </div>

        <div className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 text-green-400 text-xs font-mono">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="drop-shadow-[0_0_3px_rgba(34,197,94,0.3)] text-xs">TOKENIZER_ONLINE</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TokenGame
