"use client"
import dynamic from "next/dynamic";



const Watch =  dynamic(() => import('./Watch'), {ssr: false})

const HomeHero = () => {
    return ( 
      
            <div className="px-[2rem] md:py-0 py-16 md:px-[10rem] gap-16 relative md:h-[90vh] h-[90vh] hero-gradient flex flex-col sm:flex-row items-center justify-between bg-linear-to-t from-[var(--color-steel)] to-black">
                
                <div className="text-white">
                   <h2 className="h2 font-cormorant">Heritage coal <br/> black edition</h2>
                   <p></p>
                </div>

                <div className="relative w-[50vw] max-w-[40 vw] grid grid-cols-2">
                    <div className="w-[min(20vw, 12rem)] md:h-[min(20rem,20rem)] h-[10rem] border-l-1 border-t-1 border-black ">
                        <div className="bg-[#B9B6BD] opacity-[0.1] w-full h-full"></div>
                    </div>
                    <div className="w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-r-1 border-t-1 border-[var(--color-steel)]"></div>
                    <div className="w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-l-1 border-b-1 border-[var(--color-rose-gold)]"></div>
                    <div className="w-[min(25vw, 12rem)] md:h-[min(20rem,20rem)]  h-[10rem] border-r-1 border-b-1 border-[var(--color-yellow-gold)]"></div>
                     <div className="absolute inset-0 flex items-center justify-center z-[2]">
                    <Watch/>
                </div>
                </div>

                 <div className="flex flex-col gap-4 md:items-start">
                    <button className="bg-[#14185C] text-white pt-1 pb-1 pl-4 pr-4 rounded-full">Shop</button>
                    <button className="underline text-white">Build your watch</button>
                </div>

         
                
            </div>
        
     );
}
 
export default HomeHero;