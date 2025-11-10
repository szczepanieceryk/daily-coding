import React, { useState } from 'react';
const useToDoList = () => {
  const [task, setTask] = useState<string>('');
  const [displayedTask, setDisplayedTask] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string[]>([]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const task = e.target.value;
    setTask(task);
  };

  const handleDeleteSingleTask = (taskId: string): void => {
    const indexToDelete = parseInt(taskId.replace('#', ''));

    const newDisplayedTasks = displayedTask.filter((_, index) => index !== indexToDelete);
    setDisplayedTask(newDisplayedTasks);

    setSelectedTask(selectedTask.filter((id) => id !== taskId));
  };

  const clearSelectedTasks = (): void => {
    const newDisplayedTasks = displayedTask.filter((_, index) => {
      return !selectedTask.includes(`#${index}`);
    });
    setDisplayedTask(newDisplayedTasks);
    setSelectedTask([]);
  };

  const handleSelectTask = (taskId: string, isChecked: boolean): void => {
    if (isChecked) {
      setSelectedTask([...selectedTask, taskId]);
    } else {
      setSelectedTask(selectedTask.filter((id) => id !== taskId));
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (task.trim()) {
      setDisplayedTask([...displayedTask, task]);
      console.log('displayedTask ', displayedTask);
      setTask('');
      console.log('submit form ');
    }
  };

  return {
    task,
    selectedTask,
    displayedTask,
    addTask,
    handleDeleteSingleTask,
    clearSelectedTasks,
    handleSelectTask,
    handleSubmit,
  };
};

export default useToDoList;
