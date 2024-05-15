import { Canvas } from '@react-three/fiber'
import './App.css'

const App = () => {


  return (
    <>
     <Canvas>

      <directionalLight position={[0,0,2]}/>

      <mesh position={[1,0,0]}>
        <boxGeometry args={[2,2,4]} />
        <meshStandardMaterial color={"orange"}/>
      </mesh>


      <mesh position={[2,-3,-3]}>
        
        <boxGeometry args={[1,1,4]} />
        <meshStandardMaterial color={"pink"}/>
      </mesh>
     </Canvas>
    </>
  )
}

export default App
