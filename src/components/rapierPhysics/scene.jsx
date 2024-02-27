import { useState } from "react";
import { useInterval } from "react-use";
import { Physics, RigidBody, CylinderCollider} from "@react-three/rapier";
import { OrbitControls, Cylinder } from "@react-three/drei";

import { Suspense, useEffect } from "react";

import { Sphere_ } from "./shapes.jsx"

export function RapierPhysicScene() {
	const [spheres, setSpheres] = useState([]);

	 useInterval(() => {
    	const newPosX = (Math.random() - 0.5) * 3;
    	const newPosZ = (Math.random() - 0.5) * 3; 
    	// const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    	setSpheres(prevSpheres => [...prevSpheres, {position: [newPosX, 5, newPosZ]}]);
  	}, 100);

	return (
		<Suspense>
        	<Physics debug>
        		<OrbitControls /> 
        		{/* LIGHTS */}
		          <ambientLight intensity={0.3} />
		          <directionalLight
		            position={[5, 5, 5]}
		            intensity={4}
		            castShadow
		            color={"white"}
		          />
		          {/* STAGE */}
		        <group position-y={-1}>
		            <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
		             	<CylinderCollider args={[0.25, 10]} />
		              	<Cylinder args={[10, 10, 0.5]} receiveShadow >
		                	<meshStandardMaterial color="white" />
		              	</Cylinder>
		            </RigidBody>
		       	</group>

		           {/* OBJECTS */}
		       	<Sphere_ />
		        
		   		{spheres.map(({ position, color }, index) => (
       				<Sphere_ key={index} position={position} color={color} />
      			))}
		   		


        	</Physics>
        </Suspense>
	)
}