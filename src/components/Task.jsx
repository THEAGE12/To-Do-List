import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  const taskStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    border: '1px solid #ddd',
    marginBottom: '8px',
    backgroundColor: task.completed ? '#e0f7fa' : 'inherit',
  };

  const textStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
  };

  return (
    <div style={taskStyle}>
      <span style={textStyle}>{task.content}</span>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;