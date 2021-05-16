import React, { useState } from "react";
import {
  LibraryBooks,
  GroupAdd,
  AccountCircle,
  MeetingRoom,
  ExitToApp,
} from "@material-ui/icons";
import Button from "../common/Button";
import { Link } from "react-router-dom";

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
        <Link to="/news">
          <Button style="light" isGhost={true}>
            <LibraryBooks />
            News
          </Button>
        </Link>
        <Link to="/friendrequests">
          <Button style="light" isGhost={true}>
            <GroupAdd />
            Friend Requests
          </Button>
        </Link>
        <Link to="/users/a">
          <Button style="light" isGhost={true}>
            <AccountCircle />
            My profile
          </Button>
        </Link>
        <Link to="/logout">
          <Button>
            <ExitToApp />
            Log out
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
