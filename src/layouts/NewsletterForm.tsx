import React from 'react';
import Button from '../components/Button';
import useNewsletterForm from '../hooks/useNewsletterForm';

const NewsletterForm: React.FC = () => {
  const { email, errorMessage, responseMessage, isSuibmitting, onInputChange, handleSubmit } =
    useNewsletterForm();

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
