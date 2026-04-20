import React from 'react'
import Vedio from './components/Background/Vedio'
import { Canvas } from '@react-three/fiber'
import Laltern from './components/models/Laltern'


const App = () => {
  return (
    <>
   
    <div className="relative min-h-screen w-full">
      {/* --- Permanent Video Background --- */}
  <Vedio/>  

      {/* --- Content Overlay --- */}
      <div className="relative z-10 w-full h-screen">
        
  {/*      <Canvas dpr={[1, 2]} gl={{ antialias: true }} orthographic camera={{ zoom:0, position: [5, 5, 5] }}> */}
      
   
     <Canvas  orthographic camera={{ zoom: 20, position: [0, 0, 5] }} dpr={[1, 2]} gl={{ antialias: true }}>
   
     
<Laltern/>
       </Canvas>
      </div>
    </div>
  )
  
    </>
  )
}

export default App
