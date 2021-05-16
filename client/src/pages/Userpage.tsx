import React, { useState } from "react";
import { useParams } from "react-router";

interface Props {}

interface Params {
  id: string;
}

const Userpage: React.FunctionComponent<Props> = () => {
  const { id } = useParams<Params>();

  return <div className="">hola</div>;
};

export default Userpage;
