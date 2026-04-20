import React from 'react'
import Vedio from './components/Background/Vedio'
import { Canvas } from '@react-three/fiber'


const App = () => {
  return (
    <>
    return (
    <div className="relative min-h-screen w-full">
      {/* --- Permanent Video Background --- */}
   <Vedio/> 

      {/* --- Content Overlay --- */}
      <div className="relative z-10 w-full h-screen">
        
       <Canvas dpr={[1, 2]} gl={{ antialias: true }} orthographic camera={{ zoom:50, position: [5, 5, 5] }}>
         <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]}   intensity={1.8} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-5, 3, -3]} intensity={0.5} />
      <directionalLight position={[0, 4, -8]}  intensity={0.3} />
      <directionalLight position={[0, -2, 3]}  intensity={0.2} />
   
    
   
       <OrbitControls />

       </Canvas>
      </div>
    </div>
  )
  
    </>
  )
}

export default App
