import React from 'react';
interface TaskProps {
  id: string;
  task: string;
  onDelete: (id: string) => void;
  selectTask: (id: string, isChecked: boolean) => void;
}

const TaskDisplay: React.FC<TaskProps> = ({ id, task, onDelete, selectTask }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    selectTask(id, e.target.checked);
  };

  const handleDeleteTask = (): void => {
    onDelete(id);
  };

  return (
    <div className="p-3 my-3 mx-auto flex justify-between items-center bg-gray-700 rounded-lg max-w-[300px]">
      <div className="text-left">
        <label className="inline cursor-pointer" htmlFor={id}>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            name=""
            id={id}
            className="mr-2"
            value={task}
          />
          {task}
        </label>
      </div>
      <div
        onClick={handleDeleteTask}
        className="w-8 h-8 rounded-2xl border-2 border-red-400 text-red-400 cursor-pointer"
      >
        x
      </div>
    </div>
  );
};
export default TaskDisplay;
