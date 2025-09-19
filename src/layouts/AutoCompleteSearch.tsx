import React from 'react';
import { useState } from 'react';

const AutoCompleateSearch = () => {
  const [searachTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="mt-[4em] text-center">
        <span className="block mb-3">
          <strong>Auto compleate searach</strong>
        </span>
        <span className="block text-gray-600">Type `react` or `javascript` to see result</span>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searachTerm}
          className="p-3 w-full border-2 rounded-lg border-gray-100 focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none"
          onChange={handleChange}
        />
      </div>

      <div className="p-4 rounded-md bg-gray-100">
        <div className="mb-2 flex justify-between">
          <span>Actual search: {searachTerm}</span>
          <span>API calls:</span>
        </div>
        <div>Debounced search:</div>
      </div>
    </div>
  );
};

export default AutoCompleateSearch;
