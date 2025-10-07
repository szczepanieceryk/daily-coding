import { useState } from 'react';
const useTriviaQuizz = () => {
  const [question, setQuestion] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [options, setOptions] = useState(['']);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event ', e.target.value);
    setSelectedAnswer(e.target.value);
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
      setSelectedAnswer('');
      console.log('data ', data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return { question, category, options, selectedAnswer, handleChange, handleSubmit };
};

export default useTriviaQuizz;
