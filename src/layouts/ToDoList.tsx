import React from 'react';
const ToDoList = () => {
  return (
    <div className="p-2 md:p-4 border-2 rounded-lg border-gray-200 text-center">
      <span className="block">
        <strong>To Do List App</strong>
      </span>
      <div className="mt-4 flex justify-center">
        <label htmlFor="">
          <input
            type="text"
            name="task-input"
            placeholder="Add your task"
            className="block p-2 md:p-4 rounded-lg"
          />
        </label>
      </div>
    </div>
  );
};

export default ToDoList;
