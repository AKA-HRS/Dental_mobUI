import React, { useEffect, useState } from "react";
import { format, addMinutes, isToday, isPast } from "date-fns";
import { useNavigate } from "react-router-dom";

export function FormUI() {
  const navigate= useNavigate()
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    setDates(dates);
  };

  const generateTimeSlots = () => {
    const times = [];
    const startTime = new Date();
    startTime.setHours(10, 0, 0, 0); 
    const endTime = new Date();
    endTime.setHours(17, 0, 0, 0);

    let time = startTime;
    while (time <= endTime) {
      times.push(new Date(time));
      time = addMinutes(time, 30);
    }
    setTimes(times);
  };

  useEffect(() => {
    generateDates();
    generateTimeSlots();
  }, []);

  const handleDateSelect = (index) => {
    setSelectedDateIndex(index);
    setSelectedTimeIndex(null);
  };

  const handleTimeSelect = (index, time) => {
    if (
      !(isToday(dates[selectedDateIndex]) && isPast(time) && time < new Date())
    ) {
      setSelectedTimeIndex(index);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-transparent m-0">
      <div className="bg-white bg-opacity-20 rounded-3xl p-6 w-full h-full text-center">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-3 py-5 outline-none text-center font-bold rounded-full bg-[rgba(255,255,255,0.25)] bg-opacity-30 text-white placeholder-white"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="w-full mb-4 px-3 py-5 outline-none text-center font-bold rounded-full bg-[rgba(255,255,255,0.25)] bg-opacity-30 text-white placeholder-white"
        />
        <div className=" h-56 flex flex-col justify-evenly">
          <div className="overflow-x-scroll flex space-x-3">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(index)}
                className={`flex flex-col items-center justify-center ${
                  index === selectedDateIndex
                    ? "bg-opacity-100 text-black bg-white"
                    : "bg-opacity-20 text-white bg-[rgba(255,255,255,0.25)]"
                } backdrop-blur-md rounded-3xl py-2 px-4 w-24 h-16 my-2 font-bold`}
              >
                <span className="text-3xl">{format(date, "dd")}</span>
                <span className="text-xs">{format(date, "EEE")}</span>
              </button>
            ))}
          </div>

          <div className="overflow-x-scroll flex space-x-2 mb-4">
            {times.map((time, index) => {
              const isDisabled =
                isToday(dates[selectedDateIndex]) &&
                isPast(time) &&
                time < new Date();

              return (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(index, time)}
                  disabled={isDisabled}
                  className={`flex flex-col items-center ${
                    isDisabled
                      ? "bg-opacity-10 text-white cursor-not-allowed"
                      : index === selectedTimeIndex
                      ? "bg-opacity-100 text-black bg-white"
                      : "bg-opacity-20 text-white bg-[rgba(255,255,255,0.25)] "
                  }  backdrop-blur-md rounded-3xl py-2 px-4 w-20 h-16 my-2 font-bold`}
                >
                  <span className="text-xl">{format(time, "h:mm")}</span>
                  <span className="text-xs">{format(time, "a")}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button className="bg-white w-full text-black text-3xl mt-5 font-bold py-6 px-6 rounded-full"
        onClick={()=>navigate('/')}>
          Book Now
        </button>
      </div>
    </div>
  );
}
