import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DetailedTokenizationGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-black/95 border border-green-400/30 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.3)] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-green-400/20 p-6 sticky top-0 bg-black/95 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-400 font-mono">
                <span className="text-green-400 animate-pulse">{'>'}</span> TOKENIZATION_GUIDE
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
          <div className="p-6 space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} INTRODUCTION
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <p className="text-white leading-relaxed">
                  Tokenization isn't random at all. There are rules, but they depend on the type of tokenizer being used.
                  For LLMs like GPT-2/GPT-3/GPT-4, the rules come from the Byte Pair Encoding (BPE) tokenizer they use, and they're surprisingly specific.
                </p>
                <p className="text-green-300 mt-3 font-mono text-sm">
                  Let me break it down in a way that'll make you "see the Matrix":
                </p>
              </div>
            </div>

            {/* Rule 1 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_1: TOKENIZERS_DONT_SPLIT_BY_WORDS
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">1️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">First Rule: Tokenizers don't split by words</h4>
                </div>
                <p className="text-white mb-3">
                  <span className="text-red-400 font-bold">Mistaken belief:</span> "One word = one token."
                </p>
                <p className="text-white mb-4">
                  <span className="text-green-400 font-bold">Reality:</span> Tokens are chunks of text that might be whole words, parts of words, or even single characters.
                </p>
                <div className="bg-black/50 border border-green-400/20 rounded-lg p-3 font-mono text-sm">
                  <p className="text-green-300 mb-2">Example:</p>
                  <p className="text-blue-300">"understanding" → ["under", "stand", "ing"]</p>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_2: SPACE_MATTERS
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">2️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">Space matters</h4>
                </div>
                <p className="text-white mb-3">
                  In GPT tokenizers, a space before a word is part of the token.
                </p>
                <p className="text-white mb-3">
                  "hello" and " hello" are different tokens.
                </p>
                <p className="text-white mb-4">
                  <span className="text-green-400 font-bold">Why?</span> The tokenizer learns from raw text where spaces occur.
                </p>
                <div className="bg-black/50 border border-green-400/20 rounded-lg p-3 font-mono text-sm">
                  <p className="text-green-300 mb-2">Example:</p>
                  <p className="text-blue-300">"Hello world" → ["Hello", " world"]</p>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_3: FREQUENT_PATTERNS
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">3️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">Frequent patterns = smaller token count</h4>
                </div>
                <p className="text-white mb-3">
                  BPE is trained to store common patterns as single tokens to be efficient.
                </p>
                <p className="text-white mb-3">
                  Frequent words like "the", "and", "of" each get their own single token.
                </p>
                <p className="text-white mb-4">
                  Rare words get broken down into smaller parts.
                </p>
              </div>
            </div>

            {/* Rule 4 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_4: SPECIAL_CHARACTERS_AND_CASING
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">4️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">Special characters and casing matter</h4>
                </div>
                <p className="text-white mb-3">
                  "Hello" ≠ "hello" (different token IDs)
                </p>
                <p className="text-white mb-4">
                  Emojis, punctuation, and symbols may be their own tokens.
                </p>
                <div className="bg-black/50 border border-green-400/20 rounded-lg p-3 font-mono text-sm">
                  <p className="text-green-300 mb-2">Examples:</p>
                  <p className="text-blue-300">"🙂" → ["🙂"]</p>
                  <p className="text-blue-300">"C++" → ["C", "++"]</p>
                </div>
              </div>
            </div>

            {/* Rule 5 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_5: ALL_TEXT_AS_BYTES
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">5️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">All text is treated as bytes before splitting</h4>
                </div>
                <p className="text-white mb-3">
                  GPT tokenizers first convert text into UTF-8 bytes.
                </p>
                <p className="text-white mb-4">
                  This is why even weird characters or languages you've never seen still work — they're just bytes to the tokenizer.
                </p>
              </div>
            </div>

            {/* Rule 6 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_6: NO_LANGUAGE_AWARENESS
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">6️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">No language awareness</h4>
                </div>
                <p className="text-white mb-3">
                  Tokenizers don't know grammar or meaning — they only care about patterns from training data.
                </p>
                <p className="text-white mb-4">
                  "cat" and "dog" have no special relationship, just different token IDs.
                </p>
              </div>
            </div>

            {/* Rule 7 */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} RULE_7: SPECIAL_TOKENS
              </h3>
              <div className="bg-black/30 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">7️⃣</span>
                  <h4 className="text-green-300 font-mono font-bold">Special tokens are reserved</h4>
                </div>
                <p className="text-white mb-3">
                  Models have special tokens like:
                </p>
                <ul className="list-disc list-inside text-white ml-4 mb-4 space-y-1">
                  <li><span className="text-green-400 font-mono">&lt;|endoftext|&gt;</span> — marks text end</li>
                  <li><span className="text-green-400 font-mono">&lt;|system|&gt;</span>, <span className="text-green-400 font-mono">&lt;|user|&gt;</span> — in chat formats</li>
                </ul>
                <p className="text-white">
                  These have fixed IDs and aren't split further.
                </p>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-green-400 font-mono text-lg mb-4 animate-pulse">
                {'>'} SUMMARY
              </h3>
              <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📌</span>
                  <h4 className="text-green-300 font-mono font-bold">In short:</h4>
                </div>
                <p className="text-white leading-relaxed">
                  Tokens are just statistical slices of text, shaped by frequency patterns in the training corpus.
                  Spaces, punctuation, casing, and even byte-level quirks all matter.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
