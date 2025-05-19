'use client';

import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

// Suggested questions for the AI assistant
const suggestedQuestions = [
  "What investment products do you offer?",
  "How can I start planning for retirement?",
  "Tell me about your insurance options",
  "What's the difference between stocks and bonds?"
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m FinAssist, your financial assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setMessage('');

    // Set typing indicator
    setIsTyping(true);

    try {
      // Prepare messages for API (excluding the initial greeting if it's the only AI message)
      const apiMessages = messages.length === 1 ? [] : messages.slice(1);
      
      // Format messages for the API
      const formattedMessages = [
        ...apiMessages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        { role: 'user', content: userMessage.text }
      ];
      
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: formattedMessages }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      // Add assistant response to chat
      if (data.message) {
        const aiResponse: Message = {
          id: messages.length + 2,
          text: data.message.content,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }
    } catch (error) {
      console.error('Error fetching from chat API:', error);
      
      // Add fallback response if API fails
      const fallbackResponse: Message = {
        id: messages.length + 2,
        text: 'I apologize, but I encountered an error. Please try again later.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-colors duration-200 z-50"
        aria-label="Open chat assistant"
      >
        <FaRobot className="h-6 w-6" />
      </button>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="h-6 w-6 mr-2" />
                <h3 className="font-semibold">FinAssist</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
                aria-label="Close chat"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-secondary-800 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start mb-1">
                      {msg.sender === 'ai' ? (
                        <FaRobot className="h-4 w-4 mr-1 mt-1 text-primary-600" />
                      ) : (
                        <FaUser className="h-4 w-4 mr-1 mt-1 text-white" />
                      )}
                      <span className={`font-medium ${msg.sender === 'user' ? 'text-white' : 'text-primary-600'}`}>
                        {msg.sender === 'ai' ? 'FinAssist' : 'You'}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white text-secondary-800 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center">
                      <FaSpinner className="h-4 w-4 mr-2 animate-spin text-primary-600" />
                      <span className="text-sm text-secondary-600">FinAssist is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions - only show when conversation is just starting */}
            {messages.length <= 2 && !isTyping && (
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-secondary-600 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="bg-gray-100 hover:bg-gray-200 text-secondary-700 text-xs py-1 px-2 rounded-full transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={message.trim() === '' || isTyping}
                  className="bg-primary-600 text-white p-2 rounded-r-md hover:bg-primary-700 transition-colors duration-200 disabled:bg-gray-400"
                >
                  <FaPaperPlane className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-secondary-500 text-center">
                FinAssist provides general information. For personalized advice, please consult with a financial advisor.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}