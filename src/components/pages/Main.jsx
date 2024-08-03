import React, { useEffect, useState, useTransition } from "react";
import img1 from "../../assets/img5.jpeg";
import img2 from "../../assets/img1.jpeg";
import { Button } from "../UI";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import './animations.css'

export function Main() {
  const contents = [<Primary />, <Secondary />];
  const images = [img1, img2];
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition(() => {
        setIndex((prevIndex) => (prevIndex + 1) % contents.length);
        setBgIndex((prevBgIndex) => (prevBgIndex + 1) % images.length);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [startTransition]);

  return (
    <div
      className={`absolute w-full h-full transition-all duration-1000 ease-linear ${
        isPending ? "fade-out" : "fade-in"
      }`}
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
        clipPath: "inset(0 0 0 0 round 2rem 2rem 0 0)",
      }}
    >
      <Button />
      <div
        className={`relative z-10 w-full h-full flex overflow-hidden border-4 rounded-3xl flex-col justify-around items-center ease-in-out transition-transform duration-1000 ${
          isPending ? "-transform translate-x-full" : "transform translate-x-0"
        }`}
      >
        {contents[index]}
      </div>
    </div>
  );
}
