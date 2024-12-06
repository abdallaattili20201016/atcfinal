import React, { useState } from "react";
import "../../styles/Styles.css";
import "../../styles/Messages.css";
import Navbar from "../../components/Navbar";
import personImage from 'C:/Users/USER/Documents/GitHub/atcfinal/src/assets/images/person.jpeg';

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      contact: "yousef (Trainer)",
      chat: [
        {
          sender: "yousef",
          content: "Hi there! How are you?",
          time: "10:00 AM",
        },
        {
          sender: "Me",
          content: "I’m good, thank you! How about you?",
          time: "10:05 AM",
        },
        {
          sender: "yousef",
          content:
            "Doing great! Just wanted to inform you about the course update.",
          time: "10:10 AM",
        },
      ],
    },
    {
      id: 2,
      contact: "Admin",
      chat: [
        {
          sender: "Admin",
          content: "System maintenance is scheduled for Nov 25.",
          time: "2:00 PM",
        },
        { sender: "Me", content: "Thanks for the update!", time: "2:10 PM" },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  // Add a new message to the chat
  const handleSendMessage = () => {
    if (!selectedChat || newMessage.trim() === "") return; // Prevent sending if no chat is selected or message is empty

    const updatedMessages = messages.map((message) => {
      if (message.id === selectedChat.id) {
        return {
          ...message,
          chat: [
            ...message.chat,
            {
              sender: "Me",
              content: newMessage,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ],
        };
      }
      return message;
    });

    setMessages(updatedMessages);
    setSelectedChat(
      updatedMessages.find((message) => message.id === selectedChat.id)
    ); // Update selectedChat
    setNewMessage(""); // Clear the textarea
  };

  return (
    <>
      <Navbar />
      <div className="ViewPage">
          <center><h1 class="pageTitle">Messages</h1></center>


        {/* Messages List */}
        <div className="messages-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-item ${
                selectedChat?.id === message.id ? "active-chat" : ""
              }`}
              onClick={() => setSelectedChat(message)}
            >
             <span className="contactImg">
            <img src={personImage} alt="Person" />
            </span>
              <h3>{message.contact}</h3>
            </div>
          ))}
        </div>

        {/* Chat Overlay */}
        {selectedChat && (
          <div className="chat-overlay">
            <div className="chatArea">
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
                    key={`${selectedChat.id}-${index}`}
                    className={`chat-message ${
                      msg.sender === "Me" ? "user-message" : "contact-message"
                    }`}
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
