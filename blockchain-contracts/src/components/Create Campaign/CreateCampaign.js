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
