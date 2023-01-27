import React from "react";
import { Outlet } from "react-router";
import "../../styles/components/Wrapper.sass";

const Wrapper = () => {
  return <div className="wrapper">{<Outlet />}</div>;
};

export default Wrapper;
