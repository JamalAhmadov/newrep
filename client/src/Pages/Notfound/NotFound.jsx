import React from 'react'
import gif from '../../assets/notfound.gif'

const NotFound = () => {
  return (
    <div className="w-full h-[90vh] flex items-center bg-black text-white gap-12 flex-col justify-center">
      <h1 className="text-7xl">404 PAGE NOT FOUND</h1>
      <img src={gif} alt="" />
    </div>
  );
};

export default NotFound;
