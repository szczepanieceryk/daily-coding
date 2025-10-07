import React, { useState } from 'react';
import Button from '../components/Button';

const TriviaQuizz = () => {
  const [question, setQuestion] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [options, setOptions] = useState(['']);

  const handleChange = (e: React.ChangeEvent) => {
    console.log('event ', e.target);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res: Response = await fetch('https://opentdb.com/api.php?amount=10', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP Response Error ${res.status}`);
      }

      const data = await res.json();
      console.log('data ', data);
      const { category, question, correct_answer, incorrect_answers } = data.results[0];
      const options = [...incorrect_answers, correct_answer];

      setQuestion(question);
      setCategory(category);
      setOptions(options);

      console.log('data ', data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div className="p-2 md:p-4 my-[4rem] rounded-lg border-2 border-gray-200 text-center">
      <span className="block">
        <strong>Trivia Quizz</strong>
      </span>

      <form onSubmit={handleSubmit}>
        {category && (
          <span className="block mb-4">
            <strong>Category</strong>: {category}
          </span>
        )}

        {question && (
          <span className="block my-4 p-6 rounded-md bg-gray-700 text-white">{question}</span>
        )}

        {options && (
          <fieldset className="flex flex-wrap justify-center md:justify-between max-w-md mx-auto my-6">
            {options?.map?.((answer, i) => (
              <div
                key={`${i}`}
                className="p-2 my-2 rounded-lg border-2 border-gray-200 hover:border-gray-100 min-w-[200px] hover:bg-gray-300 cursor-pointer"
              >
                <input onChange={handleChange} type="radio" id={`${i}`} value={answer} />
                <label htmlFor={`${i}`}>{answer}</label>
              </div>
            ))}
          </fieldset>
        )}
        <Button style="primary" type="submit" content="Show Question" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default TriviaQuizz;
