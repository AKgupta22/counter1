import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Generic/Counter";

export default function Navbar({
  value,
  totalCounter,
  setTotalCounter,
  setCounter,
}) 
{
  const addCounter = () => {
    setTotalCounter([...totalCounter, <Counter setCounter={setCounter} />]);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                onClick={() => addCounter()}
              >
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Value = {value}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
