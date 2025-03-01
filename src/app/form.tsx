'use client';

import React, { useState } from 'react';

type FormData = {
  'entry.803934422': string; // Only one field now
};

const Form: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    'entry.803934422': '',
  });

  const handleInputData =
    (input: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [input]: value,
      }));
    };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setSubmit(true);

    // Only include the email field in the URL
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSd3q9FaQ4fhb-Cs7LFxWR-QJ2MKpAiGePRHp5zLm9j6q5bnFQ/formResponse?entry.803934422=${encodeURIComponent(
      formData['entry.803934422']
    )}`;

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Often needed for Google Forms
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  return (
    <div className="contactFormWrapper">
      <div className="formTitle">Sign Up for Updates</div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, we will keep you updated!</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.803934422">E-mail:</label>
              <input
                required
                type="email"
                name="entry.803934422"
                onChange={handleInputData('entry.803934422')}
                value={formData['entry.803934422']}
                autoComplete="off"
              />
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
