import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './PageOne.css';
import swal from 'sweetalert';
import bg from './bg.svg';

export const PageOne = ({ formData, setForm, navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [campaignTags, setCampaignTags] = useState('');
  const [projectTags, setProjectTags] = useState('');

  const emptyInput = (field) => {
    swal({
      title: 'Oops...!',
      text: `Please enter your desired ${field}!`,
      icon: 'error',
      button: 'OK!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      emptyInput('campaign name');
    } else if (description.length < 1) {
      emptyInput('campaign description');
    } else if (campaignTags.length < 1) {
      emptyInput('campaign tags');
    } else if (projectTags.length < 1) {
      emptyInput('project tags');
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
        <h1 className='form__title'>Basic Information</h1>
        <div className='form-row'>
          <label htmlFor=''>Campaign Name</label>
          <input
            type='text'
            className='form-control'
            id='campaign_name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor=''>Description</label>
          <textarea
            name=''
            id='campaign_description'
            className='form-control'
            placeholder='Something about your mission and vision.'
            style={{ height: '149px' }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='form-row'>
          <label htmlFor=''>Campaign Tags</label>
          <input
            type='text'
            className='form-control'
            placeholder='Technology, Research, Community'
            id='campaign_tags'
            onChange={(e) => setCampaignTags(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor=''>Project Tags</label>
          <input
            type='text'
            className='form-control'
            placeholder='Building well in California'
            id='project_tags'
            onChange={(e) => setProjectTags(e.target.value)}
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: '1rem' }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </article>
    </main>
  );
};
