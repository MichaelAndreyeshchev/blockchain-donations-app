import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <div className='contact_form'>
        <div className='wrapper'>
          <h1>Contact Us!</h1>
          <input
            type='text'
            className='input'
            id='name'
            placeholder='Enter your name.'
            autocomplete='off'
          />
          <input
            type='email'
            className='input'
            id='email'
            placeholder='Enter your email address.'
            autocomplete='off'
          />
          <input
            type='text'
            className='input'
            id='subject'
            placeholder='Enter the subject.'
            autocomplete='off'
          />
          <textarea
            style='resize: none'
            id='message'
            placeholder='Enter your message here.'
            data-gramm_editor='false'
          ></textarea>
          <button type='submit' className='submit_button'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
