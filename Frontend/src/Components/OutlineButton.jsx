import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-3 text-white font-normal hover:scale-[1.02] rounded-full"
      style={{
        backgroundColor: 'transparent', // Transparent background
        border: '4px solid', // Set the border thickness
        borderRadius: '9999px', // Make the button fully rounded
        borderImage: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
        borderImageSlice: 1, // Apply gradient to the border
      }}
    >
      {text}
    </button>
  );
};

export default Button;
