import React, { useState } from "react";
import {
  LibraryBooks,
  GroupAdd,
  AccountCircle,
  MeetingRoom,
} from "@material-ui/icons";
import Button from "../common/Button";

interface Props {}

const Header: React.FunctionComponent<Props> = () => {
  return (
    <header
      className="
      bg-secondary-400 text-white shadow-md p-2 
      flex justify-between items-center
      px-8
     "
    >
      <div
        id="logo"
        className="
          text-3xl font-bold
        "
      >
        Obiebook
      </div>
      <nav className="flex gap-2 items-center">
        <Button isGhost={true}>
          <LibraryBooks />
          News
        </Button>
        <Button isGhost={true}>
          <GroupAdd />
          Friend Requests
        </Button>
        <Button isGhost={true}>
          <AccountCircle />
          My profile
        </Button>
        <Button>Log out</Button>
      </nav>
    </header>
  );
};

export default Header;
