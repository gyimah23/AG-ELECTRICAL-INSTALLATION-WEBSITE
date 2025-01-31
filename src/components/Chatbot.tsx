import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusSquare, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { chatbotResponses } from '../data/chatbot-responses';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Find matching response
    const response = chatbotResponses.find(r => 
      input.toLowerCase().includes(r.question.toLowerCase())
    );

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response 
          ? response.answer
          : "I'm not sure about that. Please ask about our services, working hours, contact information, or booking process."
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass-effect rounded-lg w-80 overflow-hidden mb-4"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">PowerPro Assistant</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white/70 hover:text-white"
                >
                  <MinusSquare className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="chat-messages p-4 h-80 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-900 p-2 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setIsMinimized(false)}
            className="glass-effect mb-4 p-3 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Maximize2 className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {!isOpen && !isMinimized && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}