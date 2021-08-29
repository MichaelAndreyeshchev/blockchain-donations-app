import React, { Component, useState } from 'react';
// import CreateCampaignDetails from './CreateCampaignDetails';
import './CreateCampaign.css';

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

export default function CreateCampaign(props) {
  return (
    <div className='App'>
      <h1>this is create campaign</h1>
    </div>
  );
}

/* 
  1. name of campaign
  2. tags for campaing
  3. tags for projects
  4. date of end/unlimited
  5. name of org or person
  6. description
*/
