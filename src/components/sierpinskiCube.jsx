import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { OrbitControls, MeshWobbleMaterial, MeshDistortMaterial, useCursor, useHelper } from "@react-three/drei"
import { DirectionalLightHelper } from "three"
const Cube = ({size, position, color}) => {
	return (
		<mesh position={position}>
      		<boxGeometry args={size} />
      		<meshStandardMaterial color={color}/>
      	</mesh>
	)
}

const SierpinskiCube1 = ({ position, color }) => {
  return (
    <mesh position={position}>
    	<Cube size={[1, 1, 3]} position={[-1, 1, 0]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[1, 1, 0]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[1, -1, 0]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[-1, -1, 0]} color={color}/>

    	<Cube size={[1, 1, 1]} position={[0, 1, 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[0, -1, 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[1, 0, 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[-1, 0, 1]} color={color}/>

    	<Cube size={[1, 1, 1]} position={[0, 1, -1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[0, -1, -1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[1, 0, -1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[-1, 0, -1]} color={color}/>
    </mesh>
  )
}

const SierpinskiCube2 = ({color, position}) => {
	const ref = useRef()
	// useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  // })

	return (
		
		<mesh
			position={position} 
      ref={ref}
		>
			<SierpinskiCube1 position={[0, 0, 0]} color={color}/>
			<SierpinskiCube1 position={[3, 0, 0]} color={color}/>
			<SierpinskiCube1 position={[-3, 0, 0]} color={color}/>
			<SierpinskiCube1 position={[3, 0, -3]} color={color}/>
			<SierpinskiCube1 position={[3, 0, -6]} color={color}/>
			<SierpinskiCube1 position={[0, 0, -6]} color={color}/>
			<SierpinskiCube1 position={[-3, 0, -6]} color={color}/>
			<SierpinskiCube1 position={[-3, 0, -3]} color={color}/>

			<SierpinskiCube1 position={[0, 6, 0]} color={color}/>
			<SierpinskiCube1 position={[3, 6, 0]} color={color}/>
			<SierpinskiCube1 position={[-3, 6, 0]} color={color}/>
			<SierpinskiCube1 position={[3, 6, -3]} color={color}/>
			<SierpinskiCube1 position={[3, 6, -6]} color={color}/>
			<SierpinskiCube1 position={[0, 6, -6]} color={color}/>
			<SierpinskiCube1 position={[-3, 6, -6]} color={color}/>
			<SierpinskiCube1 position={[-3, 6, -3]} color={color}/>

			<SierpinskiCube1 position={[3, 3, 0]} color={color}/>
			<SierpinskiCube1 position={[3, 3, -6]} color={color}/>
			<SierpinskiCube1 position={[-3, 3, 0]} color={color}/>
			<SierpinskiCube1 position={[-3, 3, -6]} color={color}/>
		</mesh>
		
	)
}


export { SierpinskiCube1, SierpinskiCube2 }