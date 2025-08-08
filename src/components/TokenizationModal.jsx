import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TokenizationModal({ isOpen, onClose }) {
  const handleLearnMore = () => {
    // Open the full resource about tokenization
    window.open('http://github.com/SumanthRH/tokenization/', '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-black/90 border border-green-400/30 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.3)] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-green-400/20 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-green-400 font-mono">
                <span className="text-green-400 animate-pulse">{'>'}</span> TOKENIZATION_EXPLAINER
              </h2>
              <button
                onClick={onClose}
                className="text-green-400 hover:text-white transition-colors duration-200 p-2 hover:bg-green-400/10 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Code Snippet */}
            <div>
              <h3 className="text-green-400 font-mono text-sm mb-3 animate-pulse">
                {'>'} CODE_SNIPPET
              </h3>
              <div className="bg-black/50 border border-green-400/20 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-300 overflow-x-auto">
{`// Tokenizer in action

from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("gpt2")

print(tokenizer.encode("Let's understand tokens")) 

# Output: [5756, 338, 1833, 16326]

print(tokenizer.batch_decode(encode("Let's understand tokens"))) # convert token ids to tokens

# Output: ['Let', "'s", ' understand', ' tokens']//`}
                </pre>
              </div>
            </div>

            {/* Explanation */}
            <div>
              <h3 className="text-green-400 font-mono text-sm mb-3 animate-pulse">
                {'>'} EXPLANATION
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <p className="text-white leading-relaxed">
                  The tokenizer encodes a piece of text into a sequence of token ids. These token ids are fed into our neural network. The neural network has a special layer in the beginning called the embedding layer. Corresponding to each token id, the embedding layer stores a unique embedding vector. Given the input sequence of token ids, the embedding layer effectively performs a per-token-id lookup to output a sequence of embedding vectors. Before we get any further, we should ask: What are tokens? How do you decide where to break up a piece of text? What are the different ways in which you can break up text?
                </p>
              </div>
            </div>

            {/* Key Concepts */}
            <div>
              <h3 className="text-green-400 font-mono text-sm mb-3 animate-pulse">
                {'>'} KEY_CONCEPTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2">Tokens</h4>
                  <p className="text-white text-sm">
                    Tokens are the basic units that language models process. They can be words, parts of words, or even individual characters.
                  </p>
                </div>
                <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2">Embeddings</h4>
                  <p className="text-white text-sm">
                    Each token ID maps to a unique vector in high-dimensional space that represents the token's meaning.
                  </p>
                </div>
                <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2">Tokenization</h4>
                  <p className="text-white text-sm">
                    The process of breaking down text into tokens using algorithms like BPE (Byte Pair Encoding).
                  </p>
                </div>
                <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2">Vocabulary</h4>
                  <p className="text-white text-sm">
                    The complete set of tokens that a model can recognize and process.
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="flex flex-col items-center pt-4 space-y-4">
              {/* Note about the resource */}
              <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 text-center max-w-md">
                <p className="text-green-300 text-sm font-mono">
                  <span className="text-green-400 font-bold"></span> Gold of a resource! Thanks to{" "}
                  <span className="text-green-400 font-bold">SumanthRH</span> for creating this comprehensive tokenization guide.
                </p>
              </div>
              
              <button
                onClick={handleLearnMore}
                className="px-8 py-3 bg-green-400/20 border-2 border-green-400 rounded-lg font-mono font-bold text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] backdrop-blur-sm flex items-center gap-2"
              >
                <span>LEARN_MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
