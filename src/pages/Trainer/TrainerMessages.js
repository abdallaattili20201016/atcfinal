import React, { useState } from 'react';
import '../../styles/Styles.css';
import '../../styles/Messages.css';
import TrainerNavbar from '../../components/TrainerNavbar';

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      contact: 'yousef (Trainer)',
      chat: [

        { 
          sender: 'yousef',
           content: 'Hi there! How are you?', 
           time: '10:00 AM' 
        },

        { 
          sender: 'Me',
           content: 'I’m good, thank you! How about you?',
            time: '10:05 AM' 
        },

        { 
          sender: 'yousef', 
          content: 'Doing great! Just wanted to inform you about the course update.',
           time: '10:10 AM' 
        },

      ],
    },
    {
      id: 2,
      contact: 'Admin',
      chat: [
        { 
          sender: 'Admin',
           content: 'System maintenance is scheduled for Nov 25.',
            time: '2:00 PM' 
        },

        { 
          sender: 'Me',
           content: 'Thanks for the update!', 
           time: '2:10 PM' 
        },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Add a new message to the chat
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Prevent empty messages

    const updatedMessages = messages.map((message) => {
      if (message.id === selectedChat.id) {
        return {
          ...message,
          chat: [...message.chat, { sender: 'Me', content: newMessage, time: new Date().toLocaleTimeString() }],
        };
      }
      return message;
    });

    setMessages(updatedMessages);
    setNewMessage(''); // Clear the textarea
  };

  return (
    <>
      <TrainerNavbar />
      <div className="ViewPage">
        <div className="messages-header">
          <h1>Messages</h1>
        </div>

        {/* Messages List */}
        <div className="messages-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className="message-item"
              onClick={() => setSelectedChat(message)}
            >
              <h3>{message.contact}</h3>
            </div>
          ))}
        </div>

        {/* Chat Overlay */}
        {selectedChat && (
          <div className="chat-overlay">
            <div class="chatArea">
            <div className="chat-header">
              <h2>{selectedChat.contact}</h2>
              <button
                className="close-button"
                onClick={() => setSelectedChat(null)}
              >
                ✖
              </button>
            </div>
            <div className="chat-history">
              {selectedChat.chat.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sender === 'Me' ? 'user-message' : 'contact-message'}`}
                >
                  <p className="message-content">{msg.content}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <textarea
                placeholder="Write your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows="3"
              ></textarea>
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessagesPage;
