import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  //  const token=sessionStorage.getItem("token"); 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("email:", email)
    console.log("password:", password)
    actions.signup(email, password)
      .then((data) => {
        console.log("data", data)
        if (data.msg === "user created successfully") {
          alert("sign up successful please log in");
          navigate("/login")

        } else if (data.status_code == 400) {
          alert(data.msg);
        } else {
          alert("sign up failed;", data.msg)
        }
      })
      .catch((error) => {
        alert("unexpected error during sign up", error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}