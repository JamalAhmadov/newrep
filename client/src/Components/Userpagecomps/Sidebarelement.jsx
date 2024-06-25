import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebarelement = ({ icon, text, to, onClick }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      className="flex items-center w-full h-10 md:pl-8 pl-6 border-l-4 hover:border-blue-700 cursor-pointer relative group"
    >
      <span className="flex items-center gap-2 opacity-65 transition-opacity duration-200 hover:text-blue-700">
        {icon} <h2 className='md:flex hidden'>{text}</h2>
      </span>

      <div className='w-28 min-h-8 hidden items-center text-white font-semibold pl-2 absolute bg-sky-400 left-20 rounded-sm transition-all duration-300 ease-in-out group-hover:flex md:group-hover:hidden'>
        {text}
      </div>
    </div>
  );
};

Sidebarelement.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Sidebarelement;
