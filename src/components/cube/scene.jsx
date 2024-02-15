
import { useRef } from "react"
import { OrbitControls, useHelper } from "@react-three/drei"
import { DirectionalLightHelper } from "three"
import { useControls } from "leva"

import Cube from "./cube.jsx"


const CubeScene = () => {
  const directionalLighrRef = useRef()

  const {lightColor, lightIntensity} = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 2, // initial value
      min: 0,
      max: 5,
      step: 0.01,
    },
    
  })

  // useHelper(directionalLighrRef, DirectionalLightHelper, 2, "white")

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

        <group position={[0, 0, 0]}>
          <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />

          <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} />

          <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]} />

          <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]} />
        </group> 

      <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1.5]} />
      <OrbitControls />
    </>
  )
}

export default CubeScene