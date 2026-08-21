import MobileMenu from "./MobileMenu";

const Nav = () => {

    return ( 
        <div className="">
            <div className="relative flex justify-between">
                <div className="md:hidden flex items-center">
                    <a>Logo</a>
                </div>
                {/* desktop menu */}
                <nav className="hidden md:grid grid-cols-5 w-full">
                    <span className="py-8 text-white justify-self-center"><a href="">Products</a></span>
                    <span className="py-8 text-white  justify-self-center"><a href="">Contact</a></span>
                    <span className="py-8 text-white justify-self-center"><a href="">Logo</a></span>
                    <span className="py-8 text-white justify-self-center"><a href="">Build your watch</a></span>
                    <span className="py-8 text-white justify-self-center"><a href="">Cart(0)</a></span>
                </nav>

            

                    {/* mobile menu */}
                    
                <MobileMenu/>
            </div>
        </div>
     );
}
 
export default Nav;