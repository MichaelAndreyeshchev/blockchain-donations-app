import React, { useState } from 'react';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import './PageTwo.css';
import bg from './bg2.svg';

export const PageTwo = ({ formData, setForm, navigation }) => {
  const { campaignDate, campaignIsExpired } = formData;

  const emptyInput = (field) => {
    swal({
      title: 'Oops...!',
      text: `${field}`,
      icon: 'error',
      button: 'OK!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var today = new Date();
    var userDate = new Date(campaignDate);

    console.log('handle submit', campaignIsExpired);

    if (campaignIsExpired === 'false') {
      setForm({
        target: {
          name: 'campaignDate',
          value: '',
        },
      });
    }

    if (campaignIsExpired === 'true' && campaignDate.length == 0) {
      emptyInput('Please enter your desired end date!');
    } else if (campaignIsExpired === 'true' && userDate < today) {
      emptyInput('Please choose a valid date!');
    } else {
      navigation.next();
    }
  };

  return (
    <main className='multistep--form'>
      <div className='form__image'>
        <img src={bg} alt='' className='image' />
      </div>
      <article className='form--container'>
        <h1 className='form__title'>Expiration Date</h1>
        <div className='form-row' id='tab_two'>
          <label htmlFor=''>Would you like your Campaign to be forever?</label>
          <div className='form-holder'>
            <input
              type='radio'
              value='false'
              id='campaign_date_forever'
              name='campaignIsExpired'
              checked={campaignIsExpired === 'false'}
              onChange={setForm}
            />
            <label htmlFor='' className='radio__label'>
              Yes
            </label>
          </div>
          <div className='form-holder'>
            <input
              type='radio'
              value='true'
              name='campaignIsExpired'
              checked={campaignIsExpired === 'true'}
              onChange={setForm}
            />
            <label htmlFor='' className='radio__label'>
              No
            </label>
          </div>
        </div>
        <div
          className='form-row'
          id='campaign_expired_date'
          style={{ display: campaignIsExpired === 'true' ? 'block' : 'none' }}
        >
          <label htmlFor=''>Campaign End Date</label>
          <input
            type='date'
            className='form-control'
            id='campaign_calender'
            name='campaignDate'
            value={campaignDate}
            onChange={setForm}
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
            Next
          </Button>
        </div>
      </article>
    </main>
  );
};
