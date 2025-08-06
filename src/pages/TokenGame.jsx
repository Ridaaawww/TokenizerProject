import React, { useState } from 'react';
import Game from '../components/Game';

function TokenGame() {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-white"> Guess the Token Count</h1>
      <p className="mb-4 text-gray-600">
        Test your intuition for how LLMs break text into tokens, guess the count, and see how close you are!
      </p>

      <Game />
    </div>
  )
}

export default TokenGame
