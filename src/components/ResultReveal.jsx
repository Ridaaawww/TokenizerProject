import React from 'react';
export default function ResultReveal({ tokenCount, tokens, onNext }) {
  return (
    <div>
      <p>Actual token count: {tokenCount}</p>
      <div>
        {tokens.map((t, i) => (
          <span key={i}>[{t}] </span>
        ))}
      </div>
      <button onClick={onNext}>Next Sentence</button>
    </div>
  );
}
