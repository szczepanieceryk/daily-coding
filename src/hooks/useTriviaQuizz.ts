import { useState } from 'react';
import { decodeHtmlResponse } from '../utils/helpers';

interface TriviaQuestion {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaReponse {
  response_code: number;
  results: TriviaQuestion[];
}

const useTriviaQuizz = () => {
  const [question, setQuestion] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [options, setOptions] = useState<string[]>(['']);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = e.target.value;
    setSelectedAnswer(newAnswer);

    if (newAnswer === correctAnswer) {
      console.log('correct answer !!');
      setResponseMessage('Good answer! 🎉');
    } else {
      console.log('Uncorrect Answer :(');
      setResponseMessage('Wrong answer :( . Try again');
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res: Response = await fetch('https://opentdb.com/api.php?amount=1', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        setErrorMessage("We can't show you a question right now :( . Try later sometime");
        throw new Error(`HTTP Response Error ${res.status}`);
      }

      const data: TriviaReponse = await res.json();
      const { category, question, correct_answer, incorrect_answers } = data.results[0];
      console.log(data.results[0]);
      setCorrectAnswer(correct_answer);
      const options: string[] = [...incorrect_answers, correct_answer].sort(
        () => Math.random() - 0.5,
      );

      setQuestion(decodeHtmlResponse(question));
      setCategory(decodeHtmlResponse(category));
      setOptions(options);
      setSelectedAnswer('');
      setResponseMessage('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage("We can't show you a question right now :( . Try later sometime");
      console.error(`Error: ${error}`);
    }
  };

  return {
    question,
    category,
    options,
    selectedAnswer,
    responseMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};

export default useTriviaQuizz;
