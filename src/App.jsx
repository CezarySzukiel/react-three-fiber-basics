import './App.css'

import { Canvas } from "@react-three/fiber"

import Cube from "./components/cube/cube.jsx"
import CubeScene from "./components/cube/scene.jsx"
import SierpinskiCubeScene from "./components/sierpinskiCube/scene.jsx"
import PhysicsScene from "./components/physicsBasic/scene.jsx"



const App = () => {
  return (
    <Canvas > 
      

      {/*<CubeScene />*/}
      {/*<SierpinskiCubeScene />*/}
      <PhysicsScene />
      
    </Canvas>
  )
}

export default App
