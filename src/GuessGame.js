import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

const GuessGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    if (userGuess < randomNumber) {
      setMessage('Try a larger number');
    } else if (userGuess > randomNumber) {
      setMessage('Try a smaller number');
    } else {
      setMessage('Correct!');
    }
    setAttempts(attempts + 1);
    setUserGuess('');
  };

  return (
    <div className="guess-game">
      <h2>Guess the Number (1-100)</h2>
      <GuessForm userGuess={userGuess} setUserGuess={setUserGuess} handleGuess={handleGuess} />
      <Message message={message} />
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default GuessGame;
