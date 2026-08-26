import MobileMenu from "./MobileMenu";
import Image from "next/image";
const Nav = () => {

    return ( 
        <div className="bg-black px-[2rem] md:px-[10rem]">
            <div className="relative flex justify-between">
                <div className="md:hidden flex items-center">
                    <a><Image src="/cavemane-logo-white.png" width={60} height={60} alt="Picture of the logo" sizes="100vw"/></a>
                </div>
                {/* desktop menu */}
                <nav className=" hidden md:flex justify-between items-center w-full">
                    <span className="py-8 text-white justify-self-center"><a href="">
                        <Image src="/cavemane-logo-white.png" width={60} height={60} alt="Picture of the logo" sizes="100vw"/>
                        </a></span>

                    <div className=" text-white justify-self-center flex gap-8">
                         
                        <span className="py-8 text-white justify-self-center"><a href="">Products</a></span>
                        <span className="py-8 text-white justify-self-center"><a href="">Build your watch</a></span>
                        <span className="py-8 text-white justify-self-center"><a href="">Cart(0)</a></span>
                    </div>
                   
                </nav>

            

                    {/* mobile menu */}
                    
                <MobileMenu/>
            </div>
        </div>
     );
}
 
export default Nav;