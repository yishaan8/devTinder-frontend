import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login= ()=>{

    const[emailId,setEmailid]=useState();
    const[password,setpassword]=useState();
    const dispatch=useDispatch();

    const handleLogin = async () =>{
        try{
     const res = await  axios.post("http://127.0.0.1:3000/login",{
            emailId,
            password
        },{ withCredentials:true })
        dispatch(addUser(res.data));
    }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" value={emailId} className="input" onChange={(e)=> setEmailid(e.target.value)} />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" value={password} onChange={(e)=>setpassword(e.target.value)} />
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
    )
}

export default Login;