import React from "react";
import Logo from "../images/Logo.png";
const Footer = () => {
    return (
        <div className="p-14 flex flex-col gap-y-10 bg-gradient-to-br from-black from-5% to-[#141619] rounded-sm">
            <div className="flex flex-col gap-y-7 text-center md:gap-0 md:flex-row md:justify-around">
                <div className="flex justify-center">
                    <img className="flex w-80 lg:w-96" src={Logo} alt="Logo"/>
                </div>
                <div className="flex justify-center gap-x-10">
                    <div className="flex flex-col justify-center">
                        <h2 className="flex text-slate-100 text-3xl">Contact</h2>
                    </div>
                    <div className="flex gap-x-5 justify-center">
                        <a className="flex flex-col justify-center" href="/"><i className="fa-solid fa-envelope fa-2xl" style={{color:"aliceblue"}}></i></a>
                        <a className="flex flex-col justify-center" href="/"><i className="fa-brands fa-github fa-2xl" style={{color:"aliceblue"}}></i></a>
                    </div>
                </div>
            </div>
            <hr className="flex" />
            <div className="flex justify-center">
                <h2 className="flex text-lg md:text-xl justify-center text-slate-300">All Rights Reserverd | Team Reasearch Scholar</h2>
            </div>
        </div>
    )
}
export default Footer;