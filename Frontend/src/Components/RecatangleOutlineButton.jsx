import React from 'react';
import {useNavigate} from "react-router-dom";


const Button = ({ text,rounded,navigateTo }) => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(navigateTo)}
      className={`px-6 py-2  text-white font-normal font-Montserrat hover:scale-[1.09] transition-all border-2 border-white text-center`}
      
    >
      {text}
    </button>
  );
};

export default Button;
