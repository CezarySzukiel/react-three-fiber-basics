import { RigidBody } from "@react-three/rapier";
import { Sphere } from "@react-three/drei";

export function Sphere_({ position, color }) {

  return (
    <RigidBody position={position} colliders={"ball"} restitution={1}>
      	<Sphere args={[0.2, 10, 10]}>
    	<meshStandardMaterial attach="material" color={"blue"} friction={0.5} restitution={0.5} />
    	</Sphere>
    </RigidBody>
  );
}