"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import CosmicHub from "@/components/cosmic-hub"

interface ThreeCanvasProps {
  onSelectRealm: (realm: string) => void
}

export function ThreeCanvas({ onSelectRealm }: ThreeCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }} className="w-full h-full" dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <CosmicHub onSelectRealm={onSelectRealm} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.5} rotateSpeed={0.5} />
    </Canvas>
  )
}

// Add default export to ensure proper dynamic importing
export default { ThreeCanvas }
