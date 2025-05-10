// components/Chatbot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { processMessage } from '@/lib/chatService';

interface Message {
  text: string;
  isUser: boolean;
}

const suggestedQuestions = [
  "How do I sell my license?",
  "How does payment work?",
  "Is my transaction secure?",
  "What software can I sell?",
  "How do I contact support?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm the Soft-Sell assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await processMessage(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble processing your request right now. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    
    setIsLoading(true);
    processMessage(question)
      .then((response: any) => {
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      })
      .catch(() => {
        setMessages(prev => [...prev, { 
          text: "Sorry, I'm having trouble processing your request right now. Please try again later.", 
          isUser: false 
        }]);
      })
      .finally(() => {
        setIsLoading(false);
        setInputValue('');
      });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        dark:bg-blue-600 hover:bg-blue-700 text-white
        bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div 
          className=
            "absolute bottom-16 right-0 w-80 md:w-96 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col border dark:bg-gray-900 dark:border-gray-700 bg-white border-gray-200"
        >
          <div className=
            "p-3 flex items-center justify-between dark:bg-gray-800 text-white bg-blue-500 text-white">
            <h3 className="font-medium">Soft-Sell Assistant</h3>
            <button 
              onClick={toggleChat}
              className="p-1 rounded-full hover:bg-blue-600 focus:outline-none"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          
          <div className= "flex-1 p-4 overflow-y-auto dark:bg-gray-900 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  "mb-2 max-w-[85%] p-3 rounded-lg whitespace-pre-wrap break-words" + 
                  msg.isUser 
                    ? "ml-auto rounded-br-none dark:text-white"
                    : "mr-auto rounded-bl-none dark:text-gray-200 bg-white text-gray-800 border border-gray-200"
                }
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="p-2 border-t flex flex-wrap gap-2 dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className= "text-xs px-2 py-1 rounded-full transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-800">
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 flex items-center gap-2 border-t dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-white border-gray-300 text-gray-900"/>
            <button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === '' || isLoading}
              className={
                "p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" +
                (inputValue.trim() === '' || isLoading)
                  ? "dark:bg-gray-700 dark:text-gray-500 bg-gray-200 text-gray-500"
                  : "dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white bg-blue-500 hover:bg-blue-600 text-white"
              }
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}