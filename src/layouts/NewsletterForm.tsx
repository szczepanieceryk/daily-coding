import React from 'react';
import Button from '../components/Button';
import { useState } from 'react';
const NewsletterForm: React.FC = () => {
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

  const validateEmailInput = (email: string): string => {
    if (!email) {
      return 'Email canot be empty';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
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

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[2em] w-80 mx-auto md:w-96 text-center text-white rounded-xl border-gray-300 bg-gray-700"
    >
      <span className="block text-2xl">Newsletter</span>
      <span className="block mt-2 mb-4">Stay up to date with our latest news and products.</span>

      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-md border-gray-300"
          required
          value={email}
          onChange={onInputChange}
          disabled={isSuibmitting}
        />
        <div>
          {errorMessage && (
            <ul>
              <li>
                <small className="text-red-400">{errorMessage}</small>
              </li>
            </ul>
          )}

          {responseMessage && (
            <ul>
              <li>
                <small>{responseMessage}</small>
              </li>
            </ul>
          )}
        </div>
        <Button
          content="subscribe"
          type="submit"
          style="primary"
          onClick={handleSubmit}
          className="uppercase"
        />
        <small className="block mt-2 italic text-gray-400">
          Your email is safe with us, we don`t spam.
        </small>
      </div>
    </form>
  );
};

export default NewsletterForm;
