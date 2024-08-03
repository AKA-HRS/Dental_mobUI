import React from "react";
import { useNavigate } from "react-router-dom";

export function Secondary() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-full w-full items-center">
        <h1 className="mt-52 text-center text-4xl font-bold tracking-tighter leading-[2rem]">
          We believe
          <br />
          in the power
          <br />
          of your smile
        </h1>
        <div className="w-full text-center mt-32 mb-3">
          <p>Free Consultation</p>
        </div>
        <div className="flex w-full justify-center items-center ">
          <button
            onClick={() => navigate("appointment")}
            className="text-black bg-white hover:bg-blue-600 hover:text-white font-extrabold text-lg px-10 py-5 rounded-full"
          >
            Book Online
          </button>
        </div>
      </div>
    </>
  );
}
