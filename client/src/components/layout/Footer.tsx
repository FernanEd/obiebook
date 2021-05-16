import Button from "../common/Button";
import { GitHub } from "@material-ui/icons";
import React, { useState } from "react";

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <footer className=" bg-neutral-600 text-white shadow-md p-2 text-center">
      <p>
        Made by{" "}
        <a
          href="https://github.com/FernanEd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-300"
        >
          FernanEd.
        </a>{" "}
        2021
      </p>
    </footer>
  );
};

export default Footer;
