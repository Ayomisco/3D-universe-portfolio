"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import LoadingScreen from "@/components/loading-screen"

// Dynamically import the vanilla Three.js implementation
const CosmicScene = dynamic(() => import("./cosmic-scene"), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

interface ThreeSceneWrapperProps {
  onSelectRealm: (realm: string) => void
}

export default function ThreeSceneWrapper({ onSelectRealm }: ThreeSceneWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingScreen />
  }

  return <CosmicScene onSelectRealm={onSelectRealm} />
}
