import React from 'react';
import Button from '../components/Button';

const NewsletterForm: React.FC = () => {
  const handleClick = () => console.log('Form Submitted');
  return (
    <form
      action=""
      className="p-[2em] text-center text-white rounded-xl border-gray-300 bg-gray-700"
    >
      <span className="block text-2xl">Newsletter</span>
      <span className="block mt-2 mb-4">Stay up to date with our latest news and products.</span>

      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-md border-gray-300"
        />
        <Button
          content="subscribe"
          type="submit"
          style="primary"
          onClick={handleClick}
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
