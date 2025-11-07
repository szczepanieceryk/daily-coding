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

      <div className="mt-[3rem] items-center min-h-[350px]">
        {displayedTask.length > 0 && (
          <div className="flex flex-wrap mx-auto justify-between items-center max-w-[300px] min-h-[60px]">
            <span className="mb-2 block text-left">Tasks list:</span>
            {selectedTask.length > 0 && (
              <Button
                style="primary"
                type="button"
                className="my-0 bg-red-600 hover:bg-red-600 w-[155px]"
                content={`Clear task${selectedTask.length > 1 ? 's' : ''} (${selectedTask.length})`}
                onClick={clearSelectedTasks}
              />
            )}
          </div>
        )}
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
    </div>
  );
};

export default ToDoList;
