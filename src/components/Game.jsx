import React, { useState, useEffect } from 'react';
import { encoding_for_model } from "@dqbd/tiktoken";
import { motion, AnimatePresence } from "framer-motion";





{/*Set up basic game layout

Hardcode a few sentences

Let user input token guess

Check guess vs. actual

Reveal result, update streak*/}


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
    "I love building games like this one."
  ];
  //storing states of the game
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState("");
  const [highScore, sethighScore] = useState(0)


  // Function to encode text into tokens using tiktoken
  const getToken = (text) => {
    const enc = encoding_for_model("gpt-3.5-turbo");
    const tokens = enc.encode(text);
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
  }

  return (
 <>
     <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-8">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-xl w-full border border-white/20">
      <h1 className="text-3xl font-bold mb-6"> Guess the Token Count</h1>
      <div className="text-lg mb-4 text-center max-w-xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-lg mb-4"
          >
            {sentences[index]}
          </motion.p>
        </AnimatePresence>
      </div>


      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="p-2 rounded text-white bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your guess"
      />

      <button
        onClick={guessToken}
        className="mt-4 bg-blue-500 px-6 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>

      {result && (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          {result}
        </motion.p>
      )}

     
     <div className='mt-6 text-center,py-2'>
 <motion.span
  key={streak}
  initial={{ scale: 0.8 }}
  animate={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="text-green-400 font-bold"
>
  🔥 Streak: {streak} |🏆 High Score: {highScore}
</motion.span>

     </div>
    
    </div>
    </div>
    </>
  );
}
