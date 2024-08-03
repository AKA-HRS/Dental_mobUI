import React from "react";
import { useNavigate } from "react-router-dom";

export  function Nav() {
  const navigate = useNavigate()
  return (
    <div className="h-full w-full flex items-center justify-between">
     
      <div className=" h-full flex items-start justify-center flex-col tracking-[-0.07rem] ">
        <h1 onClick={()=>navigate('/')} className="uppercase cursor-pointer font-extrabold leading-[0.75] text-2xl">
          dental <br />helth
        </h1>
        <p className="text-xs font-bold">quality healthcare</p>
      </div>

      <div className="h-full flex items-center justify-center font-bold leading-[0.75] text-end">
        <p> Dental<br />Emergency</p>
      </div>
    </div>
  );
}
