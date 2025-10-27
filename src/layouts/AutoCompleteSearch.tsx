import React from 'react';
import useAutoCompleate from '../hooks/useAutoComplete';

const AutoCompleateSearch: React.FC = () => {
  const { apiCallCount, loading, results, searachTerm, debouncedSearchTerm, handleChange } =
    useAutoCompleate();

  return (
    <div className="p-4 rounded-lg border-2 border-gray-300">
      <div className="text-center">
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
          className="p-3 w-full border-2 rounded-lg border-gray-100 focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none text-black"
          onChange={handleChange}
        />
      </div>

      <div className="p-4 rounded-md bg-gray-700 text-white">
        <div className="mb-2 flex justify-between">
          <span>Actual search: {searachTerm}</span>
          <span>API calls: {apiCallCount}</span>
        </div>
        <div>Debounced search: {debouncedSearchTerm}</div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">Searching...</span>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">
            Found {results.length} user{results.length !== 1 ? 's' : ''}:
          </h3>
          {results?.map?.((user) => (
            <div
              key={user.id}
              className="mb-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="font-medium text-gray-800">{user.name}</div>
              <div className="text-sm text-gray-600">{user.email}</div>
            </div>
          )) || []}
        </div>
      )}

      {!loading && debouncedSearchTerm && results.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No users found for {debouncedSearchTerm}
        </div>
      )}
    </div>
  );
};

export default AutoCompleateSearch;
