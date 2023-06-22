import React from "react";
import Logo from "../images/Logo.png";
import Logo1 from "../images/Logo1.png";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <>
            <div className="z-10 flex bg-gradient-to-r from-black from-5% to-[#141619]  justify-between p-8 rounded-xl shadow-md shadow-blue-400">
                <img className="flex justify-center w-0 md:w-96" src={Logo} alt="Logo" />
                <img className="flex justify-center mr-40 h-14 md:w-0" src={Logo1} alt="Logo" />
                <Link to="/" className="flex justify-center text-3xl p-2 w-28 rounded-xl bg-white hover:bg-blue-400  transition-all duration-300 ease-in-out">Home</Link>
            </div>
        </>
    )
}
export default Navbar;