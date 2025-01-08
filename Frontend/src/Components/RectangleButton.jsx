import React from 'react';
import {useNavigate} from "react-router-dom";


function RectangleButton({ text,navigateTo  }) {
const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(navigateTo)}
      className={`px-3 py-2  text-white font-normal font-Montserrat hover:scale-[1.09] transition-all bg-purple-700`}
      
    >
      {text}
    </button>
  );
};

export default RectangleButton;
