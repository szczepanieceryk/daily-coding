import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

interface User {
  id: number;
  name: string;
  email: string;
}

const serachUsers = async (query: string): Promise<User[]> => {
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

  return mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()),
  );
};

const useAutoCompleate = () => {
  const [searachTerm, setSearchTerm] = useState<string>('');
  const [apiCallCount, setApiCallCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Array<User>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce(searachTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      setApiCallCount((count) => count + 1);
      serachUsers(debouncedSearchTerm)
        .then((users) => {
          setResults(users);
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return {
    apiCallCount,
    loading,
    results,
    searachTerm,
    debouncedSearchTerm,
    setSearchTerm,
    handleChange,
  };
};

export default useAutoCompleate;
