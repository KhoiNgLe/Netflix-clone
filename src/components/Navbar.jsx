import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      <div>
        <button>Sign In</button>
        <button className="bg-red-600">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
