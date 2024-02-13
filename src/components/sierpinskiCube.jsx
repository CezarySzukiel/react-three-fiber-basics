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

const SierpinskiCube1 = ({ position, color}) => {
	const [positionX, positionY, positionZ] = position;

  return (
    <mesh position={position}>
    	<Cube size={[1, 1, 3]} position={[positionX - 1, positionY + 1, positionZ]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[positionX + 1, positionY + 1, positionZ]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[positionX + 1, positionY - 1, positionZ]} color={color}/>
    	<Cube size={[1, 1, 3]} position={[positionX - 1, positionY - 1, positionZ]} color={color}/>

    	<Cube size={[1, 1, 1]} position={[positionX, positionY + 1, positionZ + 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX, positionY - 1, positionZ + 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX + 1, positionY, positionZ + 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX - 1, positionY, positionZ + 1]} color={color}/>

    	<Cube size={[1, 1, 1]} position={[positionX, positionY + 1, positionZ - 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX, positionY - 1, positionZ - 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX + 1, positionY, positionZ - 1]} color={color}/>
    	<Cube size={[1, 1, 1]} position={[positionX - 1, positionY, positionZ - 1]} color={color}/>
    </mesh>
  )
}



const SierpinskiCube2 = ({color, position, degree}) => {
	const [positionX, positionY, positionZ] = position;

	const ref = useRef()
	// useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta
  // })



	return (
		
		<mesh
			position={position} 
      ref={ref}
		>
			<SierpinskiCube1 position={[positionX, (positionY - 1.5) * degree, (positionZ + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY - 1.5) * degree, positionZ]} color={color}/>
			<SierpinskiCube1 position={[positionX, (positionY - 1.5) * degree, (positionZ - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY - 1.5) * degree, positionZ]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionY - 1.5) * degree]} color={color}/>

			<SierpinskiCube1 position={[(positionX + 1.5) * degree, positionY, (positionY + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, positionY, (positionY - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, positionY, (positionY - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, positionY, (positionY + 1.5) * degree]} color={color}/>

			<SierpinskiCube1 position={[positionX, (positionY + 1.5) * degree, (positionY + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY + 1.5) * degree, positionY]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY + 1.5) * degree, positionY]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[positionX, (positionY + 1.5) * degree, (positionY - 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree]} color={color}/>
			<SierpinskiCube1 position={[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree]} color={color}/>

		</mesh>
	)
}

// const SierpinskiCubes = ({color, position, degree}) => {
// 	const [positionX, positionY, positionZ] = position;

// 	const ref = useRef()
// 	// useFrame((state, delta) => {
//   //   ref.current.rotation.x += delta
//   //   ref.current.rotation.y += delta
//   // })

// 	const POSITIONS = [
// 		[positionX, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
// 		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
// 		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
// 		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ - 1.5) * degree],
// 		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, positionZ],
// 		[positionX, (positionY - 1.5) * degree, (positionZ - 1.5) * degree],
// 		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, positionZ],
// 		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionY - 1.5) * degree],

// 		[(positionX + 1.5) * degree, positionY, (positionY + 1.5) * degree],
// 		[(positionX + 1.5) * degree, positionY, (positionY - 1.5) * degree],
// 		[(positionX - 1.5) * degree, positionY, (positionY - 1.5) * degree],
// 		[(positionX - 1.5) * degree, positionY, (positionY + 1.5) * degree],

// 		[positionX, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
// 		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, positionY],
// 		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, positionY],
// 		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
// 		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
// 		[positionX, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
// 		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
// 		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
// 	]
// 	return (
// 		<mesh
// 			position={position} 
//       ref={ref}
// 		>			
// 				{POSITIONS.map((pos, index) => (
// 	        <SierpinskiCube1
// 	          key={index}
// 	          position={pos}
// 	          color={color}
// 	          degree={degree}
// 	        />
// 	      ))}

// 		</mesh>
// 	)

// }

const SierpinskiCubes = ({color, position, degree}) => {
	const [positionX, positionY, positionZ] = position;

	const ref = useRef()
	// useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta
  // })

	const POSITIONS = [
		[positionX, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionZ + 1.5) * degree],
		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, (positionZ - 1.5) * degree],
		[(positionX + 1.5) * degree, (positionY - 1.5) * degree, positionZ],
		[positionX, (positionY - 1.5) * degree, (positionZ - 1.5) * degree],
		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, positionZ],
		[(positionX - 1.5) * degree, (positionY - 1.5) * degree, (positionY - 1.5) * degree],

		[(positionX + 1.5) * degree, positionY, (positionY + 1.5) * degree],
		[(positionX + 1.5) * degree, positionY, (positionY - 1.5) * degree],
		[(positionX - 1.5) * degree, positionY, (positionY - 1.5) * degree],
		[(positionX - 1.5) * degree, positionY, (positionY + 1.5) * degree],

		[positionX, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, positionY],
		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, positionY],
		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
		[(positionX + 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
		[positionX, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY + 1.5) * degree],
		[(positionX - 1.5) * degree, (positionY + 1.5) * degree, (positionY - 1.5) * degree],
	]


	return (
		<mesh
			position={position} 
      ref={ref}
		>	
			
		 		{POSITIONS.map((pos, index) => (
	        <SierpinskiCube1
	          key={index}
	          position={pos}
	          color={color}
	          degree={degree}
	        />
	      ))
	  	}}


		</mesh>
	)

}

export { SierpinskiCube1, SierpinskiCube2, SierpinskiCubes }