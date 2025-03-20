import React from 'react';

const GuessForm = ({ userGuess, setUserGuess, handleGuess }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="guess-form">
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
    </form>
  );
};

export default GuessForm;

