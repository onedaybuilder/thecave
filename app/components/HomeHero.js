"use client"
import dynamic from "next/dynamic";
import { useRef, useState } from "react";



const Watch =  dynamic(() => import('./Watch'), {ssr: false})


 // grid order: [top-left, top-right, bottom-left, bottom-right]
const HERO_COLORS = ["#000", "#c9c9cc", "#b8795e", "#d8b04a"];

const HomeHero = () => {
   const [activeColor, setActiveColor] = useState(null)
   const dragging = useRef(false);


    const handlePointerMove = (e) => {
        if (dragging.current) return;          // mid-rotate: leave color as-is
        const r = e.currentTarget.getBoundingClientRect();
        const col = e.clientX - r.left < r.width  / 2 ? 0 : 1;
        const row = e.clientY - r.top  < r.height / 2 ? 0 : 1;
        setActiveColor(HERO_COLORS[row * 2 + col]);
    };

    const handlePointerLeave = () => setActiveColor(null);

    return ( 
      
            <div className="px-[2rem] md:py-0 py-16 md:px-[10rem] gap-16 relative md:h-[90vh] h-[90vh] hero-gradient flex flex-col sm:flex-row items-center justify-between bg-linear-to-t from-[var(--color-steel)] to-black">
                <div className="text-white">
                   <h2 className="h2 font-cormorant">Heritage coal <br/> black edition</h2>
                   <p></p>
                </div>

                <div className="relative w-[50vw] max-w-[40vw] grid grid-cols-2">
                    <div 
                        className="relative z-[1] w-[min(20vw, 12rem)] md:h-[min(20rem,20rem)] h-[10rem] border-l-1 border-t-1 border-black " >
                            <div className="bg-[#B9B6BD] opacity-[0.1] w-full h-full"></div>
                    </div>

                    <div 
                    
                        className="relative z-[1] w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-r-1 border-t-1 border-[var(--color-steel)]"> 
                    </div>
                    
                    <div 
                     
                        className="relative z-[1] w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-l-1 border-b-1 border-[var(--color-rose-gold)]"> 
                    </div>
                    
                    <div 
                        
                        className="relative z-[1] w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-r-1 border-b-1 border-[var(--color-yellow-gold)]">
                    </div>
                    
                    <div 
                      onPointerDown={() => { dragging.current = true; }}
                      onPointerUp={()   => { dragging.current = false; }}
                      onPointerMove={handlePointerMove}
                      onPointerLeave={handlePointerLeave}
                      className="absolute inset-0 flex items-center justify-center z-[2]">
                        <Watch activeColor={activeColor}/>
                    </div>
                </div>

                 <div className="flex flex-col gap-4 md:items-start">
                    <button className="bg-[#14185C] text-white py-2 px-4">Shop</button>
                    <button className="underline text-white">Build your watch</button>
                </div>

         
                
            </div>
        
     );
}
 
export default HomeHero;