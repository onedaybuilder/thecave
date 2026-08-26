"use client"
import { useState } from "react";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <>
            <div className="py-8 px-[2rem] md:hidden flex items-center justify-center gap-2 text-white" onClick={() => {setIsOpen(!isOpen)}}>
                <span className="text-white"><a href="">Cart(0)</a></span>
                <button id="mobile-menu-button" className="mobile-menu-button text-3xl">☰</button>
            </div>

             <nav id="mobile-menu" className={`${isOpen ? "py-8 flex flex-col absolute top-8" : "hidden"}`}>
                <span className="py-8 text-white  justify-self-center"><a href="">Products</a></span>
                <span className="py-8 text-white justify-self-center"><a href="">Build your watch</a></span>
                <span className="py-8 text-white justify-self-center"><a href="">Contact</a></span>
            </nav>

            
        </>
     );
}
 
export default MobileMenu;