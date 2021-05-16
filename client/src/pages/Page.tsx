import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

interface Props {}

const Page: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
