import React from "react";
import { useNavigate } from "react-router-dom";

export function Button() { 
  const navigate = useNavigate()
  const handelNavi= () =>{
      navigate("appointment")
  }
  return (
    <div className="w-full h-20 border-4 border-white flex justify-center items-center text-white font-bold rounded-[30px] overflow-hidden">
      <button
      onClick={handelNavi}
        className="w-full h-full text-xl font-bold active:opacity-75"
      >
        Menu
      </button>
    </div>
  );
}
