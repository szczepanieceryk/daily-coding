import React from 'react';
import Button from '../../components/Button';
import TaskDisplay from './TaskDisplay';
import useToDoList from '../../hooks/useToDoList';
const ToDoList = () => {
  const {
    task,
    selectedTask,
    displayedTask,
    handleSubmit,
    handleDeleteSingleTask,
    handleSelectTask,
    addTask,
    clearSelectedTasks,
  } = useToDoList();

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

      {selectedTask.length > 0 && (
        <Button
          style="primary"
          type="button"
          className="bg-red-600 hover:bg-red-600"
          content={`Clear task${selectedTask.length > 1 ? 's' : ''} (${selectedTask.length})`}
          onClick={clearSelectedTasks}
        />
      )}

      {displayedTask.length > 0 && (
        <div className="items-center">
          <span className="mb-2 block">Tasks list:</span>
          {displayedTask?.map?.((task, index) => (
            <TaskDisplay
              key={`${task}-${index}`}
              id={`#${index}`}
              task={task}
              onDelete={handleDeleteSingleTask}
              selectTask={handleSelectTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
