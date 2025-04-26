"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FrontendRealm from "@/components/realms/frontend-realm"
import BackendRealm from "@/components/realms/backend-realm"
import Web3Realm from "@/components/realms/web3-realm"

interface RealmSelectorProps {
  realm: string
  onBack: () => void
}

export default function RealmSelector({ realm, onBack }: RealmSelectorProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [realm])

  const renderRealm = () => {
    switch (realm) {
      case "frontend":
        return <FrontendRealm />
      case "backend":
        return <BackendRealm />
      case "web3":
        return <Web3Realm />
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-orbitron mb-4 neon-text-cyan">{getRealName(realm)}</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md">
              This realm is still under construction. Check back soon for an immersive experience!
            </p>
            <Button onClick={onBack} variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-950/30">
              Return to Cosmic Hub
            </Button>
          </div>
        )
    }
  }

  const getRealName = (realmId: string) => {
    switch (realmId) {
      case "frontend":
        return "Frontend Galaxy"
      case "backend":
        return "Backend Core"
      case "web3":
        return "Web3 Chainverse"
      case "smartcontracts":
        return "Smart Contract Vault"
      case "design":
        return "Design Oasis"
      case "research":
        return "Research Station"
      case "devrel":
        return "DevRel Dome"
      case "misc":
        return "Everything Else Portal"
      default:
        return "Unknown Realm"
    }
  }

  const getRealmColor = (realmId: string) => {
    switch (realmId) {
      case "frontend":
        return "#00ffff" // cyan
      case "backend":
        return "#00ff00" // green
      case "web3":
        return "#9900ff" // purple
      case "smartcontracts":
        return "#ff0000" // red
      case "design":
        return "#ff00ff" // magenta
      case "research":
        return "#0088ff" // blue
      case "devrel":
        return "#ffff00" // yellow
      case "misc":
        return "#ff00aa" // pink
      default:
        return "#ffffff" // white
    }
  }

  return (
    <div
      className="w-full h-full relative"
      style={{
        background: `radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,1) 100%)`,
      }}
    >
      {/* Back button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        className="absolute top-4 left-4 z-50 bg-black/50 border border-gray-700 text-white hover:bg-gray-900"
        aria-label="Back to Cosmic Hub"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      {/* Realm title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40">
        <h1
          className="text-2xl md:text-3xl font-orbitron text-center"
          style={{ color: getRealmColor(realm), textShadow: `0 0 10px ${getRealmColor(realm)}` }}
        >
          {getRealName(realm)}
        </h1>
      </div>

      {/* Loading screen */}
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30"
        >
          <div
            className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mb-4"
            style={{ borderColor: `${getRealmColor(realm)} transparent transparent transparent` }}
          />
          <p className="text-lg font-mono" style={{ color: getRealmColor(realm) }}>
            Loading {getRealName(realm)}...
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {renderRealm()}
        </motion.div>
      )}
    </div>
  )
}
