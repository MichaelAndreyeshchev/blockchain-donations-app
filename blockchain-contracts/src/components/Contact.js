import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.contactInfo}>
                    <h3 className={style.title}>Let's connect</h3>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe dolorum adipisci recusandae praesentium dicta!
                    </p>

                    <div className={style.info}>
                        <div className={style.information}>
                            <h2>Link :</h2>
                            <a
                                href='https://techforgoodinc.org/'
                                target='_blank'
                            >
                                Check out TFG's website
                            </a>
                        </div>
                        <div className={style.information}>
                            <h2>Email :</h2>
                            <p>Tech for good's email</p>
                        </div>
                        <div className={style.information}>
                            <h2>Fax :</h2>
                            <p>123-456-789</p>
                        </div>
                    </div>

                    <div className={style.socialMedia}>
                        <p>Follow us on</p>
                        <div className={style.socialIcons}>
                            <a href='#'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href='#'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='#'>
                                <i className='fab fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.contactForm}>
                    <form action='index.html' autocomplete='off'>
                        <h3 className={style.title}>Contact us</h3>
                        <div className={style.inputContainer}>
                            <input
                                type='text'
                                className={style.input}
                                id='name'
                                placeholder='Enter your name.'
                                autocomplete='off'
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                                type='email'
                                className={style.input}
                                id='email'
                                placeholder='Enter your email address.'
                                autocomplete='off'
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                                type='text'
                                className={style.input}
                                id='subject'
                                placeholder='Enter the subject.'
                                autocomplete='off'
                            />
                        </div>
                        <div className={(style.inputContainer, style.textarea)}>
                            <textarea
                                className={style.input}
                                id='message'
                                placeholder='Enter your message here.'
                                data-gramm_editor='false'
                            ></textarea>
                        </div>
                        <input
                            type='submit'
                            value='Send'
                            className={style.btn}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
