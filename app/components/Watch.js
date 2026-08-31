"use client"
import { Bounds, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';


const WatchModel = ({activeColor}) => {
     const watch = useGLTF('/models/wrist_watch_smartwatch/scene.gltf')
//      Object.entries(watch.materials).forEach(([name, m]) => {
//       console.log(name)
//       m.color.set('#ff0000')
// })
     const baseColor = useRef(null)
     const baseColor2 = useRef(null)
     const baseColorFace = useRef(null)
      

     useLayoutEffect(() => {
         baseColor.current = watch.materials.MenMetal.color.clone()
         baseColor2.current = watch.materials.MenMetal2.color.clone()
         baseColorFace.current = watch.materials.Plastic.color.clone()
      }, [])

      useLayoutEffect(() => {
         const mat = watch.materials.MenMetal;
         const mat2 = watch.materials.MenMetal2;
         const matFace = watch.materials.RIS_ShaderPxrDisney2;

         if (!baseColor.current || !baseColor2.current || !baseColorFace.current) return;   // first effect hasn't run yet
      
         if(activeColor) {
            mat.color.set(activeColor);
            mat2.color.set(activeColor)
            matFace.color.set(activeColor)
         }
         else {
            mat.color.copy(baseColor.current);
            mat2.color.copy(baseColor2.current);
            matFace.color.copy(baseColorFace.current);
         }
      
      }, [activeColor]);

      
   return (
     <Bounds fit clip observe margin={1.2}>
         <primitive object={watch.scene}/>
      </Bounds>
   )
}

const Watch = ({activeColor}) => {
  
    
    return ( 
       <Canvas
          className='w-full h-full'
          gl={{ alpha: true }}
       >
         {/* <Environment preset="studio"  /> */}
         <OrbitControls makeDefault enableZoom={false} enablePan={false} enableDamping/>
         <WatchModel activeColor={activeColor}/>
         <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias = {0.04} />
         <ambientLight intensity={ 0.5 } />
            
       </Canvas>
     );
}


 
export default Watch;