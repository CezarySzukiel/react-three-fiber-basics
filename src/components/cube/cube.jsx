import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei"

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
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />
      {/*<MeshDistortMaterial />*/}
    </mesh>
  )
}

export default Cube 