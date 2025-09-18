import { useState } from 'react';
import { validateEmailInput } from '../utils/validators';

const useNewsletterForm = () => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [isSuibmitting, setIsSuibmitting] = useState<boolean>(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const result = e.target.value;
    setEmail(result);
    if (errorMessage) setErrorMessage('');
    if (responseMessage) setResponseMessage('');
  };

  const mockApiCall = (): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      // Deleay simulation
      setTimeout(() => {
        // Response message mockup
        const randomSuccess = Math.random() > 0.2; // 80% of success

        if (randomSuccess) {
          resolve({
            success: true,
            message: 'Thanks for signing up! Welcome to our newsletter! 🎉',
          });
        } else {
          resolve({
            success: false,
            message: 'Something went wrong. Please try again later.',
          });
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setErrorMessage('');
    setResponseMessage('');

    const formValidator = validateEmailInput(email);
    if (formValidator) {
      setErrorMessage(formValidator);
      return;
    }

    setIsSuibmitting(true);

    try {
      const response = await mockApiCall();
      if (response.success) {
        setResponseMessage(response.message);
        setEmail('');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setIsSuibmitting(false);
    }
  };

  return {
    email,
    errorMessage,
    responseMessage,
    isSuibmitting,
    onInputChange,
    handleSubmit,
  };
};

export default useNewsletterForm;
