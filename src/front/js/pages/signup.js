import React,{useContext,useState} from "react";
import { Context } from "../store/appContext";
export const Signup=()=>{
 const {store,actions}=useContext(Context);
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const token=sessionStorage.getItem("token"); 
     const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("email:",email)
      console.log("password:",password)

     }

return (
    <div>
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" value={email} onChange ={(e)=>setEmail(e.target.value)}id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"value={password} onChange ={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
)
}