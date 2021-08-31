import React, { Component, useState } from 'react';
// import CreateCampaignDetails from './CreateCampaignDetails';
import { useForm, useStep } from 'react-hooks-helper';
import './CreateCampaign.css';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
import { PageThree } from './PageThree';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const defaultData = {
  campaignName: '',
  campaignDescription: '',
  campaignTags: '',
  projectTags: '',
  campaignIsExpired: 'false',
  campaignDate: '',
  campaignIsOrganization: 'true',
  campaignOwner: '',
};

const steps = [{ id: 'basic' }, { id: 'date' }, { id: 'credentials' }];

export default function CreateCampaign() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case 'basic':
      return <PageOne {...props} />;
    case 'date':
      return <PageTwo {...props} />;
    case 'credentials':
      return <PageThree {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );

  // return (
  //   <div className='App'>
  //     <h1>this is create campaign</h1>
  //   </div>
  // );
}

/* 
  1. name of campaign
  2. tags for campaing
  3. tags for projects
  4. date of end/unlimited
  5. name of org or person
  6. description
*/
