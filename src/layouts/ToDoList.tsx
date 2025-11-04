import React, { useState } from 'react';
import Button from '../components/Button';
const ToDoList = () => {
  const [task, setTask] = useState<string>('');
  const [displayedTask, setDisplayedTask] = useState<string>('');
  const [isTaskSubmitted, setIsTaskSubmitted] = useState<boolean>(false);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    setTask(task);
    setDisplayedTask(task);
    console.log(`${task} added to list`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit form ');
    setIsTaskSubmitted(true);
    setTask('');
  };

  return (
    <div className="p-2 md:p-4 border-2 rounded-lg border-gray-200 text-center">
      <span className="block">
        <strong>To Do List App</strong>
      </span>
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
        <div className="md:flex flex-wrap justify-between content-center items-center">
          <label htmlFor="">
            <input
              type="text"
              name="task-input"
              placeholder="Add your task"
              className="p-2 rounded-md md:rounded-tr-none md:rounded-br-none border-gray-300 w-full h-[48px] text-black"
              onChange={addTask}
              value={task}
            />
          </label>
          <Button
            content="Add task"
            type="submit"
            style="primary"
            className="md:rounded-tl-none md:rounded-bl-none"
          />
        </div>
      </form>
      {isTaskSubmitted && <span className="block">Tasks list: {displayedTask}</span>}
    </div>
  );
};

export default ToDoList;
