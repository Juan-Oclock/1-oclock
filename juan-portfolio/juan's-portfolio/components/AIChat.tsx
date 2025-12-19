import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I am an AI assistant trained on Juan's professional background. How can I help?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 border border-gray-200 ${
          isOpen ? 'bg-gray-200 rotate-90 text-gray-600' : 'bg-black hover:bg-gray-800 text-white hover:scale-105'
        }`}
        aria-label="Chat with AI"
      >
        {isOpen ? <X size={20} /> : <Sparkles size={20} />}
      </button>

      <div className={`fixed bottom-24 right-6 w-[90vw] sm:w-96 h-[500px] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl z-40 transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
            <Bot size={16} className="text-gray-700" />
          </div>
          <div>
            <h3 className="text-black font-medium text-sm">Portfolio Assistant</h3>
            <p className="text-xs text-gray-400">Powered by Gemini 2.5</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200 flex items-center gap-2">
                <Loader2 size={14} className="animate-spin text-gray-500" />
                <span className="text-xs text-gray-400">Computing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-white text-black rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-200 placeholder:text-gray-400 transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-black transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIChat;