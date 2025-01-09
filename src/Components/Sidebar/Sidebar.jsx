import React from "react";
import dashicon from "../../assets/Dashboard.png";
import inboxicon from "../../assets/fi-rs-envelope.png";
import calendericon from "../../assets/fi-rr-calendar.png";
import reviews from "../../assets/fi-rr-comment-user.png";
import setting from "../../assets/setting1.png";
import insidesetting from "../../assets/setting2.png";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className=" w-[96px] h-[906px] gap-[8px] flex flex-col items-center text-cool-gray bg-gray-200">
      <div className="flex flex-col w-[96px] items-center justify-center h-[88px]  cursor-pointer">
        <img src={dashicon} alt="" className="w-[24px] h-[24px]" />
        <p className="text-[9px]">Dashboard</p>
      </div>
      <div className="flex flex-col w-[96px] items-center justify-center h-[88px] text-cool-gray cursor-pointer">
        <img src={inboxicon} alt="" className="w-[24px] h-[24px] " />
        <p className="text-[9px]">Dashboard</p>
      </div>
      <div className="flex flex-col w-[96px] items-center justify-center h-[88px] text-cool-gray cursor-pointer">
        <img src={calendericon} alt="" className="w-[24px] h-[24px] " />
        <p className="text-[9px]">Dashboard</p>
      </div>
      <div className="flex flex-col w-[96px] items-center justify-center h-[88px] text-cool-gray cursor-pointer">
        <img src={reviews} alt="" className="w-[24px] h-[24px] " />
        <p className="text-[9px]">Dashboard</p>
      </div>
      <Link to='/setting'> 
      <div className="flex flex-col w-[96px] items-center justify-center h-[88px] text-cool-gray cursor-pointer">
        <div className="w-[24px] h-[24px] relative">
          <img
            src={setting}
            alt=""
            className="absolute inset-0 w-[24px] h-[24px]"
          />
          <img src={insidesetting} alt="" className="absolute inset-0 m-auto" />
        </div>
        <p className="text-[9px]">Dashboard</p>
      </div>
      </Link>
    </div>
  );
};

export default Sidebar;
