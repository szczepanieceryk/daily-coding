import React from 'react';
import Button from '../components/Button';
import { useState } from 'react';
const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string[]>(['']);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const result = e.target.value;
    setEmail(result);
  };

  const validateEmailInput = (email: string): string[] => {
    const errors: string[] = [''];
    if (!email) {
      errors.push('Email canot be empty');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email address');
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const formValidator = validateEmailInput(email);
    setErrorMessage(formValidator);

    console.log(`Newsletter Submitted for email ${email}`);

    if (formValidator.length === 0) {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[2em] text-center text-white rounded-xl border-gray-300 bg-gray-700"
    >
      <span className="block text-2xl">Newsletter</span>
      <span className="block mt-2 mb-4">Stay up to date with our latest news and products.</span>

      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-md border-gray-300"
          required
          onChange={onInputChange}
        />
        <div>
          {errorMessage && (
            <ul>
              <li>
                {errorMessage.map((error) => (
                  <small key={error} className="text-red-400">
                    {error}
                  </small>
                ))}
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
