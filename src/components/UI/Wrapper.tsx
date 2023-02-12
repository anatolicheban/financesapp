import React from "react";
import { Outlet } from "react-router";
import "../../styles/components/Wrapper.sass";

const Wrapper = () => {
  return (
    <div className="root">
      <div className="wrapper">{<Outlet />}</div>
    </div>
  );
};

export default Wrapper;
