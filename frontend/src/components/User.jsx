import React,{useState} from "react";
import days from "../days";
const User = (props) => {
    // console.log(props.data);
    // console.log(props.user.user.email);
    const [name,setName] = useState(props.user.user.displayName);
    const [email,setEmail] = useState(props.user.user.email);
    const [img,setImage] = useState(props.user.user.picture);
    const [interests,setInterests] = useState(props.data.interests);
    const [day,setDay] = useState(props.data.day);

    const sendData = (arr,day) => {
          fetch("/data",{
            method:"POST",
            body: JSON.stringify({name:name,email:email,day:Number(day),interests:arr}),
            headers: {
                 "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((e) => console.log(e))
    }


    const addInterest = (e) => {
        e.preventDefault();
        const interest = e.target[0].value;
        const arr = [...interests , interest];
        setInterests(arr);
        sendData(arr,day);
        // console.log(e);
        e.target.reset();
    }

    const removeInterest = (e) => {
        const id = e.target.id;
        // console.log(id);
        const arr = interests.filter((interest, index) => index !== Number(id));
        setInterests(arr);
        console.log(arr);
        sendData(arr,day);
    }

    const handleChange = (e) => {
        e.preventDefault();
        let d;
        for(let i=0;i<e.target.length;i++){
            if(e.target[i].checked){
                d = e.target[i].id;
            }
        }
        console.log(d);
        setDay(d);
        sendData(interests,d);
        e.target.reset();
    
    }

    return (
        <div className="flex flex-col p-7 md:p-10">
            <div className="flex p-3 md:p-10">
                <div className="flex gap-x-5 md:gap-x-10">
                    <img className="flex w-20 h-20 rounded-full justify-center" src={img} alt="User Image" />
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-x-5">
                            <h1 className="flex flex-col justify-center text-3xl text-slate-100">{name}</h1>
                        </div>
                        <p className="flex flex-col justify-center text-lg text-slate-200">[{email}]</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-5 p-3 md:p-10">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <h1 className="flex text-3xl p-3 text-slate-50">Preferences</h1>
                        <p className="flex flex-col justify-center text-xl text-slate-200 p-3">Your current day for receiving mail is {days[day]}.</p>
                    </div>
                    <form onSubmit={handleChange} className="flex gap-10 p-3 flex-wrap">
                        {days.map((day,index) => {
                            return(
                                <div key={index} className="flex gap-2 text-2xl"> 
                                    <input name="Days" id={index} className="" type="radio" value={day}/>
                                    <label className="flex flex-col justify-center text-slate-200">{day}</label>
                                </div>
                            )
                        })}
                        <button type="submit" className="flex bg-white hover:bg-sky-400 p-3 text-3xl w-28 justify-center rounded-xl ">Save</button>
                    </form>
                </div>
                <div className="flex flex-col md:p-5 gap-y-10">
                    <h1 className="flex flex-col justify-center uppercase text-3xl font-mono text-slate-50">Interests</h1>
                    <form onSubmit={addInterest} className="flex gap-x-10 bg-slate-900 rounded-xl w-80 p-2 text-slate-300">
                        <input className="flex rounded-xl bg-slate-900 p-3 outline-none" autoComplete="off" type="text" name="interest" id="" placeholder="Add interest" />
                        <button type="submit" className="flex flex-col justify-center rounded-full p-3 hover:bg-slate-500"><i className="fa-regular fa-plus fa-xl"></i></button>
                    </form>
                </div>
                <div className="flex gap-5 md:p-5 flex-wrap">
                    {interests.map((interest,index) => {
                        return (
                            <div key={index}  className="flex gap-x-5 bg-neutral-800 p-4 rounded-xl">
                                <p  className="text-2xl text-slate-200">{interest}</p>
                                <button onClick={removeInterest} id={index}  type="button"  className="flex flex-col justify-center rounded-full p-2 hover:bg-slate-300"><i id={index} className="fa-solid fa-xmark fa-xl" style={{color:"aliceblue"}}></i></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default User;