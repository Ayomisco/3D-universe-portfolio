"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AICompanionProps {
  onNavigate: (realm: string) => void
}

export default function AICompanion({ onNavigate }: AICompanionProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I'm your AI guide to this Digital Universe. How can I assist you today?" },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      const userInput = input.toLowerCase()

      if (userInput.includes("frontend") || userInput.includes("react") || userInput.includes("ui")) {
        response = "The Frontend Galaxy showcases UI/UX expertise and creative components. Would you like to visit?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("frontend"), 1000)
        }
      } else if (userInput.includes("backend") || userInput.includes("api") || userInput.includes("server")) {
        response = "The Backend Core demonstrates scalable systems and API architecture. Would you like to explore it?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("backend"), 1000)
        }
      } else if (userInput.includes("web3") || userInput.includes("blockchain") || userInput.includes("crypto")) {
        response =
          "The Web3 Chainverse showcases decentralized applications and blockchain expertise. Shall we venture there?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("web3"), 1000)
        }
      } else if (userInput.includes("smart") || userInput.includes("contract") || userInput.includes("solidity")) {
        response =
          "The Smart Contract Vault highlights Solidity expertise and secure contract design. Would you like to see it?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("smartcontracts"), 1000)
        }
      } else if (userInput.includes("design") || userInput.includes("ui/ux") || userInput.includes("graphic")) {
        response = "The Design Oasis showcases graphic design, UI/UX, and motion graphics. Ready to be inspired?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("design"), 1000)
        }
      } else if (userInput.includes("research") || userInput.includes("paper") || userInput.includes("study")) {
        response =
          "The Research Station highlights academic work and thought leadership. Shall we explore the knowledge?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("research"), 1000)
        }
      } else if (userInput.includes("devrel") || userInput.includes("community") || userInput.includes("speaking")) {
        response = "The DevRel Dome showcases community engagement and speaking events. Would you like to connect?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("devrel"), 1000)
        }
      } else if (userInput.includes("everything") || userInput.includes("misc") || userInput.includes("else")) {
        response =
          "The Everything Else Portal contains side projects and interesting experiments. Ready for some surprises?"
        if (userInput.includes("go to") || userInput.includes("visit") || userInput.includes("show me")) {
          setTimeout(() => onNavigate("misc"), 1000)
        }
      } else if (userInput.includes("help") || userInput.includes("guide") || userInput.includes("what can you do")) {
        response =
          "I can help you navigate this portfolio! Ask me about different skills like frontend, backend, web3, etc., or say 'show me [realm name]' to visit a specific area."
      } else {
        response =
          "I'm your guide to this Digital Universe. You can ask me about different realms like Frontend, Backend, Web3, etc., or tell me what you're interested in!"
      }

      setMessages((prev) => [...prev, { role: "ai", content: response }])
    }, 1000)

    setInput("")
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user" ? "bg-purple-900/50 text-white" : "bg-purple-700/30 text-purple-100"
              }`}
            >
              {message.role === "ai" && (
                <div className="flex items-center mb-1">
                  <Sparkles className="h-3 w-3 mr-1 text-purple-300" />
                  <span className="text-xs font-semibold text-purple-300">AI Guide</span>
                </div>
              )}
              <p className="text-sm">{message.content}</p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-purple-900/30 border border-purple-700 rounded-md px-3 py-2 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button type="submit" size="icon" className="bg-purple-700 hover:bg-purple-600 text-white">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
