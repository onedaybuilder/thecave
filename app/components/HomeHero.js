"use client"
import dynamic from "next/dynamic";

const Watch =  dynamic(() => import('./Watch'), {ssr: false})

const HomeHero = () => {
    return ( 
      
            <div className="relative grid grid-cols-4 h-screen">
                <div className=" bg-amber-50 border-l-2 w-full"></div>
                <div className=" bg-blue-400 border-l-2 w-full"></div>
                <div className=" bg-cyan-950 border-l-2 w-full"></div>
                <div className=" bg-fuchsia-200 border-l-2 w-full"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <Watch/>
                </div>
                
            </div>
        
     );
}
 
export default HomeHero;