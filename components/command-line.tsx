"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface CommandLineProps {
  onNavigate: (realm: string) => void
}

export default function CommandLine({ onNavigate }: CommandLineProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to the Digital Universe Terminal.",
    "Type 'help' for available commands.",
    "> ",
  ])
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    let response = ""

    if (command === "help") {
      response = `
Available commands:
- help: Show this help message
- ls: List all realms
- cd [realm]: Navigate to a realm
- clear: Clear the terminal
- about: About this portfolio
- exit: Close the terminal
      `
    } else if (command === "ls") {
      response = `
Available realms:
- frontend: Frontend Galaxy
- backend: Backend Core
- web3: Web3 Chainverse
- smartcontracts: Smart Contract Vault
- design: Design Oasis
- research: Research Station
- devrel: DevRel Dome
- misc: Everything Else Portal
      `
    } else if (command.startsWith("cd ")) {
      const realm = command.split(" ")[1]
      const validRealms = ["frontend", "backend", "web3", "smartcontracts", "design", "research", "devrel", "misc"]

      if (validRealms.includes(realm)) {
        response = `Navigating to ${realm}...`
        setTimeout(() => onNavigate(realm), 500)
      } else {
        response = `Error: Realm '${realm}' not found. Type 'ls' to see available realms.`
      }
    } else if (command === "clear") {
      setHistory(["Terminal cleared.", "> "])
      return
    } else if (command === "about") {
      response = `
Digital Universe of You - A futuristic portfolio experience.
Created with Next.js 15, React Three Fiber, and TailwindCSS.
Navigate through different realms to explore skills and projects.
      `
    } else if (command === "exit") {
      response = "Closing terminal..."
      setTimeout(() => {
        // This would be handled by the parent component
      }, 500)
    } else if (command === "") {
      response = ""
    } else {
      response = `Command not found: ${command}. Type 'help' for available commands.`
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response, "> "])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="h-full p-4 font-mono text-sm overflow-hidden flex flex-col">
      <div ref={terminalRef} className="flex-1 overflow-y-auto whitespace-pre-wrap text-emerald-500">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "flex" : ""}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex">
        <span className="text-emerald-500">{">"}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-emerald-500 ml-2"
          autoFocus
        />
      </form>
    </div>
  )
}
