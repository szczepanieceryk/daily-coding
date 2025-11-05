import React, { useState } from 'react';
import Button from '../components/Button';

interface TaskProps {
  task: string;
}

const TaskDisplay: React.FC<TaskProps> = ({ task }) => {
  const deleteTask = () => {
    console.log(`delete Task ${task}`);
  };

  return (
    <div className="p-3 my-3 mx-auto flex justify-between bg-gray-700 rounded-lg max-w-[300px]">
      <div className="text-left">
        <input type="checkbox" name="" id="" className="mr-2" />
        <span className="inline">{task}</span>
      </div>
      <div
        onClick={deleteTask}
        className="w-8 h-8 rounded-2xl border-2 border-red-400 text-red-400 cursor-pointer"
      >
        x
      </div>
    </div>
  );
};

const ToDoList = () => {
  const [task, setTask] = useState<string>('');
  const [displayedTask, setDisplayedTask] = useState<string[]>([]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    setTask(task);
    console.log(`${task} added to list`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (task.trim()) {
      setDisplayedTask([...displayedTask, task]);
      setTask('');
      console.log('submit form ');
    }
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
      {displayedTask.length > 0 && (
        <div className="items-center">
          <span className="mb-2 block">Tasks list:</span>
          {displayedTask?.map?.((task, index) => (
            <TaskDisplay key={`${task}-${index}`} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
