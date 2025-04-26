"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Sphere } from "@react-three/drei"
import type { Group } from "three"
import { motion } from "framer-motion-3d"

// Define the realms with their positions and colors
const realms = [
  { id: "frontend", name: "Frontend Galaxy", position: [5, 2, 0], color: "#00ffff" },
  { id: "backend", name: "Backend Core", position: [-5, 3, 0], color: "#00ff00" },
  { id: "web3", name: "Web3 Chainverse", position: [0, 5, 0], color: "#9900ff" },
  { id: "smartcontracts", name: "Smart Contract Vault", position: [0, -5, 0], color: "#ff0000" },
  { id: "design", name: "Design Oasis", position: [5, -3, 0], color: "#ff00ff" },
  { id: "research", name: "Research Station", position: [-5, -2, 0], color: "#0088ff" },
  { id: "devrel", name: "DevRel Dome", position: [3, 0, 5], color: "#ffff00" },
  { id: "misc", name: "Everything Else", position: [-3, 0, -5], color: "#ff00aa" },
]

interface CosmicHubProps {
  onSelectRealm: (realm: string) => void
}

export default function CosmicHub({ onSelectRealm }: CosmicHubProps) {
  const [hoveredRealm, setHoveredRealm] = useState<string | null>(null)
  const groupRef = useRef<Group>(null)

  // Rotate the entire cosmic hub slowly
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central hub sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Title */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
        lineHeight={1.2}
        font="/fonts/Orbitron-Bold.ttf"
      >
        Digital Universe of You
      </Text>

      {/* Realm planets */}
      {realms.map((realm) => (
        <group key={realm.id} position={realm.position}>
          <motion.mesh
            whileHover={{ scale: 1.2 }}
            onClick={() => onSelectRealm(realm.id)}
            onPointerOver={() => setHoveredRealm(realm.id)}
            onPointerOut={() => setHoveredRealm(null)}
            animate={{
              scale: hoveredRealm === realm.id ? 1.2 : 1,
              y: hoveredRealm === realm.id ? realm.position[1] + 0.2 : realm.position[1],
            }}
          >
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color={realm.color}
              emissive={realm.color}
              emissiveIntensity={0.8}
              metalness={0.5}
              roughness={0.3}
            />
          </motion.mesh>

          {/* Realm name */}
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.3}
            color={realm.color}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Orbitron-Regular.ttf"
          >
            {realm.name}
          </Text>

          {/* Orbit line */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry
              args={[
                Math.sqrt(realm.position[0] ** 2 + realm.position[1] ** 2 + realm.position[2] ** 2) - 0.1,
                Math.sqrt(realm.position[0] ** 2 + realm.position[1] ** 2 + realm.position[2] ** 2) + 0.1,
                64,
              ]}
            />
            <meshBasicMaterial color={realm.color} opacity={0.3} transparent={true} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
