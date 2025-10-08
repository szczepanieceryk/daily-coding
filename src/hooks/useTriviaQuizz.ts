import { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);

    if (isAnswerCorrect()) {
      console.log('correct answer !!');
      setResponseMessage('Good answer!');
    } else {
      console.log('Uncorrect Answer :(');
      setResponseMessage('Wrong answer :( . Try again');
    }
  };

  const isAnswerCorrect = (): boolean => selectedAnswer === correctAnswer;

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

      const data: TriviaReponse = await res.json();
      const { category, question, correct_answer, incorrect_answers } = data.results[0];
      setCorrectAnswer(correctAnswer);
      const options: string[] = [...incorrect_answers, correct_answer].sort(
        () => Math.random() - 0.5,
      );

      setQuestion(question);
      setCategory(category);
      setOptions(options);
      setSelectedAnswer('');
      setResponseMessage('');
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return {
    question,
    category,
    options,
    selectedAnswer,
    responseMessage,
    handleChange,
    handleSubmit,
  };
};

export default useTriviaQuizz;
