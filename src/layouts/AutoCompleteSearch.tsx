import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const AutoCompleateSearch = () => {
  const [searachTerm, setSearchTerm] = useState<string>('');
  const [apiCallCount, setApiCallCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState([]);

  const debouncedSearchTerm = useDebounce(searachTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      setApiCallCount((count) => count + 1);
      serachUsers(debouncedSearchTerm)
        .then((users) => {
          setResult(users);
          setLoading(false);
        })
        .catch(() => {
          setResult([]);
          setLoading(false);
        });
    } else {
      setResult([]);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const serachUsers = async (query) => {
    // API call delay simulation
    await new Promise((resolve) => setTimeout(resolve, 300));

    const mockUsers = [
      { id: 1, name: 'John React Developer', email: 'john@react.com' },
      { id: 2, name: 'Jane JavaScript Expert', email: 'jane@js.com' },
      { id: 3, name: 'Bob React Native Pro', email: 'bob@reactnative.com' },
      { id: 4, name: 'Alice Vue Developer', email: 'alice@vue.com' },
      { id: 5, name: 'Charlie Angular Master', email: 'charlie@angular.com' },
      { id: 6, name: 'React Hooks Specialist', email: 'hooks@react.com' },
    ];

    return mockUsers.filter((user) => {
      user.name
        .toLocaleLowerCase()
        .includes(
          query.toLocaleLowerCase() ||
            user.email.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
        );
    });
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
          <span>API calls: {apiCallCount}</span>
        </div>
        <div>Debounced search: {debouncedSearchTerm}</div>
      </div>
    </div>
  );
};

export default AutoCompleateSearch;
