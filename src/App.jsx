import './App.css'
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { OrbitControls, MeshWobbleMaterial, MeshDistortMaterial, useCursor, useHelper } from "@react-three/drei"
import { DirectionalLightHelper } from "three"
import { useControls } from "leva"

import { SierpinskiCube1, SierpinskiCube2, SierpinskiCubes } from "./components/sierpinskiCube.jsx"


const Cube = ({ position, size, color}) => {
  const ref = useRef()

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z -= delta
    ref.current.position.y = Math.sin(state.clock.elapsedTime)
    ref.current.position.x = Math.cos(state.clock.elapsedTime)
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  
  return (
    <mesh 
      position={position} 
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <boxGeometry args={size} />
      {/*<meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />*/}
      <MeshDistortMaterial />
    </mesh>
  )
}

const Scene = () => {
  const directionalLighrRef = useRef()

  const {lightColor, lightIntensity} = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 2, // initial value
      min: 0,
      max: 5,
      step: 0.01,
    }
  })

  useHelper(directionalLighrRef, DirectionalLightHelper, 2, "white")

  return (
    <>
      <directionalLight 
        position={[7, -5, 8]} 
        intensity={lightIntensity} 
        ref={directionalLighrRef}
        color={lightColor}

      />
      <directionalLight 
        position={[-5, 8, -8]} 
        intensity={0.5}
      />
      <ambientLight intensity={0.9} />

        {/*<group position={[0, 0, 0]}>
          <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />

          <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} />

          <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]} />

          <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]} />
        </group>  */}

      {/*<Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1.5]} />*/}
      {/*<SierpinskiCube2 color={"white"} position={[0, 0, 0]} degree={1} />*/}
      <SierpinskiCubes color={"white"} position={[0, 0, 0]} degree={1} />
      <OrbitControls />
    </>
  )
}


const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App
