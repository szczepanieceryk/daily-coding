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

const questionCategory = {
  any: 'Random',
  '9': 'General Knowledge',
  '10': 'Entertainment: Books',
  '11': 'Entertainment: Film',
  '12': 'Entertainment: Music',
  '13': 'Entertainment: Musicals & Theatres',
  '14': 'Entertainment: Television',
  '15': 'Entertainment: Video Games',
  '16': 'Entertainment: Board Games',
  '17': 'Science & Nature',
  '18': 'Science: Computers',
  '19': 'Science: Mathematics',
  '20': 'Mythology',
  '21': 'Sports',
  '22': 'Geography',
  '23': 'History',
  '24': 'Politics',
  '25': 'Art',
  '26': 'Celebrities',
  '27': 'Animals',
  '28': 'Vehicles',
  '29': 'Entertainment: Comics',
  '30': 'Science: Gadgets',
  '31': 'Entertainment: Japanese Anime & Manga',
  '32': 'Entertainment: Cartoon & Animations',
};

const useTriviaQuizz = () => {
  const [question, setQuestion] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isAnswered) return;
    const newAnswer = e.target.value;
    setSelectedAnswer(newAnswer);
    setIsAnswered(true);

    if (newAnswer === correctAnswer) {
      console.log('correct answer !!');
      setResponseMessage('✅ Good answer! 🎉');
    } else {
      console.log('Uncorrect Answer :(');
      setResponseMessage(`❌ Wrong answer! Correct: ${correctAnswer}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const baseURL = 'https://opentdb.com/api.php?amount=1';
    const API_URL = selectedCategory ? `${baseURL}&category=${selectedCategory}` : baseURL;
    try {
      const res: Response = await fetch(API_URL, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        setErrorMessage("We can't show you a question right now :( . Try later sometime");
        throw new Error(`HTTP Response Error ${res.status}`);
      }

      const data: TriviaReponse = await res.json();
      const { question, correct_answer, incorrect_answers } = data.results[0];
      console.log(data.results[0]);
      setCorrectAnswer(correct_answer);
      const shuffledOptions: string[] = [...incorrect_answers, correct_answer].sort(
        () => Math.random() - 0.5,
      );

      setQuestion(decodeHtmlResponse(question));
      setOptions(shuffledOptions);
      setSelectedAnswer('');
      setIsAnswered(false);
      setResponseMessage('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage("We can't show you a question right now :( . Try later sometime");
      console.error(`Error: ${error}`);
    }
  };

  return {
    question,
    questionCategory,
    options,
    selectedAnswer,
    correctAnswer,
    isAnswered,
    responseMessage,
    errorMessage,
    handleChange,
    handleSelectChange,
    handleSubmit,
  };
};

export default useTriviaQuizz;
