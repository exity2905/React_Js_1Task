import React from 'react';

const Message = ({ message }) => {
  return (
    <div className={`message ${message === 'Correct!' ? 'correct' : 'error'}`}>
      {message}
    </div>
  );
};

export default Message;

