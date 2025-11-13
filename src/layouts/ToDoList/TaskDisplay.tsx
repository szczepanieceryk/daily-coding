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
        <label className="inline-flex items-center cursor-pointer group" htmlFor={id}>
          <div className="relative">
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              id={id}
              className="sr-only peer"
              value={task}
            />
            {/* Checkbox box */}
            <div className="w-5 h-5 border-2 border-gray-400 rounded bg-gray-600 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-gray-300"></div>
            {/* Checkmark */}
            <svg
              className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="ml-2">{task}</span>
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
