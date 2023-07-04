import React, { useState } from 'react';

const MessagingForm = ({ sendMessage }) => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(recipient, message);
    setRecipient('');
    setMessage('');
  };

  return (
    <div>
      <h2>Messaging Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessagingForm;
