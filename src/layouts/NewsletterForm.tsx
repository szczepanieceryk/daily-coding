import React from 'react';
import Button from '../components/Button';
import { useState } from 'react';
const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  // const [errorMessage, setErrorMessage] = useState<string[]>([''])
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const result = e.target.value;
    setEmail(result);
  };

  // const validateEmailInput = () => {
  //   const errors: string[] = ['']
  //   if (!email) {
  //     errors.push('Email canot be empty')
  //     console.log('Email input not valdiated!');
  //   } else {
  //     console.log('Email input valdiated');
  //   }
  // };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // const errors = validateEmailInput();
    // setErrorMessage(errors)

    console.log(`Newsletter Submitted for email ${email}`);
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
          onInput={onInputChange}
        />
        {/* <div>
          <ul>
            {errorMessage && (
              <li>
                {errorMessage.map((error)=> (
                  <small key={error}>{error}</small>
                ))}
              </li>
            )}
          </ul>
        </div> */}
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
