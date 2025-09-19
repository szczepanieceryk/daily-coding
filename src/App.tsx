import React from 'react';
import Button from './components/Button';
import NewsletterForm from './layouts/NewsletterForm';
import AutoCompleateSearch from './layouts/AutoCompleteSearch';

const App = () => {
  const handleClick = () => console.log('Button clicked!');

  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-xl font-bold text-center">🚀 Daily codeing project</h1>
          <span className="block text-center">
            Here I add small parts of code, everyday, from 10 to 15min{' '}
          </span>

          <span className="block my-[2em]">
            <strong>Components:</strong>
          </span>

          <span className="block text-center">
            <strong>Buttons</strong>
          </span>
          <div className="my-[1em] flex flex-nowrap justify-between max-w-[550px] mx-auto">
            {/* Primary button */}
            <Button content="Primary button" style="primary" onClick={handleClick} type="button" />

            {/* Secondary button */}
            <Button
              content="Secondary button"
              style="secondary"
              onClick={handleClick}
              type="button"
            />

            {/* Disabled button */}
            <Button
              content="Disabled button"
              style="primary"
              onClick={handleClick}
              type="button"
              disabled={true}
            />
          </div>

          <span className="block mt-[4em]">
            <strong>Code snipets with functionality:</strong>
          </span>

          <span className="block text-center">
            <strong className="block mt-[3em] mb-[2em]">Newsletter form with validation</strong>
          </span>
          {/* Newsletter Form */}
          <NewsletterForm />
          <AutoCompleateSearch />
        </div>
      </div>
    </div>
  );
};

export default App;
