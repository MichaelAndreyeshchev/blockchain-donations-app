import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contact_form}>
        <div className={style.wrapper}>
          <h1>Contact Us!</h1>
          <input
            type='text'
            className={style.input}
            id='name'
            placeholder='Enter your name.'
            autocomplete='off'
          />
          <input
            type='email'
            className={style.input}
            id='email'
            placeholder='Enter your email address.'
            autocomplete='off'
          />
          <input
            type='text'
            className={style.input}
            id='subject'
            placeholder='Enter the subject.'
            autocomplete='off'
          />
          <textarea
            id='message'
            placeholder='Enter your message here.'
            data-gramm_editor='false'
          ></textarea>
          <button type='submit' className={style.submit_button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
