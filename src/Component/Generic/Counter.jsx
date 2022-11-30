import React, { useEffect, useState } from "react";

export default function Counter({setCounter}) {
  const [currValue, setCurrValue] = useState(0);
  const [text, setText] = useState("Start");
  const Handler = () => {
    if (text === "Start") setText("Stop");
    else setText("Start");
  };

  useEffect(() => {
    let timer;
    if (text === "Stop")
      timer = setInterval(() => {
        setCurrValue((prev) => prev + 1);
        setCounter(prev=>prev+1)
      }, 1000);
    else clearInterval(timer);
    return () => {
      clearInterval(timer);
    };
  }, [text,setCounter]);
  return (
    <div className="counter w-100">
      <button className="btn btn-sm w-100 btn-danger text-light text-center">
        Current Value :{currValue}
      </button>
      <button
        className="btn btn-sm w-100 btn-primary text-light text-center"
        onClick={Handler}
      >
        {text}
      </button>
    </div>
  );
}
