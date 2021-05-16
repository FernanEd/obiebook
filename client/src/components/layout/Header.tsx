import React, { useState } from "react";
import { LibraryBooks, GroupAdd } from "@material-ui/icons";
import Button from "../common/Button";

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
      <nav className="">
        <Button isGhost={true}>
          <LibraryBooks />
          News
        </Button>
        <Button>
          <GroupAdd />
          News
        </Button>
      </nav>
    </header>
  );
};

export default Header;
