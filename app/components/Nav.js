import MobileMenu from "./MobileMenu";

const Nav = () => {

    return ( 
        <div className="bg-black px-[2rem] md:px-[10rem]">
            <div className="relative flex justify-between">
                <div className="md:hidden flex items-center">
                    <a>Logo</a>
                </div>
                {/* desktop menu */}
                <nav className=" hidden md:flex justify-between items-center w-full">
                    <span className="py-8 text-white justify-self-center"><a href="">Logo</a></span>

                    <div className=" text-white justify-self-center flex gap-8">
                         <span className="py-8 text-white  justify-self-center"><a href="">Contact</a></span>
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