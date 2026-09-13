import Logo from '../assets/logo-text.png'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Nav() {
    return (
        <nav className='flex justify-around items-center sticky top-0 z-100 bg-white'>
            <div className="flex justify-between items-center  pl-4 pr-4 pt-3 pb-3 md:hidden w-full">
                <button className="text-2xl text-[#475569]">
                    <GiHamburgerMenu />
                </button>
                <div className='m-auto' >
                    <img className="h-8" src={Logo} alt="" />
                </div>
                <div className='font-semibold' >
                    <button className='pl-5 pr-5 pt-2.5 pb-2.5  rounded-2xl text-[#475569] cursor-pointer'>Sign In</button>
                    <button className='pl-2.5 pr-2.5 pt-0.5 pb-0.5 bg-[#d91b7e] text-white rounded-2xl m-1.5 cursor-pointer'>Sign Up</button>
                </div>
            </div>

            <div className="hidden justify-around items-center pt-3 pb-3 md:flex w-full" >
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div >
                    <ul className="flex justify-around items-center gap-2 font-medium text-[#475569]">
                        <li><a className='text-[#DB2777] transition-colors' href="#">Home</a></li>
                        <li><a  href="#">Technologies</a></li>
                        <li><a  href="#">Projects</a></li>
                        <li><a  href="#">About</a></li>
                        <li><a  href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='font-semibold' >
                    <button className='pl-5 pr-5 pt-2.5 pb-2.5  rounded-2xl text-[#475569] cursor-pointer'>Sign In</button>
                    <button className='pl-2.5 pr-2.5 pt-0.5 pb-0.5 bg-[#d91b7e] text-white rounded-2xl m-1.5 cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}