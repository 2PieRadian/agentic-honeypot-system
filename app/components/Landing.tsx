"use client";

import { useState } from "react";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#fffaff] text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-[#fffaff] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight text-gray-900">
            IntelHive
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "approach")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Approach
            </a>
            <a
              href="#system"
              onClick={(e) => handleNavClick(e, "system")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              System
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleNavClick(e, "architecture")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Architecture
            </a>
            <a
              href="#api"
              onClick={(e) => handleNavClick(e, "api")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              API
            </a>
            <a
              href="#ethics"
              onClick={(e) => handleNavClick(e, "ethics")}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Ethics
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 border-t border-gray-200 bg-[#fffaff] flex flex-col gap-4">
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "approach")}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Approach
            </a>
            <a
              href="#system"
              onClick={(e) => handleNavClick(e, "system")}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              System
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleNavClick(e, "architecture")}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Architecture
            </a>
            <a
              href="#api"
              onClick={(e) => handleNavClick(e, "api")}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              API
            </a>
            <a
              href="#ethics"
              onClick={(e) => handleNavClick(e, "ethics")}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Ethics
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <h1 className="font-serif text-7xl tracking-tight text-gray-900 mb-6">
            IntelHive
          </h1>
          <p className="text-2xl text-gray-600 mb-8 font-light tracking-wide">
            Veiled intelligence through conversation.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl">
            IntelHive is an agentic AI honeypot that doesn't block scammers—it
            talks to them. By quietly engaging fraudsters in natural
            conversations, the system extracts behavioral intelligence without
            ever revealing detection.
          </p>
          <button className="bg-[#d8315b] text-white px-8 py-3 text-sm tracking-wide uppercase hover:bg-[#b8285a] transition-colors">
            View Source Code
          </button>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-8">
              The Problem
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
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
      <section id="approach" className="border-t border-gray-200 bg-[#fffaff]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-8">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
              <p>
                IntelHive does not classify and block. It observes and engages.
                When a suspicious message arrives, the system doesn't reject
                it—it starts a conversation.
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
                decisions based on limited data, IntelHive gathers evidence
                across multiple message exchanges. It watches for behavioral
                patterns. It extracts payment identifiers, links, contact
                details. It builds a complete intelligence profile.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-12">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Observe Quietly
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Never alert the scammer that they've been detected. Silent
                  operation maintains operational security and prevents
                  countermeasures.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Engage Naturally
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Human-like conversation keeps scammers invested in the
                  exchange. Natural pacing and authentic responses extract more
                  intelligence.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Extract Structurally
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatic identification of payment IDs, URLs, phone numbers,
                  and patterns. Data is organized for immediate downstream use.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-3">
                  Report Responsibly
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Intelligence is delivered through secure callbacks. All data
                  handling follows defensive security principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IntelHive Works */}
      <section id="system" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-16">
            How IntelHive Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 01
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Session Begins
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                An incoming message enters the system and a new session starts.
                All context is preserved for multi-turn interaction.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 02
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Continuous Assessment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scam intent is evaluated with each exchange. Classification
                builds confidence over time rather than making instant
                judgments.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 03
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Agent Activation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Once scam intent is confirmed, an AI agent takes over the
                conversation with a persona matched to the scenario.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 04
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Natural Engagement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The agent converses naturally across multiple turns. Responses
                feel human, timing is realistic, and the scammer remains
                engaged.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 05
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Incremental Extraction
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Intelligence is collected throughout the conversation. Payment
                IDs, URLs, tactics, and behavioral markers are extracted in real
                time.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Step 06
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Structured Output
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When the session completes, all collected intelligence is
                formatted as structured JSON and delivered via callback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="border-t border-gray-200 bg-[#fffaff]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-16">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Agentic Decision Making
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The AI agent makes its own tactical decisions during each
                  conversation. It decides when to express doubt, when to ask
                  clarifying questions, when to appear convinced. No human
                  oversight required.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Multi-Turn Memory
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every exchange is tracked. The agent references earlier parts
                  of the conversation naturally, maintaining continuity that
                  prevents detection through inconsistency.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Persona-Based Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Different scams require different victim profiles. Configure
                  personas that match the scenario—cautious elderly users, busy
                  professionals, tech-naive targets.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Structured Extraction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligence isn't just saved—it's parsed. UPI IDs, bank
                  details, links, phone numbers, and tactical patterns are
                  automatically identified and formatted for analysis.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Session Lifecycle Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Each conversation is an isolated session with its own state.
                  Sessions can be terminated, archived, or continued. Full
                  conversation history is preserved for evaluation.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-[#d8315b] pl-6">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">
                  Built for Scale and Evaluation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Handle hundreds of concurrent scam conversations. Every
                  session is designed to produce measurable intelligence outputs
                  for downstream security systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-8">
            Architecture Overview
          </h2>
          <p className="text-gray-600 mb-16 max-w-3xl leading-relaxed">
            IntelHive is built as a modular system. Each layer handles a
            specific responsibility and communicates through well-defined
            interfaces. This separation allows independent scaling and
            replacement of components.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Detection Layer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evaluates incoming messages for scam indicators. Assigns
                confidence scores and determines whether to activate an agent.
                Filters legitimate traffic before it reaches conversation
                handling.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Agent Orchestrator
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Manages all active agent instances. Handles persona selection,
                response generation, and conversation state. Routes messages to
                the correct session and maintains isolation.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Intelligence Extractor
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Runs alongside conversations to identify valuable data. Uses
                pattern matching and structured parsing to find payment
                identifiers, URLs, contact information, and behavioral signals.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Session Store
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Persistent storage for all conversation data. Maintains message
                history, extracted intelligence, and session metadata. Enables
                historical analysis and pattern recognition across sessions.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Reporting Callback
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Delivers intelligence to downstream systems when sessions end.
                Sends structured JSON payloads to registered endpoints with all
                extracted data and conversation context.
              </p>
            </div>
            <div className="border border-gray-200 bg-[#fffaff] p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#d8315b] mb-4">
                Configuration Layer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Control interface for persona templates, detection thresholds,
                callback endpoints, and evaluation criteria. Changes take effect
                without restarting active sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API-First System */}
      <section id="api" className="border-t border-gray-200 bg-[#fffaff]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-8">
            API-First System
          </h2>
          <p className="text-gray-600 mb-16 max-w-3xl leading-relaxed">
            IntelHive is controlled entirely through a REST API. Every
            conversation is managed as an independent session with its own
            lifecycle. Inputs and outputs are structured JSON, making
            integration with existing security infrastructure straightforward.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-gray-900 mb-6">
                Session-Driven API
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="border-l-2 border-gray-200 pl-4">
                  <span className="font-mono text-[#d8315b]">
                    POST /session/create
                  </span>
                  <p className="mt-2 leading-relaxed">
                    Initialize a new conversation session. Returns a session ID
                    and sets up initial agent state with the specified persona.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <span className="font-mono text-[#d8315b]">
                    POST /session/:id/message
                  </span>
                  <p className="mt-2 leading-relaxed">
                    Submit an incoming message to an active session. Agent
                    generates a response while extracting intelligence in the
                    background.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <span className="font-mono text-[#d8315b]">
                    GET /session/:id/intelligence
                  </span>
                  <p className="mt-2 leading-relaxed">
                    Retrieve currently extracted intelligence for an ongoing
                    session without terminating it. Useful for real-time
                    monitoring.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <span className="font-mono text-[#d8315b]">
                    POST /session/:id/terminate
                  </span>
                  <p className="mt-2 leading-relaxed">
                    End the session and trigger the final intelligence callback.
                    All extracted data and conversation history are delivered.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-gray-900 mb-6">
                Intelligence Output
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 font-mono text-xs text-gray-800 overflow-x-auto">
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
              <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                Every completed session produces a structured intelligence
                report. This JSON payload is sent to your registered callback
                endpoint automatically.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h3 className="font-mono text-sm uppercase tracking-widest text-gray-900 mb-6">
              Integration Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-sm">
                <div className="font-mono text-[#d8315b] mb-2">
                  Authentication
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All API calls require an API key in the Authorization header.
                  Keys can be scoped to specific operations and rate limits.
                </p>
              </div>
              <div className="text-sm">
                <div className="font-mono text-[#d8315b] mb-2">
                  Callback Endpoint
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You must register a callback URL that receives intelligence
                  reports. The endpoint must be HTTPS and return 2xx status
                  codes.
                </p>
              </div>
              <div className="text-sm">
                <div className="font-mono text-[#d8315b] mb-2">Rate Limits</div>
                <p className="text-gray-600 leading-relaxed">
                  Default limits are 100 concurrent sessions and 1000 messages
                  per hour. Contact for higher limits or dedicated
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Responsibility */}
      <section id="ethics" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-8">
            Ethics & Responsibility
          </h2>
          <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed">
            <p>
              IntelHive is a defensive security system. It observes, it collects
              intelligence, but it does not attack. The system operates under
              strict ethical constraints designed to ensure responsible use of
              conversational AI in security contexts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  No Impersonation
                </h3>
                <p className="text-sm text-gray-600">
                  Agent personas never impersonate real people, companies, or
                  government entities. All identities are fictional and exist
                  solely for intelligence collection purposes.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  No Illegal Instructions
                </h3>
                <p className="text-sm text-gray-600">
                  The system does not provide guidance for illegal activities,
                  circumvention techniques, or harmful actions. Engagement is
                  purely observational.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  Responsible Intelligence Handling
                </h3>
                <p className="text-sm text-gray-600">
                  Extracted data is treated as sensitive security intelligence.
                  Access controls, encryption, and audit trails ensure proper
                  stewardship of collected information.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  Transparency in Reporting
                </h3>
                <p className="text-sm text-gray-600">
                  All intelligence outputs clearly indicate source, collection
                  method, and confidence levels. Downstream systems receive
                  complete context for decision-making.
                </p>
              </div>
            </div>
            <p className="pt-6">
              Organizations deploying IntelHive are responsible for ensuring
              their use complies with applicable laws governing electronic
              communication, data collection, and cybersecurity operations in
              their jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-gray-200 bg-[#fffaff]">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl tracking-tight text-gray-900 mb-8">
              Patience Over Speed.
              <br />
              Intelligence Over Interruption.
              <br />
              Observation Over Action.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              The best defense is not the fastest block—it's the deepest
              understanding. IntelHive doesn't rush to judgment. It watches,
              listens, and learns. By allowing scammers to reveal themselves
              through conversation, the system builds intelligence that static
              defenses can never capture. This is security through silence.
            </p>
            <div className="border-t border-gray-200 pt-12">
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Silent engagement. Structured intelligence. Responsible defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-serif text-xl text-gray-900 mb-2">
                IntelHive
              </div>
              <p className="text-sm text-gray-500">
                Conversational intelligence for security operations
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-500">
            <p>
              © 2026 IntelHive. All intelligence data is handled according to
              applicable security and privacy standards.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
