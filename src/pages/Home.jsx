import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';

function Home() {
  return (
    <>
    <StarBackground />
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-white to-slate-100 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
        Can You Think Like <span className="text-purple-600">GPT </span>?
      </h1>

      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Play the token guessing game that reveals how AI breaks down thoughts one token at a time.
      </motion.p>
        <Link to="/game">
      <motion.button
        className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        
      >
        Start Guessing
      </motion.button>
        </Link>
    </div>
        </>

  );
}

export default Home;
