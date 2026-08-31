import ContactForm from "./ContactForm";

const Footer = () => {
    return ( 
        <div className="bg-[#fafbfa] text-[#1e1e1e]">
            <h2 className="font-cormorant px-2 py-[2rem]  px-[2rem] md:px-[10rem] ">All links</h2>
            <div className="flex flex-col gap-8 md:flex-row justify-between w-full px-2 pb-[4rem]  px-[2rem] md:px-[10rem]">
                <div className="grid grid-cols-1 gap-x-8 gap-y-2">
                   <a href="" className="underline">Our Stores</a>
                   <a href="" className="underline">Products</a>
                   <a href="" className="underline">Legal</a>
                   <a href="" className="underline">Build your watch</a>
                </div>

                <ContactForm/>
            </div>
        </div>
     );
}
 
export default Footer;