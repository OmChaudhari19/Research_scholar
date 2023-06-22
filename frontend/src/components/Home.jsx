import React, { useEffect } from "react";
import { useState } from "react";
import ProNav from "./ProNav";
import Loader from "./Loader";
import User from "./User";
import Footer from "./Footer";
const Home = () => {
    const [user,setUser] = useState();
    const [load,setLoad] = useState(true);
    const [profile,setProfile] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/user");
            const data = await response.json();
            setUser(data);
            const url = "/data/" + data.user.email;
            getData(url);
          } catch (error) {
            console.error(error);
          }
        };
    
        const getData = async (url) => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setProfile(data);
            setLoad(false);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    

    setTimeout(() => {
        setLoad(false);
    },7000);

    
    
    return(
        <>
            {load ? 
                (<Loader />) : 
                (
                    <div className="bg-gradient-to-bl from-neutral-900 to-neutral-950">
                        <ProNav user={user}/>
                        <User user={user} data={profile}/>
                        <Footer/>
                    </div>
                ) 
            }
        </>
    )
}
export default Home;