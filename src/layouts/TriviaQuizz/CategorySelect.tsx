import React from 'react';

interface CategorySelectProps {
  questionCategory: Record<string, string>;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  questionCategory,
  handleSelectChange,
}) => {
  return (
    <label htmlFor="question-category-id" className="block">
      Select category :
      <select
        name="question-category"
        id="question-category-id"
        className="block p-2 rounded-md my-2 mx-auto max-w-[350px] cursor-pointer text-center bg-gray-700 text-white"
        onChange={handleSelectChange}
      >
        <option value="any">Random</option>
        {Object.entries(questionCategory).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CategorySelect;
