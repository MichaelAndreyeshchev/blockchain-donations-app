import React, { Component, useState } from 'react';
// import CreateCampaignDetails from './CreateCampaignDetails';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, MenuItem, RaisedButton } from 'material-ui';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { default as NumberFormat } from 'react-number-format';
import style from './SpecificDonation.module.css';
import DiscussionBoard from './DiscussionBoard';
import Typography from 'material-ui/styles/typography';

import "./CreateCampaign.css";

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

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#00bcd4',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

export default function CreateCampaign(props) {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [time, setTime] = useState('');
    const [showTime, setshowTime] = useState(true);
    const [currency, setCurrency] = useState('USD')
    const { inputRef, onChange, ...other } = props;
    const [color, setColor] = useState(null);

    // When fields get modified
    const enterTitle = () => {
        setTitle(title);
    }

    const enterTags = () => {
        setTags(tags);
    }

    const enterDescription = () => {
        setDescription(description);
    }

    const enterGoal = () => {
        setGoal(goal);
    }

    const enterTime = () => {
        setTime(time);
    }

    const handleToggle = () => {
        setshowTime(!showTime);
    }

    const handleChange = (event) => {
        setCurrency(event.target.value);
    }

    const nextStep = (event) => {
      setStep(2);
    }

    const preStep = (event) => {
      setStep(1);
    }

    return (
        <div className="App">
            {step === 1 && 
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Create Campaign" />
                <div className="campaign__title">
                    <TextField 
                        id="filled-basic"
                        hintText="Enter the Campaign Title"  
                        floatingLabelText="Campaign Title"
                        onChange={enterTitle}
                        variant="filled"
                    />
                </div>
                <div className="campaign__tags">
                    <TextField 
                        id="filled-basic"
                        hintText="Enter the campaign tags here..."  
                        floatingLabelText="Campaign Tags"
                        onChange={enterTags}
                        variant="filled"
                    />
                </div>
                <div className="campaign__description">
                    <TextField
                        id="filled-basic"
                        hintText="Enter the campaign description here..."
                        floatingLabelText="Campaign Description"
                        onChange={enterDescription}
                        multiLine
                        variant="filled"
                    />
                </div>

                <div className="campaign__time">
                    <IOSSwitch checked={showTime} onChange={handleToggle} />
                    {showTime &&  (
                    <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={time}
                    variant="filled"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />)}

                    {!showTime && (
                        <h3>Unlimited Time</h3>
                    )}
                </div>

                <div className="campaign__goal">
                    <NumberFormat
                        id="filled-basic"
                        customInput={TextField}
                        thousandSeparator
                        isNumericString
                        prefix="$"
                        floatingLabelText="Numeric Goal"
                        variant="filled"
                    />
                </div>
                <div className="campaign__buttons">
                  <RaisedButton className="back" label="Back" primary={true} onClick={preStep} />
                  <RaisedButton className="submit" label="Submit" primary={true} onClick={nextStep} />
                </div>
                
                
                </React.Fragment>
            </MuiThemeProvider>
            }
            {step === 2 && 
            <MuiThemeProvider>
              <React.Fragment>
              <main>
                <section
                  className={style.container + ' ' + style['container--charity']}
                  id='charity_content'
                >
                  <div className={style['description-container']}>
                    <Typography variant="h1" component="h2" gutterBottom>{title}</Typography>
                    <h1 className={style['charity-name']} value={title}></h1>
                    <label>{title}</label>
                    <div className={style['tag-container']}>
                      <div className={style['tag-container__wrapper']}>
                        <span>Technology</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Community</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Research</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Research</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Research</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Research</span>
                      </div>
                      <div className={style['tag-container__wrapper']}>
                        <span>Research</span>
                      </div>
                    </div>
                    <p className={style['description-container__description']}>
                      Description of the campaign - how much money has been raised, where
                      does the money go, etc.
                    </p>
                    <h2 className={style['description-container__total-raised']}>
                      Total Money Raised: <span>$23,410</span>
                    </h2>
                    <button className={style.button}>Donate Now!</button>
                  </div>

                  <div className={style['charity-profile-card']}>
                    <div className={style['charity-profile']}>
                      <img
                        className={style['charity-profile__image']}
                        src='https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg'
                        alt='profile picture of a charity'
                      />
                      <h2 className={style['charity-profile__name']}>Charity Name</h2>
                    </div>

                    <h2 className={style['charity-profile__total-donor']}>
                      2,689 Donors!
                    </h2>

                    <div className='progress' id={style['charity--progress']}>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='60'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '60%', borderRadius: '100px' }}
                      >
                        60% of Goal
                      </div>
                      <div className={style['charity-target']}>
                        <div>
                          <span className={style['charity-target__description']}>
                            $75K
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={style['charity-social']}>
                      <div className={style['charity-social__container']}>
                        <i
                          className={`far fa-heart ${style['charity-social__icon']}`}
                        ></i>
                        <span className={style['charity-social__description']}>
                          15.43k Likes
                        </span>
                      </div>
                      <div className={style['charity-social__container']}>
                        <i
                          className={`fas fa-share-square ${style['charity-social__icon']}`}
                        ></i>
                        <span className={style['charity-social__description']}>
                          782 Shares
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                <div className={style.container + ' ' + style['container--donors']}>
                  <div className={style['container-donors__title']}>
                    <h2>Recent Donors</h2>
                  </div>
                  <div className={style['table-container']}>
                    <table className='table' id={style['donor-table']}>
                      <thead>
                        <tr>
                          <th scope='col'>Date</th>
                          <th scope='col'>Account</th>
                          <th scope='col'>Currency</th>
                          <th scope='col'>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>Jul 5, 2021</th>
                          <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                          <td>HNY</td>
                          <td>0.2</td>
                        </tr>
                        <tr>
                          <th scope='row'>Jun 28, 2021</th>
                          <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                          <td>XDAI</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th scope='row'>Jun 22, 2021</th>
                          <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                          <td>HNY</td>
                          <td>0.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <section
                  className={style.container + ' ' + style['discussion--container']}
                >
                  <div>
                    <h2 className='discussion-board__title'>Discussion Board</h2>
                  </div>
                  <DiscussionBoard />
                </section>
                </main>
              </React.Fragment>
            </MuiThemeProvider>
            }
            {step === 3 && "Page 3"}
        </div>
    );
}

