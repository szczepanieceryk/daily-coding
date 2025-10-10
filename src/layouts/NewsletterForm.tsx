import React from 'react';
import Button from '../components/Button';
import useNewsletterForm from '../hooks/useNewsletterForm';

const NewsletterForm: React.FC = () => {
  const { email, errorMessage, responseMessage, isSuibmitting, handleChange, handleSubmit } =
    useNewsletterForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[2em] md:p-[3rem] w-80 md:w-[500px] mx-auto text-center text-white rounded-xl border-gray-300 bg-gray-700"
    >
      <span className="block text-2xl">Newsletter</span>
      <span className="block mt-2 mb-4">Stay up to date with our latest news and products.</span>

      <div className="md:flex justify-between content-center items-center">
        <input
          type="email"
          name="email-input"
          placeholder="Your email address"
          className="p-2 rounded-md md:rounded-tr-none md:rounded-br-none border-gray-300 w-full h-[48px]"
          required
          value={email}
          onChange={handleChange}
          disabled={isSuibmitting}
        />

        <Button
          content="subscribe"
          type="submit"
          style="primary"
          onClick={handleSubmit}
          className="uppercase md:rounded-tl-none md:rounded-bl-none"
        />
      </div>
      <div>
        {errorMessage && (
          <ul>
            {errorMessage?.map?.((error) => (
              <li key={error}>
                <small className="text-red-400">{error}</small>
              </li>
            )) || []}
          </ul>
        )}
        {responseMessage && (
          <ul>
            <li>
              <small>{responseMessage}</small>
            </li>
          </ul>
        )}
        <small className="block mt-2 italic text-gray-400">
          Your email is safe with us, we don`t spam.
        </small>
      </div>
    </form>
  );
};

export default NewsletterForm;
