import Image from "next/image";

const Collection = () => {
    return ( 
        <div className="py-[4rem] text-[#1e1e1e]  px-[2rem] md:px-[10rem] bg-[#fafbfa]">
            <h2 className="font-cormorant">Shop our collection</h2>
            <div className="grid md:grid-cols-3 gap-16 py-[4rem]">
                <div className="flex flex-col gap-4">
                    <div>
                        <Image src="/Blue-Volta.jpg"  width={0} height={0} alt="Picture of the watch" className="w-full h-auto" sizes="100vw"/>
                    </div>
                    <div className="flex justify-between">
                        <p>Liege</p>
                        <a href="" className="underline">discover</a>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <div>
                        <Image src="/Classics-Unisex.jpg"  width={0} height={0} alt="Picture of the watch" className="w-full h-auto" sizes="100vw"/>
                    </div>
                    <div className="flex justify-between">
                        <p>Liege</p>
                        <a href="" className="underline">discover</a>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <div>
                        <Image src="/Patriot.jpg"  width={0} height={0} alt="Picture of the watch" className="w-full h-auto" sizes="100vw"/>
                    </div>
                    <div className="flex justify-between">
                        <p>Liege</p>
                        <a href="" className="underline">discover</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Collection;