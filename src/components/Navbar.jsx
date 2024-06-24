import React from "react";
import logo from "../assets/logo.svg";
import profileImg from "../assets/profile.png";

export const backend_url = "https://emarat-seven.vercel.app/";

const Navbar = () => {
  return (
    <nav className="bg-white py-2 ring-1 ring-slate-900/5 relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 flexBetween">
        <div>
          <img src={logo} alt="logoIcon" />
        </div>
        <div className="hidden sm:flex uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1">
          Admin Panel
        </div>
        <div>
          <img src={profileImg} alt="" className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;