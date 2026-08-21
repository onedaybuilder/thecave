"use client"
import { Center, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Watch = () => {
    const watch = useGLTF('/models/wrist_watch_smartwatch/scene.gltf')
    return ( 
       <Canvas
          className='w-full h-full'
       >
           
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias = {0.04} />
        <ambientLight intensity={ 0.5 } />
            <Center>
                <primitive object={watch.scene}/>
            </Center>
       </Canvas>
     );
}
 
export default Watch;