import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/pages";

export default function Layout() {
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden">
      <div className="w-full h-28 bg-white px-0.5">
        <Nav />
      </div>
      <div className="w-full h-[88%] text-white relative">
        <Outlet />
      </div>
    </div>
  );
}
