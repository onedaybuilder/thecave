"use client"
import { Bounds, Center, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';


const WatchModel = ({activeColor}) => {
     const watch = useGLTF('/models/wrist_watch_smartwatch/scene.gltf')
     const baseColor = useRef(null)
      

     useLayoutEffect(() => {
         baseColor.current = watch.materials.MenMetal.color.clone()
      }, [])

      useLayoutEffect(() => {
         const mat = watch.materials.MenMetal;
         const mat2 = watch.materials.MenMetal2;
         if (!baseColor.current) return;          // first effect hasn't run yet
         if (activeColor) mat.color.set(activeColor);
         else mat.color.copy(baseColor.current);
      }, [activeColor]);

      
   return (
     <Bounds fit clip observe margin={1.2}>
         <primitive object={watch.scene}/>
      </Bounds>
   )
}

const Watch = ({activeColor}) => {
  
    //console.log(watch.nodes, watch.materials)
    return ( 
       <Canvas
          className='w-full h-full'
          gl={{ alpha: true }}
       >
         {/* <Environment preset="studio"  /> */}
         <OrbitControls makeDefault enableZoom={false}/>
         <WatchModel activeColor={activeColor}/>
         <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias = {0.04} />
         <ambientLight intensity={ 0.5 } />
            
       </Canvas>
     );
}


 
export default Watch;