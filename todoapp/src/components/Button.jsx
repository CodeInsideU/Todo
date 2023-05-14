import React from 'react';

const Button = ({ variant, text, onClick }) => {
  const size = variant === 'big' ? 'py-2 px-4' : 'py-1 px-3';

  return (
    <button
      className={`${size} bg-blue-500 text-white rounded-md hover:bg-blue-700`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
