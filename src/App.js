import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (content) => {
    const newTask = { id: Date.now(), content, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={appStyle}>
      <h1 style={{ textAlign: 'center' }}>To-Do App</h1>
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
      <AddTask onAdd={handleAddTask} />
    </div>
  );
};

export default App;