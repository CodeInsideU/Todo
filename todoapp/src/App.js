import React, { useState } from 'react';
import Button from './components/Button';
import TodoRow from './components/TodoRow';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = prompt('Enter task:');
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="w-screen mx-auto p-4 bg-black h-screen text-center">
      <h1 className="text-2xl font-bold mb-4 text-white">ToDo List</h1>
      <Button variant="big" text="Add Task" onClick={handleAddTask} />
      {tasks.map((task, index) => (
        <TodoRow key={index} task={task} onDelete={() => handleDeleteTask(index)} />
      ))}
    </div>
  );
}

export default App;
