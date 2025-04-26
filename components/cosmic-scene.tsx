"use client"

import { useRef, useState, useEffect } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as THREE from "three"

interface CosmicSceneProps {
  onSelectRealm: (realm: string) => void
}

export default function CosmicScene({ onSelectRealm }: CosmicSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scene, setScene] = useState<THREE.Scene | null>(null)
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [controls, setControls] = useState<OrbitControls | null>(null)

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return

    // Create scene
    const newScene = new THREE.Scene()

    // Create camera
    const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    newCamera.position.z = 15

    // Create renderer
    const newRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    newRenderer.setSize(window.innerWidth, window.innerHeight)
    newRenderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(newRenderer.domElement)

    // Create controls
    const newControls = new OrbitControls(newCamera, newRenderer.domElement)
    newControls.enableDamping = true
    newControls.dampingFactor = 0.05

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    newScene.add(ambientLight)

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    newScene.add(pointLight)

    // Create central hub sphere
    const hubGeometry = new THREE.SphereGeometry(1, 32, 32)
    const hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    })
    const hubMesh = new THREE.Mesh(hubGeometry, hubMaterial)
    newScene.add(hubMesh)

    // Define realms
    const realms = [
      { id: "frontend", name: "Frontend Galaxy", position: [5, 2, 0], color: 0x00ffff },
      { id: "backend", name: "Backend Core", position: [-5, 3, 0], color: 0x00ff00 },
      { id: "web3", name: "Web3 Chainverse", position: [0, 5, 0], color: 0x9900ff },
      { id: "smartcontracts", name: "Smart Contract Vault", position: [0, -5, 0], color: 0xff0000 },
      { id: "design", name: "Design Oasis", position: [5, -3, 0], color: 0xff00ff },
      { id: "research", name: "Research Station", position: [-5, -2, 0], color: 0x0088ff },
      { id: "devrel", name: "DevRel Dome", position: [3, 0, 5], color: 0xffff00 },
      { id: "misc", name: "Everything Else", position: [-3, 0, -5], color: 0xff00aa },
    ]

    // Create realm planets
    realms.forEach((realm) => {
      const realmGeometry = new THREE.SphereGeometry(0.8, 32, 32)
      const realmMaterial = new THREE.MeshStandardMaterial({
        color: realm.color,
        emissive: realm.color,
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.3,
      })
      const realmMesh = new THREE.Mesh(realmGeometry, realmMaterial)
      realmMesh.position.set(realm.position[0], realm.position[1], realm.position[2])
      realmMesh.userData = { id: realm.id }
      newScene.add(realmMesh)

      // Create orbit line
      const distance = Math.sqrt(realm.position[0] ** 2 + realm.position[1] ** 2 + realm.position[2] ** 2)
      const orbitGeometry = new THREE.RingGeometry(distance - 0.1, distance + 0.1, 64)
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: realm.color,
        opacity: 0.3,
        transparent: true,
        side: THREE.DoubleSide,
      })
      const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial)
      orbitMesh.rotation.x = Math.PI / 2
      newScene.add(orbitMesh)
    })

    // Add stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 5000
    const starPositions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 200
      starPositions[i + 1] = (Math.random() - 0.5) * 200
      starPositions[i + 2] = (Math.random() - 0.5) * 200
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    newScene.add(stars)

    // Handle window resize
    const handleResize = () => {
      if (!newCamera || !newRenderer) return

      newCamera.aspect = window.innerWidth / window.innerHeight
      newCamera.updateProjectionMatrix()
      newRenderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Handle click events
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleClick = (event: MouseEvent) => {
      if (!newCamera || !newScene || !newRenderer) return

      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, newCamera)

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(newScene.children)

      if (intersects.length > 0) {
        const object = intersects[0].object
        if (object.userData && object.userData.id) {
          onSelectRealm(object.userData.id)
        }
      }
    }

    window.addEventListener("click", handleClick)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (newControls) newControls.update()

      // Rotate the hub
      hubMesh.rotation.y += 0.005

      if (newRenderer && newScene && newCamera) {
        newRenderer.render(newScene, newCamera)
      }
    }

    animate()

    // Set state
    setScene(newScene)
    setCamera(newCamera)
    setRenderer(newRenderer)
    setControls(newControls)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("click", handleClick)

      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement)
      }

      if (scene) {
        // Dispose geometries and materials
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()

            if (object.material instanceof THREE.Material) {
              object.material.dispose()
            } else if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            }
          }
        })
      }

      if (renderer) {
        renderer.dispose()
      }
    }
  }, [onSelectRealm])

  return <div ref={containerRef} className="w-full h-full" />
}
