import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="task-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={toggleTask}>Mark as Completed</button>
      <button className="delete" onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;

