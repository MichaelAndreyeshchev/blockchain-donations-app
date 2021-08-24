import React, { useState } from 'react';
import style from './Contact.module.css';
import swal from 'sweetalert';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const success = () => {
        swal({
            title: 'Thank you',
            text: 'Message Sent Successfully!',
            icon: 'success',
            button: 'OK!',
        });
    };

    const emptyInput = (field) => {
        swal({
            title: 'Oops...!',
            text: `Please enter your ${field}!`,
            icon: 'error',
            button: 'OK!',
        });
    };

    const invalidEmail = () => {
        swal({
            title: 'Oops...!',
            text: 'Please enter a valid email address',
            icon: 'error',
            button: 'OK!',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 1) {
            emptyInput('name');
        } else if (email.length < 1) {
            emptyInput('email');
        } else if (!validateEmail(email)) {
            invalidEmail();
        } else if (subject.length < 1) {
            emptyInput('subject');
        } else if (message.length < 1) {
            emptyInput('message');
        } else {
            success();
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    };

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
                    <form action='index.html' autoComplete='off'>
                        <h3 className={style.title}>Contact us</h3>
                        <div className={style.inputContainer}>
                            <input
                                type='text'
                                className={style.input}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id='name'
                                placeholder='Enter your name.'
                                autoComplete='off'
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                                type='email'
                                className={style.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id='email'
                                placeholder='Enter your email address.'
                                autoComplete='off'
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                                type='text'
                                className={style.input}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                id='subject'
                                placeholder='Enter the subject.'
                                autoComplete='off'
                            />
                        </div>
                        <div className={(style.inputContainer, style.textarea)}>
                            <textarea
                                className={style.input}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id='message'
                                placeholder='Enter your message here.'
                                data-gramm_editor='false'
                            ></textarea>
                        </div>
                        <input
                            type='submit'
                            value='Send'
                            className={style.btn}
                            onClick={handleSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
