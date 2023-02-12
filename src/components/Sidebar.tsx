import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../data/dummy";
import { RiAccountCircleFill } from "react-icons/ri";
import "../styles/components/Sidebar.sass";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <nav>
          {sidebarLinks.map(({ id, Icon, path, title }) => (
            <NavLink className={"sidebar__link"} to={path} key={id}>
              <span className="sidebar__link-bg">
                <Icon />
              </span>
              <Icon />
              <span>{title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
