import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  //const [user, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3001/register").then((res) => {
      // console.log(res.data);
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { email, username, password })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[100%] h-[100%] bg-[#ddd5d5] text-black flex justify-center items-center">
        <form
          className="text-center border border-zinc-700 rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleRegister}
        >
          {/* Email Input */}
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl text-[#ddd5d5] bg-zinc-700 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          {/* Username Input */}
          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl text-[#ddd5d5] bg-zinc-700 p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          {/* Passwoed Input */}
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl text-[#ddd5d5] bg-zinc-700 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/*Button*/}
          <button
            className="w-[200px] h-[50px] border border-gray-800 rounded-xl hover:bg-zinc-700"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      {/*<div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800 ">
        <h2 className="text-3xl text-white">SIGNUP</h2>
  </div>*/}
    </div>
  );
}

export default SignUp;
