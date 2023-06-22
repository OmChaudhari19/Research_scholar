import React from "react";
import {InfinitySpin} from "react-loader-spinner";
const Loader = () => {
    return(
        <div className="flex justify-center p-96 bg-gradient-to-bl from-black  to-[#141619]">
            <InfinitySpin width='200' color="blue"/>
        </div>
    )
}
export default Loader;
