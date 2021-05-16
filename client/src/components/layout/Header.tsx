import React, { useState } from "react";

interface Props {}

const Header: React.FunctionComponent<Props> = () => {
  return (
    <header className=" bg-secondary-400 text-white shadow-md p-2">
      <div
        id="logo"
        className="
          text-xl font-bold
        "
      >
        Obiebook
      </div>
      <nav className=""></nav>
    </header>
  );
};

export default Header;
