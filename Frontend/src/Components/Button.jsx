import React from 'react';
import {useNavigate} from "react-router-dom"

const Button = ({ text,rounded,navigate }) => {
  const navigateTo = useNavigate()
  return (
    <button onClick={()=>navigateTo(navigate)}
      className={` MobileM:px-5 px-2 py-2 text-white font-normal rounded-full font-Montserrat hover:scale-[1.09] transition-all`}
      style={{
        background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
