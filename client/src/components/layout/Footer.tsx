import React, { useState } from "react";

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <footer className=" bg-neutral-600 text-white shadow-md p-2 text-center">
      <p>Made by FernanEd. 2021</p>
    </footer>
  );
};

export default Footer;
