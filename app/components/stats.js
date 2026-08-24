"use client"
const Stats = () => {
    return ( 
        <>
            <div className=" text-black flex md:flex-row flex-col w-full justify-between py-16 md:px-[10rem] items-center ">
                <h2>Proof in stone</h2>
                <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                    <p className="flex items-center gap-4"><span className="text-3xl font-semibold">9+</span> locations</p>
                    <p className="flex items-center gap-4"><span className="text-3xl font-semibold">100+</span> watches made</p>
                    <p className="flex items-center gap-4"><span className="text-3xl font-semibold">1M+</span> tribe members</p>
                    <p className="flex items-center gap-4"><span className="text-3xl font-semibold">2</span> revolutions started</p>
                </div>
            </div>
        </>
     );
}
 
export default Stats;