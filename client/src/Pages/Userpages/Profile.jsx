import React from "react";
import Sidebar from "../../Components/Userpagecomps/Sidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex w-full">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
