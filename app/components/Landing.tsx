"use client";

import { useState, useEffect } from "react";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#10100e] text-[#e8e8cf]" : "bg-[#FFFFE3] text-[#10100e]"}`}
    >
      {/* Navigation */}
      <nav
        className={`border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className={`font-serif text-2xl tracking-tight ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex gap-8 text-sm ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
          >
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "approach")}
              className={`transition-colors cursor-pointer ${isDarkMode ? "hover:text-[#e8e8cf]" : "hover:text-[#10100e]"}`}
            >
              Approach
            </a>
            <a
              href="#system"
              onClick={(e) => handleNavClick(e, "system")}
              className={`transition-colors cursor-pointer ${isDarkMode ? "hover:text-[#e8e8cf]" : "hover:text-[#10100e]"}`}
            >
              System
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleNavClick(e, "architecture")}
              className={`transition-colors cursor-pointer ${isDarkMode ? "hover:text-[#e8e8cf]" : "hover:text-[#10100e]"}`}
            >
              Architecture
            </a>
            <a
              href="#api"
              onClick={(e) => handleNavClick(e, "api")}
              className={`transition-colors cursor-pointer ${isDarkMode ? "hover:text-[#e8e8cf]" : "hover:text-[#10100e]"}`}
            >
              API
            </a>
            <a
              href="#ethics"
              onClick={(e) => handleNavClick(e, "ethics")}
              className={`transition-colors cursor-pointer ${isDarkMode ? "hover:text-[#e8e8cf]" : "hover:text-[#10100e]"}`}
            >
              Ethics
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-[#30302b] text-[#e8e8cf] hover:bg-[#606055]" : "text-[#10100e] hover:bg-[#c0c0ab]"}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isDarkMode ? "bg-[#e8e8cf]" : "bg-[#10100e]"} ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isDarkMode ? "bg-[#e8e8cf]" : "bg-[#10100e]"} ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-out ${isDarkMode ? "bg-[#e8e8cf]" : "bg-[#10100e]"} ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-6 py-4 border-t flex flex-col gap-4 ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
          >
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "approach")}
              className={`transition-colors py-2 ${isDarkMode ? "text-[#c0c0ab] hover:text-[#e8e8cf]" : "text-[#606055] hover:text-[#10100e]"}`}
            >
              Approach
            </a>
            <a
              href="#system"
              onClick={(e) => handleNavClick(e, "system")}
              className={`transition-colors py-2 ${isDarkMode ? "text-[#c0c0ab] hover:text-[#e8e8cf]" : "text-[#606055] hover:text-[#10100e]"}`}
            >
              System
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleNavClick(e, "architecture")}
              className={`transition-colors py-2 ${isDarkMode ? "text-[#c0c0ab] hover:text-[#e8e8cf]" : "text-[#606055] hover:text-[#10100e]"}`}
            >
              Architecture
            </a>
            <a
              href="#api"
              onClick={(e) => handleNavClick(e, "api")}
              className={`transition-colors py-2 ${isDarkMode ? "text-[#c0c0ab] hover:text-[#e8e8cf]" : "text-[#606055] hover:text-[#10100e]"}`}
            >
              API
            </a>
            <a
              href="#ethics"
              onClick={(e) => handleNavClick(e, "ethics")}
              className={`transition-colors py-2 ${isDarkMode ? "text-[#c0c0ab] hover:text-[#e8e8cf]" : "text-[#606055] hover:text-[#10100e]"}`}
            >
              Ethics
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <h1
            className={`font-serif text-7xl tracking-tight mb-6 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span>
          </h1>
          <p
            className={`text-2xl mb-8 font-light tracking-wide ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
          >
            Veiled intelligence through conversation.
          </p>
          <p
            className={`text-lg mb-12 leading-relaxed max-w-3xl ${isDarkMode ? "text-[#c0c0ab]" : "text-[#30302b]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span> is an agentic AI
            honeypot that doesn't block scammers—it talks to them. By quietly
            engaging fraudsters in natural conversations, the system extracts
            behavioral intelligence without ever revealing detection.
          </p>
          <button className="bg-[#d8315b] text-[#FFFFE3] px-8 py-3 text-sm tracking-wide uppercase hover:bg-[#b8285a] transition-colors">
            View Source Code
          </button>
        </div>
      </section>

      {/* The Problem */}
      <section
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#191815]" : "border-[#c0c0ab] bg-[#f8f8dd]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2
              className={`font-serif text-4xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
            >
              The Problem
            </h2>
            <div
              className={`space-y-6 leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#30302b]"}`}
            >
              <p>
                Online fraud has become conversational. Scammers no longer rely
                on static scripts. They probe, adapt, and refine their approach
                based on victim responses. UPI fraud schemes adjust payment
                amounts mid-conversation. Phishing attacks personalize based on
                hesitation patterns. Impersonation attempts pivot when one
                authority figure fails to convince.
              </p>
              <p>
                Traditional defenses—keyword filters, static rules, pattern
                databases—are built for a threat model that no longer exists.
                They assume fraud is a fixed signature that can be matched. But
                real scams are fluid. They test. They iterate. They learn what
                works.
              </p>
              <p>
                The moment you block a scammer, you reveal your detection
                method. They adapt. Your advantage disappears. What you need is
                not a faster block—you need to understand how they think, how
                they adjust, how they operate. You need intelligence, not
                interruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        id="approach"
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2
              className={`font-serif text-4xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
            >
              Our Approach
            </h2>
            <div
              className={`space-y-6 leading-relaxed mb-12 ${isDarkMode ? "text-[#c0c0ab]" : "text-[#30302b]"}`}
            >
              <p>
                Intel<span className="text-[#d8315b]">Hive</span> does not
                classify and block. It observes and engages. When a suspicious
                message arrives, the system doesn't reject it—it starts a
                conversation.
              </p>
              <p>
                An AI agent responds naturally, matching the tone and pace of
                human conversation. It asks questions a real victim would ask.
                It expresses hesitation where appropriate. It allows the scammer
                to continue, to explain their scheme, to reveal their methods.
                The scammer never knows they're talking to a machine.
              </p>
              <p>
                This is engagement before judgment. Instead of making snap
                decisions based on limited data, Intel
                <span className="text-[#d8315b]">Hive</span> gathers evidence
                across multiple message exchanges. It watches for behavioral
                patterns. It extracts payment identifiers, links, contact
                details. It builds a complete intelligence profile.
              </p>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-12 ${isDarkMode ? "border-[#30302b]" : "border-[#c0c0ab]"}`}
            >
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Observe Quietly
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  Never alert the scammer that they've been detected. Silent
                  operation maintains operational security and prevents
                  countermeasures.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Engage Naturally
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  Human-like conversation keeps scammers invested in the
                  exchange. Natural pacing and authentic responses extract more
                  intelligence.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Extract Structurally
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  Automatic identification of payment IDs, URLs, phone numbers,
                  and patterns. Data is organized for immediate downstream use.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Report Responsibly
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  Intelligence is delivered through secure callbacks. All data
                  handling follows defensive security principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IntelHive Works */}
      <section
        id="system"
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#191815]" : "border-[#c0c0ab] bg-[#f8f8dd]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2
            className={`font-serif text-4xl tracking-tight mb-16 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            How IntelHive Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Session Begins",
                desc: "An incoming message enters the system and a new session starts. All context is preserved for multi-turn interaction.",
              },
              {
                step: "02",
                title: "Continuous Assessment",
                desc: "Scam intent is evaluated with each exchange. Classification builds confidence over time rather than making instant judgments.",
              },
              {
                step: "03",
                title: "Agent Activation",
                desc: "Once scam intent is confirmed, an AI agent takes over the conversation with a persona matched to the scenario.",
              },
              {
                step: "04",
                title: "Natural Engagement",
                desc: "The agent converses naturally across multiple turns. Responses feel human, timing is realistic, and the scammer remains engaged.",
              },
              {
                step: "05",
                title: "Incremental Extraction",
                desc: "Intelligence is collected throughout the conversation. Payment IDs, URLs, tactics, and behavioral markers are extracted in real time.",
              },
              {
                step: "06",
                title: "Structured Output",
                desc: "When the session completes, all collected intelligence is formatted as structured JSON and delivered via callback.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`border p-8 shadow-sm ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
              >
                <div
                  className={`text-xs uppercase tracking-widest mb-4 ${isDarkMode ? "text-[#606055]" : "text-[#606055]"}`}
                >
                  Step {item.step}
                </div>
                <h3
                  className={`font-serif text-xl mb-4 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2
            className={`font-serif text-4xl tracking-tight mb-16 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Agentic Decision Making",
                desc: "The AI agent makes its own tactical decisions during each conversation. It decides when to express doubt, when to ask clarifying questions, when to appear convinced. No human oversight required.",
              },
              {
                title: "Multi-Turn Memory",
                desc: "Every exchange is tracked. The agent references earlier parts of the conversation naturally, maintaining continuity that prevents detection through inconsistency.",
              },
              {
                title: "Persona-Based Engagement",
                desc: "Different scams require different victim profiles. Configure personas that match the scenario—cautious elderly users, busy professionals, tech-naive targets.",
              },
              {
                title: "Structured Extraction",
                desc: "Intelligence isn't just saved—it's parsed. UPI IDs, bank details, links, phone numbers, and tactical patterns are automatically identified and formatted for analysis.",
              },
              {
                title: "Session Lifecycle Management",
                desc: "Each conversation is an isolated session with its own state. Sessions can be terminated, archived, or continued. Full conversation history is preserved for evaluation.",
              },
              {
                title: "Built for Scale and Evaluation",
                desc: "Handle hundreds of concurrent scam conversations. Every session is designed to produce measurable intelligence outputs for downstream security systems.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="border-l-2 border-[#d8315b] pl-6">
                  <h3
                    className={`font-serif text-2xl mb-4 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section
        id="architecture"
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#191815]" : "border-[#c0c0ab] bg-[#f8f8dd]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2
            className={`font-serif text-4xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Architecture Overview
          </h2>
          <p
            className={`mb-16 max-w-3xl leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span> is built as a
            modular system. Each layer handles a specific responsibility and
            communicates through well-defined interfaces. This separation allows
            independent scaling and replacement of components.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Detection Layer",
                desc: "Evaluates incoming messages for scam indicators. Assigns confidence scores and determines whether to activate an agent. Filters legitimate traffic before it reaches conversation handling.",
              },
              {
                title: "Agent Orchestrator",
                desc: "Manages all active agent instances. Handles persona selection, response generation, and conversation state. Routes messages to the correct session and maintains isolation.",
              },
              {
                title: "Intelligence Extractor",
                desc: "Runs alongside conversations to identify valuable data. Uses pattern matching and structured parsing to find payment identifiers, URLs, contact information, and behavioral signals.",
              },
              {
                title: "Session Store",
                desc: "Persistent storage for all conversation data. Maintains message history, extracted intelligence, and session metadata. Enables historical analysis and pattern recognition across sessions.",
              },
              {
                title: "Reporting Callback",
                desc: "Delivers intelligence to downstream systems when sessions end. Sends structured JSON payloads to registered endpoints with all extracted data and conversation context.",
              },
              {
                title: "Configuration Layer",
                desc: "Control interface for persona templates, detection thresholds, callback endpoints, and evaluation criteria. Changes take effect without restarting active sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`border p-8 shadow-sm ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API-First System */}
      <section
        id="api"
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2
            className={`font-serif text-4xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            API-First System
          </h2>
          <p
            className={`mb-16 max-w-3xl leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
          >
            Intel<span className="text-[#d8315b]">Hive</span> is controlled
            entirely through a REST API. Every conversation is managed as an
            independent session with its own lifecycle. Inputs and outputs are
            structured JSON, making integration with existing security
            infrastructure straightforward.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3
                className={`font-mono text-sm uppercase tracking-widest mb-6 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
              >
                Session-Driven API
              </h3>
              <div
                className={`space-y-4 text-sm ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
              >
                {[
                  {
                    endpoint: "POST /session/create",
                    desc: "Initialize a new conversation session. Returns a session ID and sets up initial agent state with the specified persona.",
                  },
                  {
                    endpoint: "POST /session/:id/message",
                    desc: "Submit an incoming message to an active session. Agent generates a response while extracting intelligence in the background.",
                  },
                  {
                    endpoint: "GET /session/:id/intelligence",
                    desc: "Retrieve currently extracted intelligence for an ongoing session without terminating it. Useful for real-time monitoring.",
                  },
                  {
                    endpoint: "POST /session/:id/terminate",
                    desc: "End the session and trigger the final intelligence callback. All extracted data and conversation history are delivered.",
                  },
                ].map((item) => (
                  <div
                    key={item.endpoint}
                    className={`border-l-2 pl-4 ${isDarkMode ? "border-[#30302b]" : "border-[#c0c0ab]"}`}
                  >
                    <span className="font-mono text-[#d8315b]">
                      {item.endpoint}
                    </span>
                    <p className="mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className={`font-mono text-sm uppercase tracking-widest mb-6 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
              >
                Intelligence Output
              </h3>
              <div className="bg-[#191815] border border-[#30302b] p-6 font-mono text-xs text-[#e8e8cf] overflow-x-auto">
                <div className="space-y-1">
                  <div>{"{"}</div>
                  <div className="pl-4">"session_id": "ses_a1b2c3d4e5",</div>
                  <div className="pl-4">
                    "started_at": "2026-02-02T14:23:17Z",
                  </div>
                  <div className="pl-4">
                    "ended_at": "2026-02-02T14:29:03Z",
                  </div>
                  <div className="pl-4">"classification": "upi_fraud",</div>
                  <div className="pl-4">"extracted": {"{"}</div>
                  <div className="pl-8">"upi_ids": ["scammer@paytm"],</div>
                  <div className="pl-8">
                    "phone_numbers": ["+919876543210"],
                  </div>
                  <div className="pl-8">"urls": ["https://fake-bank.com"],</div>
                  <div className="pl-8">
                    "tactics": ["urgency", "authority"]
                  </div>
                  <div className="pl-4">{"}"},</div>
                  <div className="pl-4">"conversation": {"{"}</div>
                  <div className="pl-8">"total_turns": 7,</div>
                  <div className="pl-8">
                    "agent_persona": "cautious_elderly",
                  </div>
                  <div className="pl-8">"scammer_engagement": "high"</div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"}</div>
                </div>
              </div>
              <p
                className={`text-sm mt-6 leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
              >
                Every completed session produces a structured intelligence
                report. This JSON payload is sent to your registered callback
                endpoint automatically.
              </p>
            </div>
          </div>

          <div
            className={`border-t pt-12 ${isDarkMode ? "border-[#30302b]" : "border-[#c0c0ab]"}`}
          >
            <h3
              className={`font-mono text-sm uppercase tracking-widest mb-6 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
            >
              Integration Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Authentication",
                  desc: "All API calls require an API key in the Authorization header. Keys can be scoped to specific operations and rate limits.",
                },
                {
                  title: "Callback Endpoint",
                  desc: "You must register a callback URL that receives intelligence reports. The endpoint must be HTTPS and return 2xx status codes.",
                },
                {
                  title: "Rate Limits",
                  desc: "Default limits are 100 concurrent sessions and 1000 messages per hour. Contact for higher limits or dedicated infrastructure.",
                },
              ].map((item) => (
                <div key={item.title} className="text-sm">
                  <div className="font-mono text-[#d8315b] mb-2">
                    {item.title}
                  </div>
                  <p
                    className={`leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Responsibility */}
      <section
        id="ethics"
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#191815]" : "border-[#c0c0ab] bg-[#f8f8dd]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2
            className={`font-serif text-4xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
          >
            Ethics & Responsibility
          </h2>
          <div
            className={`max-w-4xl space-y-8 leading-relaxed ${isDarkMode ? "text-[#c0c0ab]" : "text-[#30302b]"}`}
          >
            <p>
              Intel<span className="text-[#d8315b]">Hive</span> is a defensive
              security system. It observes, it collects intelligence, but it
              does not attack. The system operates under strict ethical
              constraints designed to ensure responsible use of conversational
              AI in security contexts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "No Impersonation",
                  desc: "Agent personas never impersonate real people, companies, or government entities. All identities are fictional and exist solely for intelligence collection purposes.",
                },
                {
                  title: "No Illegal Instructions",
                  desc: "The system does not provide guidance for illegal activities, circumvention techniques, or harmful actions. Engagement is purely observational.",
                },
                {
                  title: "Responsible Intelligence Handling",
                  desc: "Extracted data is treated as sensitive security intelligence. Access controls, encryption, and audit trails ensure proper stewardship of collected information.",
                },
                {
                  title: "Transparency in Reporting",
                  desc: "All intelligence outputs clearly indicate source, collection method, and confidence levels. Downstream systems receive complete context for decision-making.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`border-l-2 pl-6 ${isDarkMode ? "border-[#30302b]" : "border-[#c0c0ab]"}`}
                >
                  <h3
                    className={`font-serif text-xl mb-3 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="pt-6">
              Organizations deploying Intel
              <span className="text-[#d8315b]">Hive</span> are responsible for
              ensuring their use complies with applicable laws governing
              electronic communication, data collection, and cybersecurity
              operations in their jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#10100e]" : "border-[#c0c0ab] bg-[#FFFFE3]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`font-serif text-5xl tracking-tight mb-8 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
            >
              Patience Over Speed.
              <br />
              Intelligence Over Interruption.
              <br />
              Observation Over Action.
            </h2>
            <p
              className={`text-lg leading-relaxed mb-12 ${isDarkMode ? "text-[#c0c0ab]" : "text-[#606055]"}`}
            >
              The best defense is not the fastest block—it's the deepest
              understanding. Intel<span className="text-[#d8315b]">Hive</span>{" "}
              doesn't rush to judgment. It watches, listens, and learns. By
              allowing scammers to reveal themselves through conversation, the
              system builds intelligence that static defenses can never capture.
              This is security through silence.
            </p>
            <div
              className={`border-t pt-12 ${isDarkMode ? "border-[#30302b]" : "border-[#c0c0ab]"}`}
            >
              <p
                className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-[#606055]" : "text-[#606055]"}`}
              >
                Silent engagement. Structured intelligence. Responsible defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t ${isDarkMode ? "border-[#30302b] bg-[#191815]" : "border-[#c0c0ab] bg-[#f8f8dd]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div
                className={`font-serif text-xl mb-2 ${isDarkMode ? "text-[#e8e8cf]" : "text-[#10100e]"}`}
              >
                Intel<span className="text-[#d8315b]">Hive</span>
              </div>
              <p
                className={`text-sm ${isDarkMode ? "text-[#606055]" : "text-[#606055]"}`}
              >
                Conversational intelligence for security operations
              </p>
            </div>
          </div>
          <div
            className={`mt-12 pt-8 border-t text-xs ${isDarkMode ? "border-[#30302b] text-[#606055]" : "border-[#c0c0ab] text-[#606055]"}`}
          >
            <p>
              © 2026 Intel<span className="text-[#d8315b]">Hive</span>. All
              intelligence data is handled according to applicable security and
              privacy standards.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
