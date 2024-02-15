import { useRef } from "react"
import { OrbitControls, useHelper } from "@react-three/drei"
import { DirectionalLightHelper } from "three"
import { useControls } from "leva"

import { SierpinskiCube0,  SierpinskiCube } from "./sierpinskiCube.jsx"


const SierpinskiCubeScene = () => {
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
      <SierpinskiCube color={"white"} position={[0, 0, 0]} degree={1} />
      <OrbitControls 
        autoRotate
        minDistance={15}
        maxDistance={50}
      />
    </>
  )
}

export default SierpinskiCubeScene