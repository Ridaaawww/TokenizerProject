import React from 'react';

function GuessInput ({ guess, setGuess, onSubmit })
 {
  return (
    <div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Your guess"
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
export default GuessInput
