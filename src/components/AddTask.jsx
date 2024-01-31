import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const addTaskStyle = {
    marginTop: '16px',
  };
  const button_style = {
    backgroundColor: '#4CAF50', 
            color: 'white', 
            padding: '10px 20px', 
            fontSize: '16px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 

  }
  const input_field_style = {

    marginRight: '8px', 
          padding: '8px', 
          border: '1px solid #ccc', 
          borderRadius: '5px', 
  }

  return (
    <div style={addTaskStyle}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={input_field_style}
      />
       <button
        onClick={() => {
          if (newTask.trim() !== '') {
            onAdd(newTask);
            setNewTask('');
          }
        }}
        style={
           button_style 
        }
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;