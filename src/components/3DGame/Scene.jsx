import { OrbitControls, Cylinder, MeshReflectorMaterial, Text3D } from "@react-three/drei";
import { Physics, RigidBody, CylinderCollider} from "@react-three/rapier";
import { Suspense, useEffect } from "react";

import { Torii } from "./Tori.jsx";
import { kanas } from "./../../constans.js"
import { useGameStore } from "./../../store"
import Character from "./Character.jsx"
import { CharacterController } from "./CharacterController.jsx"

export const GameScene = () => {

  const startGame = useGameStore((state) => state.startGame);
  // const {level, currentKana} = useGameStore((state) => ({
  //   level: state.level,
  //   currentKana: state.currentKana,
  // }))

  

  // useEffect(() => {
  //   startGame();
  // }, []);

  return (
      // <color attach="background" args={["#dbecfb"]} />
      // <fog attach="fog" args={["#dbecfb", 30, 40]} />
      <Suspense>
        <Physics debug>
                 
          <OrbitControls /> 

          {/* LIGHTS */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            castShadow
            color={"#9e69da"}
          />
          {/* BACKGROUND */}
          <mesh  position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[400, 400]}
              resolution={1024}
              mixBlur={1}
              minDepthThreshold={0.85}
              color="#dbecfb"
              metalness={0,6}
              roughness={-1}
            />
            </mesh>

          <Torii scale={[16, 16, 16]} position={[0, 0, -22]} rotation-y={1.25 * Math.PI} />
          <Torii scale={[10, 10, 10]} position={[-8, 0, -20]} rotation-y={1.4 * Math.PI} />
          <Torii scale={[10, 10, 10]} position={[8, 0, -20]} rotation-y={1.15 * Math.PI} />

          {/* STAGE */}
          <group position-y={-1}>
            <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
              <CylinderCollider args={[1 / 2, 5]} />
              <Cylinder scale={[5, 1, 5]} receiveShadow >
                <meshStandardMaterial color="white" />
              </Cylinder>
            </RigidBody>

            {/* CHARACTER */}
            <CharacterController />
             
            {/* KANA */}
           {/* <Text3D size={0.82}>
              {kanas[0].character.hiragana}
              <meshNormalMaterial />
            </Text3D>*/}
          </group>
      
        <meshNormalMaterial />
       </Physics>
      </Suspense>
    
  );
};