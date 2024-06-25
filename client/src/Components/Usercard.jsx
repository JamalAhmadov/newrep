import React from "react";
import { useNavigate } from "react-router-dom";

const Usercard = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-80 flex flex-col py-8 justify-between items-center rounded bg-white mx-6 shadow-custom mb-4">
      <div className="w-full flex flex-col justify-center items-center">
        <img className="rounded-full w-[100px]" src={props.avatar} alt="" />
        <h1 className="text-lg font-medium text-slate-950 cursor-pointer p-1">{props.name}</h1>
        <h2 className="text-gray-600">{props.job}</h2>
      </div>
      <button
        className="bg-blue-700 text-white py-2 px-7 rounded-md"
        onClick={() => {
          navigate(`users/${props.id}`);
        }}
      >
        Profilə Bax
      </button>
    </div>
  );
};

export default Usercard;
