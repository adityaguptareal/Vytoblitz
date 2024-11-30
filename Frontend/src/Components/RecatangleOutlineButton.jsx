import React from 'react';

const Button = ({ text,rounded }) => {
  return (
    <button
      className={`px-6 py-2  text-white font-normal font-Montserrat hover:scale-[1.09] transition-all border-2 border-white text-center`}
      
    >
      {text}
    </button>
  );
};

export default Button;
