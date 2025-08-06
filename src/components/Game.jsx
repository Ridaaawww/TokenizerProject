import React, { useState, useEffect } from 'react';
import { encoding_for_model } from "@dqbd/tiktoken";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from './StarBackground';

export default function Game() {
  //sentences
  const sentences = [
    "I love AI.",
    "Unbelievable opportunities in AI.",
    "Hello  world",
    "Large Language Models are fascinating!",
    "GPT is just predicting the next token.",
    "OpenAI develops powerful AI tools.",
    "React makes building UIs a breeze.",
    "Never stop learning.",
    "AI is transforming the future.",
    "This is a sentence with exactly ten words in it.",
    "Tiktoken counts tokens, not words or characters.",
    "Your guess is as good as mine.",
    "Tokenization is not as simple as it seems.",
    "I love building games like this one.",
    "GPT doesn't think, it predicts the next token.",
    "Transformers use self-attention, not magic.",
    "Tokenization is the unsung hero of NLP.",
    "OpenAI fine-tuned language models on massive corpus",
    "Token limits make prompt engineering an art form.", "Code is poetry for machines.",
    "Every abstraction leaks eventually.",
    "Naming things is the hardest part of programming.",
    "Premature optimization is the root of all evil.",
    "A good API is a love letter to its users.",
    "It works on my machine.",
    "Semicolons are optional, but so is sanity.",
    "JavaScript has types... sorta.",
    "99 little bugs in the code, take one down, patch it around..."


  ];
  //storing states of the game
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState("");
  const [highScore, sethighScore] = useState(() => {
    const saved = localStorage.getItem('tokenGuesserHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [tokenId, setTokenId] = useState([])
  const [decoded, setDecoded] = useState("")

  // Function to encode text into tokens using tiktoken
  const getToken = (text) => {
    const enc = encoding_for_model("gpt-3.5-turbo");
    const tokens = enc.encode(text);
    const tokenArray = Array.from(tokens);
    setTokenId(tokenArray);

    const decoded = tokenArray.map((tokenId) => enc.decode([tokenId]))
    setDecoded(decoded)
    console.log("decoded tokens", decoded)
    return tokens.length
  }

      //function to guess the token count
    const guessToken = () => {
      const actual = getToken(sentences[index])
      const userGuess = parseInt(guess)
      //checking the score and highscore
      if (userGuess == actual) {
        const newStreak = streak + 1
        setStreak(newStreak);
        if (newStreak > highScore) {
          sethighScore(newStreak);
          localStorage.setItem('tokenGuesserHighScore', newStreak.toString());
        }

        setResult(`Correct! the token count is ${actual}`);

      }
      else {
        setResult(`Incorrect! The token count is ${actual}.`);
        setStreak(0);
      }

    //setTimeout to reset guess after 2 seconds
    setTimeout(() => {
      setIndex((index) => (index + 1) % sentences.length);
      setResult("");
      setGuess("");
    }, 3000);

    //resetting the tokenId state after 3 seconds
    setTimeout(() => {
      setTokenId([]);
    }, 3000);
  }

  //function to reset scores
  const resetScores = () => {
    setStreak(0);
    sethighScore(0);
    localStorage.removeItem('tokenGuesserHighScore');
  }

  return (
    <>
    <StarBackground />
      <div className="min-h-screen bg-black text-green-400 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Matrix-style background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-600 rounded-full animate-bounce shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
          <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-green-600 rounded-full animate-ping delay-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <div className="absolute top-1/4 left-1/2 w-0.5 h-0.5 bg-green-300 rounded-full animate-bounce delay-700 shadow-[0_0_6px_rgba(34,197,94,0.3)]"></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <div className="absolute top-3/4 left-1/6 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping delay-1200 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
        </div>

        {/* Corner border elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-400/30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-green-400/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-green-400/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-400/30"></div>

        {/* Main game container */}
        <div className="relative z-10 bg-black/20 backdrop-blur-md border border-green-400/20 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.1)] p-4 md:p-8 max-w-2xl w-full mx-4">
          {/* Header */}
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              <span className="text-green-400 animate-pulse">{'>'}</span> TOKEN_GUESSER
            </h1>
            <div className="w-24 md:w-32 h-0.5 bg-green-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse"></div>
          </div>

          {/* Current sentence display */}
          <div className="mb-6 md:mb-8">
            <div className="text-green-400 font-mono text-sm mb-3 md:mb-4 animate-pulse">{'>'} CURRENT_SENTENCE</div>
            <div className="bg-black/30 border border-green-400/20 rounded-lg p-3 md:p-4 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm md:text-lg text-white font-mono leading-relaxed drop-shadow-[0_0_5px_rgba(34,197,94,0.3)]"
                >
                  {sentences[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Token IDs display */}
          <div className="mb-6 md:mb-8">
            <div className="text-green-400 font-mono text-sm mb-3 md:mb-4 animate-pulse">{'>'} TOKEN_ANALYSIS</div>
            <AnimatePresence>
              {tokenId.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/30 border border-green-400/20 rounded-lg p-3 md:p-4 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                >
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {tokenId.map((id, idx) => (
                      <span
                        key={idx}
                        className="bg-green-400/5 border border-green-400/20 text-green-400 px-1 md:px-2 py-1 rounded text-xs font-mono hover:bg-green-400/20 hover:border-green-400/60 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300 animate-pulse"
                      >
                        {id}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input section */}
          <div className="mb-6 md:mb-8">
            <div className="text-green-400 font-mono text-sm mb-3 md:mb-4 animate-pulse">{'>'} USER_INPUT</div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="flex-1 p-3 bg-black/50 border border-green-400/30 rounded-lg text-green-400 font-mono placeholder:text-green-400/50 focus:border-green-400 focus:outline-none focus:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter token count guess..."
              />
              <button
                onClick={guessToken}
                className="px-4 md:px-6 py-3 bg-black/50 border-2 border-green-400 rounded-lg font-mono font-bold text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] backdrop-blur-sm"
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Result display */}
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-3 md:p-4 backdrop-blur-sm shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                <div className="text-green-400 font-mono text-sm mb-2 animate-pulse">{'>'} RESULT</div>
                <p className="text-white font-mono drop-shadow-[0_0_5px_rgba(34,197,94,0.3)] text-sm md:text-base">{result}</p>
              </div>
            </motion.div>
          )}

          {/* Score display */}
          <div className="text-center">
            <div className="text-green-400 font-mono text-sm mb-3 md:mb-4 animate-pulse">{'>'} SCORE_BOARD</div>
            <div className="bg-black/30 border border-green-400/20 rounded-lg p-3 md:p-4 backdrop-blur-sm shadow-[0_0_25px_rgba(34,197,94,0.2)]">
              <motion.span
                key={streak}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-green-400 font-bold font-mono text-sm md:text-lg drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              >
                🔥 STREAK: {streak} | 🏆 HIGH_SCORE: {highScore}
              </motion.span>
            </div>
            
            {/* Share to Twitter button */}
            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={() => {
                  const tweetText = `🎮 Just achieved a ${streak}-token streak and ${highScore} high score in the Token Guesser game! Can you think like GPT? 🤖 #AI #Tokenization #GPT #CodingGame`;
                  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
                  window.open(tweetUrl, '_blank');
                }}
                className="px-6 py-3 bg-black border-2 border-green-400 rounded-lg font-mono font-bold text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
              >
                <span className="text-xl"></span>
                <span>SHARE_SCORE</span>
              </button>
              
              <button
                onClick={resetScores}
                className="px-6 py-3 bg-black border-2 border-red-400 rounded-lg font-mono font-bold text-red-400 hover:bg-red-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2"
              >
                <span className="text-xl"></span>
                <span>RESET_SCORES</span>
              </button>
            </div>
          </div>

          {/* Status indicators */}
          <div className="flex flex-col md:flex-row justify-between text-green-400 text-xs font-mono mt-6 md:mt-8 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="drop-shadow-[0_0_3px_rgba(34,197,94,0.3)]">GAME_ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="drop-shadow-[0_0_3px_rgba(34,197,94,0.3)]">READY_FOR_GUESS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
