import React from "react";
import { Link, Route } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Contact from "./Contact";
import { Routes } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [clickState, setClickState] = useState(false);
  return (
    <div className="flex w-[1400px] absolute z-10 justify-between space-x-7 ml-4 items-center  mx-auto">
      <Link to="/">
        <img src={Logo} width={160} height={32} loading="lazy" />
      </Link>

                <Routes>
                    <Route path="/contact" element={<Contact clickState={clickState} setClickState={setClickState} />}></Route>
              </Routes>

      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">blog</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setClickState(true)} >Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
