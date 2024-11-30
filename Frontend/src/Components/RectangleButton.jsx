import React from 'react';

const Button = ({ text,rounded }) => {
  return (
    <button
      className={`px-3 py-2  text-white font-normal font-Montserrat hover:scale-[1.09] transition-all bg-purple-700`}
      
    >
      {text}
    </button>
  );
};

export default Button;
