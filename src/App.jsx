import './App.css';

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react"
import { KeyboardControls } from "@react-three/drei";

import Cube from "./components/cube/cube.jsx";
import CubeScene from "./components/cube/scene.jsx";
import SierpinskiCubeScene from "./components/sierpinskiCube/scene.jsx";
import PhysicsScene from "./components/physicsBasic/scene.jsx";
import { GameScene } from "./components/3DGame/Scene.jsx";
import { generateGameLevel } from "./store";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const App = () => {
  
  const map = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ], []);

  return (
    <KeyboardControls map={map}>
    <Canvas shadows camera={{ position: [3, 6, 14], fov: 42 }}> 
      <color attach="background" args={["#dbecfb"]} />

      {/*<CubeScene />*/}
      {/*<SierpinskiCubeScene />*/}
      {/*<PhysicsScene />*/}

      <GameScene />
  
    </Canvas>
    </KeyboardControls>
  )
}

export default App
