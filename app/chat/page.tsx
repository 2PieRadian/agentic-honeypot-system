"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";

interface Message {
  id: string;
  content: string;
  sender: "user" | "server";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDarkModeToggle = () => {
    setIsAnimating(true);
    setIsDarkMode(!isDarkMode);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const generateMessageId = () => {
    return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const sendMessageToServer = async (message: string): Promise<string> => {
    // API call to backend
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      return data.reply || "Message received.";
    } catch (error) {
      console.error("Error sending message:", error);
      return "Sorry, there was an error processing your message. Please try again.";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();

    if (!trimmedInput || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: generateMessageId(),
      content: trimmedInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue(""); // Clear input immediately
    setIsLoading(true);

    // Send to server and get response
    const serverResponse = await sendMessageToServer(trimmedInput);

    // Add server response
    const serverMessage: Message = {
      id: generateMessageId(),
      content: serverResponse,
      sender: "server",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, serverMessage]);
    setIsLoading(false);
    inputRef.current?.focus();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${isDarkMode ? "bg-[#10100e] text-[#e8e8cf]" : "bg-[#fffff2] text-[#10100e]"}`}
    >
      {/* Navigation */}
      <nav
        className={`border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#fffff2]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className={`font-serif text-2xl tracking-tight ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span>
          </Link>

          <div className="flex items-center gap-4">
            <span
              className={`text-sm ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
            >
              Live Chat
            </span>

            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkModeToggle}
              className={`p-2 rounded-full cursor-pointer transition-colors ${isDarkMode ? "bg-[#d8315b] text-[#fffff2]" : "text-[#10100e] hover:bg-[#eaead4]"}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${isAnimating ? "animate-spin" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-500 ${isAnimating ? "rotate-[180deg]" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <h2
                className={`font-serif text-3xl tracking-tight mb-4 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
              >
                Start a Conversation
              </h2>
              <p
                className={`text-lg max-w-md ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
              >
                Type a message below to begin engaging with the Intel
                <span className="text-[#d8315b]">Hive</span> system.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-[#d8315b] text-[#fffff2]"
                        : isDarkMode
                          ? "bg-[#30302b] text-[#e8e8cf]"
                          : "bg-[#eaead4] text-[#10100e]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        message.sender === "user"
                          ? "text-[#fffff2]/70"
                          : isDarkMode
                            ? "text-[#c0c0ab]"
                            : "text-[#606055]"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className={`rounded-lg px-4 py-3 ${isDarkMode ? "bg-[#30302b]" : "bg-[#eaead4]"}`}
                  >
                    <div className="flex gap-1">
                      <span
                        className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? "bg-[#c0c0ab]" : "bg-[#606055]"}`}
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? "bg-[#c0c0ab]" : "bg-[#606055]"}`}
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? "bg-[#c0c0ab]" : "bg-[#606055]"}`}
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div
          className={`border-t px-6 py-4 ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#fffff2]"}`}
        >
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className={`flex-1 px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#d8315b] ${
                isDarkMode
                  ? "bg-[#191815] border-[#30302b] text-[#e8e8cf] placeholder-[#606055]"
                  : "bg-[#f7f7e8] border-[#c0c0ab] text-[#10100e] placeholder-[#606055]"
              } disabled:opacity-50`}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#d8315b] text-[#fffff2] px-6 py-3 text-sm tracking-wide uppercase hover:bg-[#b8285a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
