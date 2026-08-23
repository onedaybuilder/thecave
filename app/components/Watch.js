"use client"
import { Bounds, Center, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Watch = () => {
    const watch = useGLTF('/models/wrist_watch_smartwatch/scene.gltf')
    return ( 
       <Canvas
          className='w-full h-full'
       >
           
        <OrbitControls makeDefault enableZoom={false}/>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias = {0.04} />
        <ambientLight intensity={ 0.5 } />
            <Bounds fit clip observe margin={1.2}>
                
                    <primitive object={watch.scene}/>
                
            </Bounds>
       </Canvas>
     );
}
 
export default Watch;