import React, { useMemo } from 'react'
import { OrbitControls, useGLTF ,Center,Stage} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
 import { useControls } from 'leva' // if you want to use the controls for position, rotation, and scale*/

const Laltern = () => {
  const {scene}=useGLTF('./models/laltern.glb')
  useThree(({camera,scene,gl})=>{
    console.log(camera.postion)
    console.log(scene.position)
   
  })
/*   const { position, rotation, scale } = useControls({
    position: {
      value: [0,0,0],
      step: 0.1,
    },
    rotation: {
      value: [0,0,0],
      step: 0.01,
    },
    scale: 1
  }) */
  const asteroidConfigs = [
    { 
      position:[-13.2,-3.4,-13.4], 
      rotation: [-3.23,-2.43,3.10], 
      scale: 0.1
    },
      { 
    position: [-27.0,-16.0,0.0], 
    rotation: [9.51,0.51,3.20], 
    scale: 0.1
    },
  
    {
      position: [14.5,-13.5,0.0], 
      rotation: [9.51,0.53,3.20],
      scale: 0.1
    },

   {
    position: [-0.1,-7.3,0.0],
    rotation:[9.51,0.30,3.18],
    scale:0.1
   },
   {
    position: [-12.2,2.9,0.3],
    rotation:[9.29,0.30,3.16],
    scale:0.1
   },
   {/**If you want to use leva */}
      /*  {
      position:position,
      rotation:rotation,  
      scale:scale
    }  */
  ]
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]}   intensity={1.8} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-5, 3, -3]} intensity={0.5} />
      <directionalLight position={[0, 4, -8]}  intensity={0.3} />
      <directionalLight position={[0, -2, 3]}  intensity={0.2} />
      <directionalLight  position={[-13.2,-3.4,-13.4]} intensity={0.8} />
       <pointLight position={[-11.8,3.6,0.0]} intensity={0.5} />
       <group>
      {asteroidConfigs.map((config, index) => (
        <primitive 
          key={index}
        
          object={useMemo(() => scene.clone(), [scene])} 
          position={config.position}
          rotation={config.rotation}
          scale={config.scale}
        />
      ))}
    </group>
      {/*   <primitive 
          object={scene} 
          position={[-13.2,-3.4,-13.4]} 
          rotation={[-3.23,-2.43,3.10]} 
          scale={0.1} 
        />    */}
{/*     
<primitive object={scene} position={position} rotation={rotation} scale={scale} />  */}
         <OrbitControls/>
    </>
  )
}

export default Laltern
