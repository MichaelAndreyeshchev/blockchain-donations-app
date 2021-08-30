import React, { useState } from 'react';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import './PageThree.css';
import bg from './bg3.svg';

export const PageThree = ({ formData, setForm, navigation }) => {
  const [name, setName] = useState('');
  const [identity, setIdentity] = useState(true);

  function success() {
    swal({
      title: 'Thank you',
      text: 'You Campaign has been created!',
      icon: 'success',
      button: 'OK!',
    });
  }

  const emptyInput = (field) => {
    swal({
      title: 'Oops...!',
      text: `Please enter your ${field}!`,
      icon: 'error',
      button: 'OK!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      emptyInput(`${identity ? 'organization' : ''} name`);
    } else {
      success();
      navigation.next();
    }
  };

  return (
    <main className='multistep--form'>
      <div className='form__image'>
        <img src={bg} alt='' className='image' />
      </div>
      <article className='form--container'>
        <h1 className='form__title'>Owner Credentials</h1>
        <div className='form-row'>
          <label htmlFor=''>
            Are you creating this campaign as an organization or an individual?
          </label>
          <div className='form-holder'>
            <input
              type='radio'
              name='owner'
              value='organization'
              id='campaign_owner_button'
              onClick={() => {
                setIdentity(true);
              }}
              defaultChecked='true'
            />
            <label htmlFor='' className='radio__label'>
              organization
            </label>
          </div>
          <div className='form-holder'>
            <input
              type='radio'
              name='owner'
              value='individual'
              onClick={() => {
                setIdentity(false);
              }}
            />
            <label htmlFor='' className='radio__label'>
              Individual
            </label>
          </div>
        </div>
        <div className='form-row'>
          <label htmlFor=''>Organization/Individual name</label>
          <input
            type='text'
            className='form-control'
            id='campaign_owner'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button
            color='secondary'
            variant='contained'
            style={{ marginRight: '1rem' }}
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
          <Button color='primary' variant='contained' onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </article>
    </main>
  );
};
