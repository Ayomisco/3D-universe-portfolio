"use client"

import { Suspense, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Terminal, Mic, Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommandLine from "@/components/command-line"
import AICompanion from "@/components/ai-companion"
import LoadingScreen from "@/components/loading-screen"
import RealmSelector from "@/components/realm-selector"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"

// Dynamically import Three.js scene wrapper
const ThreeSceneWrapper = dynamic(() => import("../components/three-scene-wrapper"), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

export default function HomePage() {
  const [activeRealm, setActiveRealm] = useState<string | null>(null)
  const [showCLI, setShowCLI] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useMobile()
  const { toast } = useToast()

  const handleRealmSelect = (realm: string) => {
    setActiveRealm(realm)
  }

  const handleVoiceNavigation = () => {
    toast({
      title: "Voice Navigation",
      description: "Say a realm name to navigate (e.g., 'Go to Frontend Galaxy')",
    })
    // In a real implementation, this would activate the Web Speech API
  }

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {/* Loading Screen */}
      <Suspense fallback={<LoadingScreen />}>
        {/* 3D Cosmic Hub */}
        {!activeRealm && (
          <div className="w-full h-full">
            <ThreeSceneWrapper onSelectRealm={handleRealmSelect} />
          </div>
        )}

        {/* Active Realm Content */}
        {activeRealm && <RealmSelector realm={activeRealm} onBack={() => setActiveRealm(null)} />}

        {/* Command Line Interface */}
        {showCLI && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 h-64 bg-black/90 border border-emerald-500 rounded-t-lg overflow-hidden z-50"
          >
            <div className="flex justify-between items-center p-2 border-b border-emerald-500">
              <h3 className="text-emerald-500 font-mono">Terminal</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCLI(false)}
                className="text-emerald-500 hover:text-emerald-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CommandLine onNavigate={handleRealmSelect} />
          </motion.div>
        )}

        {/* AI Companion */}
        {showAI && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-20 right-4 w-80 h-96 bg-black/80 border border-purple-500 rounded-lg overflow-hidden z-50"
          >
            <div className="flex justify-between items-center p-2 border-b border-purple-500">
              <h3 className="text-purple-500 font-mono">AI Guide</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAI(false)}
                className="text-purple-500 hover:text-purple-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <AICompanion onNavigate={handleRealmSelect} />
          </motion.div>
        )}

        {/* Traditional Menu */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute top-0 left-0 h-full w-64 bg-black/90 border-r border-cyan-500 z-50"
          >
            <div className="flex justify-between items-center p-4 border-b border-cyan-500">
              <h3 className="text-cyan-500 font-mono">Navigation</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMenu(false)}
                className="text-cyan-500 hover:text-cyan-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 space-y-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm(null)
                }}
              >
                Cosmic Hub (Home)
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("frontend")
                }}
              >
                Frontend Galaxy
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("backend")
                }}
              >
                Backend Core
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("web3")
                }}
              >
                Web3 Chainverse
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("smartcontracts")
                }}
              >
                Smart Contract Vault
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("design")
                }}
              >
                Design Oasis
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("research")
                }}
              >
                Research Station
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("devrel")
                }}
              >
                DevRel Dome
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => {
                  setShowMenu(false)
                  setActiveRealm("misc")
                }}
              >
                Everything Else Portal
              </Button>
            </div>
          </motion.div>
        )}

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-40">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowCLI(!showCLI)}
            className="bg-black/50 border-emerald-500 text-emerald-500 hover:bg-emerald-950/30 hover:text-emerald-400"
            aria-label="Toggle Command Line Interface"
          >
            <Terminal className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleVoiceNavigation}
            className="bg-black/50 border-amber-500 text-amber-500 hover:bg-amber-950/30 hover:text-amber-400"
            aria-label="Voice Navigation"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowAI(!showAI)}
            className="bg-black/50 border-purple-500 text-purple-500 hover:bg-purple-950/30 hover:text-purple-400"
            aria-label="AI Companion"
          >
            <Zap className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowMenu(!showMenu)}
            className="bg-black/50 border-cyan-500 text-cyan-500 hover:bg-cyan-950/30 hover:text-cyan-400"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </Suspense>
    </main>
  )
}
