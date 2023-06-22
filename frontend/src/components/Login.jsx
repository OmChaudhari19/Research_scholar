import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import Logo1 from "../images/Logo1.png";
import Img from "../images/Image.png"
import Footer from "./Footer";
const Login = () => {
    return (
        <div className="flex flex-col bg-black">
            <div className="z-10 flex bg-gradient-to-r from-black from-5% to-[#141619]  justify-between p-8 rounded-xl shadow-md shadow-blue-400">
                <img className="flex justify-center w-0 md:w-96" src={Logo} alt="Logo" />
                <img className="flex justify-center mr-40 h-14 md:w-0" src={Logo1} alt="Logo" />
                <div className="flex justify-center">
                    <Link to="/login" className="flex justify-center text-3xl p-2 w-28 rounded-xl bg-white hover:bg-blue-400  transition-all duration-300 ease-in-out">Login</Link>
                </div>
            </div>
            <div className="flex flex-col p-12 lg:flex-row lg:p-16 bg-gradient-to-tl from-black from-5% to-[#141619]">
                <div className="flex justify-center lg:w-1/2">
                    <img className="flex" src={Img} alt="Image"/>    
                </div>
                <div className="flex lg:w-1/2 p-4 md:p-10">
                    <p className="flex flex-col text-justify justify-center text-xl md:text-2xl text-slate-200 md:text-left">
                        Research Scholar aims to simplify the process of finding and accessing 
                        research papers, making it an indispensable tool for researchers, 
                        scholars, and academics alike. With its user-friendly interface and 
                        automated recommendation system, Research Scholar empowers users to 
                        explore new research avenues and enhance their knowledge base 
                        efficiently and effectively.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login;