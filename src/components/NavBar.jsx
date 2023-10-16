import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import profile from "../assets/icons/profile.png";
import Register from "../views/Register";
import { useAuthContext } from "../context/AuthContext";
import Login from "../views/Login";

export default function NavBar() {
  const { registerModalOpen, setRegisterModalOpen, setLoginModalOpen, loginModalOpen } = useAuthContext()

  return (
    <nav className="flex items-center justify-between px-[50px] py-[15px] border-b-2 bg-white border-black shadow-xl sticky top-0" >
      <div className="flex items-center">
        <img className="w-[50px]" src={logo} />

        <h1 className="text-4xl font-semibold italic ml-5">My CV Resume</h1>
      </div>
      <div className="flex items-center font-semibold">
        <button onClick={(event) => {
          event.stopPropagation()
          setLoginModalOpen(true)
        }} className="m-4 ">LOG IN</button>
        <Login modalOpen={loginModalOpen} setModalOpen={setLoginModalOpen}/>
        <button onClick={(event) => {
          event.stopPropagation()
          setRegisterModalOpen(true)
        }} className="m-4">CREATE ACCOUNT</button>
        <Register modalOpen={registerModalOpen} setModalOpen={setRegisterModalOpen} />
        <img className="w-[50px]" src={profile} />
      </div>
    </nav >
  )
}
