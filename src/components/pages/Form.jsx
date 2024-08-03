import React, { useState, useEffect, useTransition } from "react";
import { FormUI } from "../UI";
import "./Form.css";

export function Form() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsMounted(true);
    });
  }, []);

  return (
    <div className="w-full h-full text-black flex flex-col">
      <div
        className={`w-full h-1/4 flex justify-center items-center text-8xl font-bold leading-[4.9rem] text-center transition-transform ease-in-out duration-1000 ${
          isMounted ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1>
          BOOK
          <br />
          Online
        </h1>
      </div>
      <div
        className={`form w-full h-3/4 rounded-t-3xl overflow-hidden transition-transform duration-1000 ${
          isMounted ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <FormUI />
      </div>
    </div>
  );
}
