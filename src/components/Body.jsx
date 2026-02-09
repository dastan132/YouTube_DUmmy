import React from "react";
import MainContaint from "./MainContaint";
import ShortButtons from "./ShortButtons";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <>

    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
    </>
  );
};

export default Body;
