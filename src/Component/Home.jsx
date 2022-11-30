import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [totalCounter, setTotalCounter] = useState([]);
  return (
    <>
      <Navbar
        value={counter}
        totalCounter={totalCounter}
        setTotalCounter={setTotalCounter}
        setCounter={setCounter}
      />
      <div className="container-fluid mt-2">
        <div className="row">
            {
              totalCounter.map((item,i)=>{
                 return <div key={i} className="col-md-2 col-sm-4 col-6 ">{item}</div>
              })
            }

        </div>
      </div>
    </>
  );
}
