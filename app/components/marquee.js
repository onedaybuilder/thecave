import Image from "next/image";

const Marquee = () => {
    return ( 
        
        <div className=" py-[4rem] bg-black overflow-hidden">
                <h2 className=" px-[2rem] md:px-[10rem] font-cormorant text-white">Featured In</h2>
                <div className="flex justify-around animate-marquee  px-[2rem] md:px-[10rem] py-[4rem]">
                    <div className=" flex flex-none justify-around w-full">
                        <Image src="/new-york-times.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/bbc.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/dw.png" width={500} height={500} alt="Picture of the logo"/>
                    </div>

                    <div className=" flex flex-none justify-around w-full">
                        <Image src="/new-york-times.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/bbc.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/dw.png" width={500} height={500} alt="Picture of the logo"/>
                    </div>

                    <div className=" flex flex-none justify-around w-full">
                        <Image src="/new-york-times.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/bbc.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/dw.png" width={500} height={500} alt="Picture of the logo"/>
                    </div>

                    <div className=" flex flex-none justify-around w-full">
                        <Image src="/new-york-times.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/bbc.png" width={500} height={500} alt="Picture of the logo"/>
                        <Image src="/dw.png" width={500} height={500} alt="Picture of the logo"/>
                    </div>
                 </div>
        </div>
        
        
     );
}
 
export default Marquee;