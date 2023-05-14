import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

const TodoRow = ({ task, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleHover = (isHovered) => {
    setHover(isHovered);
  };

  if (!task) {
    return null;
  }

  return (
    <div 
      className="flex items-center py-2 border-b border-gray-300 ml-3 mb-4" 
      onMouseEnter={() => handleHover(true)} 
      onMouseLeave={() => handleHover(false)}
    >
      <Checkbox label={task} checked={checked} onChange={handleCheckboxChange} />
      <div className='ml-10'></div>
      {hover && <Button variant="small" text="Delete" onClick={onDelete} />}
    </div>
  );
};

export default TodoRow;
