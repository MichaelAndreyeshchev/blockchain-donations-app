import React, { useState } from 'react';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import './PageTwo.css';
import bg from './bg2.svg';

export const PageTwo = ({ formData, setForm, navigation }) => {
  const [date, setDate] = useState('');
  const [end, setEnd] = useState(false);
  const [check, setCheck] = useState(false);

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
    var userDate = new Date(date);

    if (end && date.length == 0) {
      emptyInput('Please enter your desired end date!');
    } else if (end && userDate < today) {
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
              name='time'
              value='Yes'
              id='campaign_date_forever'
              onClick={() => {
                setCheck(false);
                setEnd(false);
              }}
              defaultChecked='true'
            />
            <label htmlFor='' className='radio__label'>
              Yes
            </label>
          </div>
          <div className='form-holder'>
            <input
              type='radio'
              name='time'
              value='No'
              onClick={() => {
                setCheck(true);
                setEnd(true);
              }}
            />
            <label htmlFor='' className='radio__label'>
              No
            </label>
          </div>
        </div>
        <div
          className='form-row'
          id='campaign_expired_date'
          style={{ display: check ? 'block' : 'none' }}
        >
          <label htmlFor=''>Campaign End Date</label>
          <input
            type='date'
            className='form-control'
            id='campaign_calender'
            onChange={(e) => setDate(e.target.value)}
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
