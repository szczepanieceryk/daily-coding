import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = () => console.log('Button clicked!');

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Daily codeing project</h1>
        <span className="block text-center">
          Here I add small parts of code, everyday, from 10 to 15min{' '}
        </span>
        <div className="mt-[3em] flex flex-wrap justify-center max-w-[200px] mx-auto">
          <span>
            <strong>Components</strong>
          </span>
          <Button
            content="Primary button"
            style="primary"
            onClick={handleClick}
            disabled={false}
            type="button"
          />
          <Button
            content="Secondary button"
            style="secondary"
            onClick={handleClick}
            disabled={false}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
