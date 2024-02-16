import { useBox, usePlane, useCylinder, useSphere } from "@react-three/cannon";
import { AxesHelper, LineSegments } from "three";


function Plane() {
	const [plane] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		friction: 0.5,
		restituation: 0.5
	}));
	return (
		<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={plane}>
			<planeGeometry attach="geometry" args={[100, 100]}/>
			<meshStandardMaterial attach="material" color="mediumseagreen" friction={0.5} restitution={0.5} />
		</mesh>
	)
}

function Cylinder() {
	const [ref, api] = useCylinder(() => ({mass: 1}))
	
	return (
		<mesh
			onClick={() => {
				api.velocity.set(1, 10, 1);
			}} 
			ref={ref}
			position={[0, 10, 0]}
		>
			<cylinderGeometry attach="geometry" args={[1, 1, 10, 32]}/>
			<meshLambertMaterial attach="material" color="red" />
		</mesh>
	)
}

function Sphere({ position, color }) {
  const [ref] = useSphere(() => ({ mass: 10, position }));

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry />
      <meshStandardMaterial attach="material" color={color} friction={0.5} restitution={0.5} />
    </mesh>
  );
}


function Box() {
	const [ref, api] = useBox(() => ({mass: 1}))
	return (
		<mesh
			onClick={() => {
				api.velocity.set(2, 10, 1);
			}} 
			ref={ref} 
			position={[0, 2, 0]}
		>
			<boxGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	)
}

export { Box, Plane, Cylinder, Sphere }