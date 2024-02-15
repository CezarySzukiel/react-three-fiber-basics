import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


const Cube = ({size, position, color}) => {
	return (
		<mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color}/>
    </mesh>
	)
}

const SierpinskiCube0 = ({ position, color}) => {
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


const SierpinskiCube = ({color, position, degree}) => {
	const [positionX, positionY, positionZ] = position;
	const tempDegree = degree

	const ref = useRef()
	useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
  })

	const POSITIONS = [
		[positionX, (positionY - 1.5) * tempDegree, (positionZ + 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, (positionY - 1.5) * tempDegree, (positionZ + 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, (positionY - 1.5) * tempDegree, (positionZ + 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, (positionY - 1.5) * tempDegree, (positionZ - 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, (positionY - 1.5) * tempDegree, positionZ],
		[positionX, (positionY - 1.5) * tempDegree, (positionZ - 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, (positionY - 1.5) * tempDegree, positionZ],
		[(positionX - 1.5) * tempDegree, (positionY - 1.5) * tempDegree, (positionY - 1.5) * tempDegree],

		[(positionX + 1.5) * tempDegree, positionY, (positionY + 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, positionY, (positionY - 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, positionY, (positionY - 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, positionY, (positionY + 1.5) * tempDegree],

		[positionX, (positionY + 1.5) * tempDegree, (positionY + 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, (positionY + 1.5) * tempDegree, positionY],
		[(positionX - 1.5) * tempDegree, (positionY + 1.5) * tempDegree, positionY],
		[(positionX + 1.5) * tempDegree, (positionY + 1.5) * tempDegree, (positionY + 1.5) * tempDegree],
		[(positionX + 1.5) * tempDegree, (positionY + 1.5) * tempDegree, (positionY - 1.5) * tempDegree],
		[positionX, (positionY + 1.5) * tempDegree, (positionY - 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, (positionY + 1.5) * tempDegree, (positionY + 1.5) * tempDegree],
		[(positionX - 1.5) * tempDegree, (positionY + 1.5) * tempDegree, (positionY - 1.5) * tempDegree],
	]

	return (
		<mesh
			position={position} 
      ref={ref}
		>			
				{POSITIONS.map((pos, index) => (
	        <SierpinskiCube0
	          key={index}
	          position={pos}
	          color={color}
	        />
	      ))}

		</mesh>
	)
}

export { SierpinskiCube0,  SierpinskiCube }