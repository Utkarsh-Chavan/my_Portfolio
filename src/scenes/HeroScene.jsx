import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { useScene } from './SceneController'

function Particles() {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const count = 250
    const values = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 1) {
      values[i] = (Math.random() - 0.5) * 8
    }

    return values
  }, [])

  useFrame((state) => {
    const { x, y } = state.pointer

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0004
      pointsRef.current.rotation.x += 0.0002

      pointsRef.current.position.x +=
        (x * 0.05 - pointsRef.current.position.x) * 0.01

      pointsRef.current.position.y +=
        (y * 0.05 - pointsRef.current.position.y) * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#9da5b1"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.45}
      />
    </points>
  )
}

function DigitalCore() {
  const { sceneState } = useScene()

  const groupRef = useRef()
  const coreRef = useRef()
  const ringOneRef = useRef()
  const ringTwoRef = useRef()
  const lightRef = useRef()

  useFrame((state) => {
    const { x, y } = state.pointer
    const time = state.clock.elapsedTime

    // Core assembly during loading
    if (groupRef.current) {
      let targetScale = 0.85
      let targetX = 0
      let targetY = 0

      if (sceneState === 'loading') {
        targetScale = 0.15
      }

      if (sceneState === 'about') {
        targetScale = 0.65
        targetX = 0.35
        targetY = 0.15
      }

      const currentScale = groupRef.current.scale.x

      const nextScale =
        currentScale + (targetScale - currentScale) * 0.04

      groupRef.current.scale.setScalar(nextScale)

      groupRef.current.position.x +=
        (targetX - groupRef.current.position.x) * 0.04

      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.04
    }

    // Central core rotation + mouse interaction
    if (coreRef.current) {
      const automaticY = time * 0.15
      const automaticX = time * 0.05

      const mouseY = x * 0.35
      const mouseX = -y * 0.25

      coreRef.current.rotation.y +=
        (automaticY + mouseY - coreRef.current.rotation.y) * 0.05

      coreRef.current.rotation.x +=
        (automaticX + mouseX - coreRef.current.rotation.x) * 0.05
    }

    // Orbital ring 1
    if (ringOneRef.current) {
      ringOneRef.current.rotation.x += 0.002
      ringOneRef.current.rotation.z += 0.0015
      ringOneRef.current.rotation.y += x * 0.001
    }

    // Orbital ring 2
    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.y -= 0.0015
      ringTwoRef.current.rotation.z += 0.001
      ringTwoRef.current.rotation.x += y * 0.001
    }

    // Central light breathing effect
    if (lightRef.current) {
      const pulse = Math.sin(time * 1.5)

      lightRef.current.intensity = 1.6 + pulse * 0.25
    }
  })

  return (
    <group ref={groupRef} scale={0.15}>

      {/* Central Energy Core */}
      <mesh>
        <sphereGeometry args={[0.16, 32, 32]} />

        <meshBasicMaterial
          color="#9ccaff"
          toneMapped={false}
        />
      </mesh>

      {/* Energy Light */}
      <pointLight
        ref={lightRef}
        color="#7aa7d9"
        intensity={1.8}
        distance={3}
      />

      {/* Central Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.75, 2]} />

        <meshStandardMaterial
          color="#b8c0ca"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Transparent Outer Shell */}
      <mesh scale={1.25}>
        <icosahedronGeometry args={[0.75, 2]} />

        <meshPhysicalMaterial
          color="#dce8f5"
          transparent
          opacity={0.12}
          roughness={0.08}
          metalness={0.15}
          transmission={0.65}
          thickness={0.3}
        />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh
        ref={ringOneRef}
        rotation={[Math.PI / 2.5, 0, 0]}
      >
        <torusGeometry
          args={[1.15, 0.008, 16, 100]}
        />

        <meshBasicMaterial color="#8d96a3" />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh
        ref={ringTwoRef}
        rotation={[Math.PI / 3, 0.4, 0]}
      >
        <torusGeometry
          args={[1.4, 0.005, 16, 100]}
        />

        <meshBasicMaterial color="#59616d" />
      </mesh>

    </group>
  )
}

function ResponsiveDigitalCore() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 5.5

  const position = isMobile ? [0, 0.3, 0] : [1.0, 0, 0]
  const scale = isMobile ? 0.7 : 0.9

  return (
    <group position={position} scale={scale}>
      <DigitalCore />
    </group>
  )
}

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
    >
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[4, 5, 4]}
        intensity={1.2}
      />

      <pointLight
        position={[-3, -2, 3]}
        intensity={2}
        color="#7aa7d9"
      />

      <pointLight
        position={[3, 1, -2]}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Background particle environment */}
      <Particles />

      {/* Digital Core positioned responsively */}
      <ResponsiveDigitalCore />

    </Canvas>
  )
}

export default HeroScene