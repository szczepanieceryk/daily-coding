import React, { useState } from 'react';
const useToDoList = () => {
  const [task, setTask] = useState<string>('');
  const [displayedTask, setDisplayedTask] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string[]>([]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task = e.target.value;
    setTask(task);
    console.log(`${task} added to list`);
  };

  const handleDeleteSingleTask = (taskId: string) => {
    const indexToDelete = parseInt(taskId.replace('#', ''));

    const newDisplayedTasks = displayedTask.filter((_, index) => index !== indexToDelete);
    setDisplayedTask(newDisplayedTasks);

    setSelectedTask(selectedTask.filter((id) => id !== taskId));
  };

  const clearSelectedTasks = () => {
    const newDisplayedTasks = displayedTask.filter((_, index) => {
      return !selectedTask.includes(`#${index}`);
    });
    setDisplayedTask(newDisplayedTasks);
    setSelectedTask([]);
    console.log('Deleted selected tasks');
  };

  const handleSelectTask = (taskId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedTask([...selectedTask, taskId]);
      console.log(`Selected : ${taskId}`);
    } else {
      setSelectedTask(selectedTask.filter((id) => id !== taskId));
      console.log(`Unselected: ${taskId} `);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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
