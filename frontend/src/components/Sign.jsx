import React from "react";
import Navbar from "./Navbar"
import Google from "../images/search.png";
import Login from "../images/Computer login-rafiki.png"
import Footer from "./Footer";

const Sign = () => {
    return(
        <div className="flex flex-col bg-black">
            <Navbar/>
            <div className="flex p-5 flex-col gap-y-5 lg:flex-row bg-gradient-to-tr from-black to-[#141619]">
                <div className="flex md:w-3/4 mx-auto lg:flex-col lg:w-1/2 justify-center p-4">
                    <img className="animate-slideInLeft" src={Login} alt="login"/>
                </div>
                <div className="flex p-4 flex-col lg:w-1/2 justify-center">
                    <div className="flex flex-col gap-y-5 justify-center mx-auto rounded-xl animate-slideInRight">
                        <h5 className="flex justify-center text-4xl text-slate-200 font-sans">Sign In</h5>
                        <a className="flex justify-center p-3" href="/auth/google"> 
                            <div className="flex gap-x-5 bg-slate-100 rounded-2xl p-3  shadow-md shadow-black hover:bg-blue-700 hover:text-slate-200 transition-all duration-300 ease-out">
                                <img className="w-10 h-10" src={Google} alt="google"/>
                                <h1 className="text-xl flex flex-col justify-center">Sign In with Google</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Sign;