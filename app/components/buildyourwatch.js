import Image from "next/image";


const BuildYourWatch = () => {
    return ( 
        <div className="relative md:py-[16rem] py-[4rem] bg-black">
            <div className="flex items-start flex-col gap-8 px-[2rem] md:px-[10rem]">
               <div className="flex flex-col gap-2">
                    <h2 className="font-cormorant text-white">Build your watch</h2>
                    <p className="text-white">Discover our men’s pyjamas, designed for relaxed comfort and easy sleepwear style.</p>
               </div>
                <button className="bg-[#14185C] text-white py-2 px-4">Get Started</button>
            </div>

             <Image className="w-full h-full absolute inset-x-0 top-0" src="/member-bgg.png" width={0} height={0} alt="Picture of the logo" sizes="100vw"/>
        </div>
     );
}
 
export default BuildYourWatch;