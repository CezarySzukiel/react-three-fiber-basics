import React, { useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

import { Box, Plane, Cylinder, Sphere } from "./shapes.jsx";
import { useInterval } from "react-use";

function PhysicsScene() {
	const [spheres, setSpheres] = useState([]);

	 useInterval(() => {
    	const newPosX = (Math.random() - 0.5) * 10;
    	const newPosZ = (Math.random() - 0.5) * 10; 
    	// const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    	setSpheres(prevSpheres => [...prevSpheres, {position: [newPosX, 15, newPosZ], color: "blue"}]);
  	}, 100);

	return (
		<>
			<OrbitControls />
			<Stars />
			<ambientLight intensity={0.5} />
			<spotLight position={[1, 50, 30]} intensity={1000}/>
			<Physics>
				<Plane />
				{/*<Box />*/}
				{/*<Cylinder />*/}
				{/*<Sphere />*/}
				{spheres.map(({ position, color }, index) => (
       				<Sphere key={index} position={position} color={color} />
      			))}
			</Physics>
		</>
	)
}

export default PhysicsScene