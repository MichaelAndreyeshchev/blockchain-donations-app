import React, { Component, useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton, Date } from 'material-ui';
import Switch from '@material-ui/core/Switch';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "./CreateCampaignDetails.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function CreateCampaignDetails() {
    const [showTime, setshowTime] = useState(true);

    const handleToggle = (e) => {
        const currentState = this.state.showTime;
        setshowTime(!currentState);
    }



    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Create Campaign" />
                <div className="campaign__title">
                    <TextField 
                        hintText="Enter the Campaign Title"  
                        floatingLabelText="Campaign Title"
                        onChange={setTitle("title")}
                        defaultValue={values.title}
                    />
                </div>
                <div className="campaign__tags">
                    <TextField 
                        hintText="Enter the campaign tags here..."  
                        floatingLabelText="Campaign Tags"
                        onChange={handleChange("tags")}
                        defaultValue={values.tags}
                    />
                </div>
                <div className="campaign__description">
                    <TextField
                        hintText="Enter the campaign description here..."
                        floatingLabelText="Campaign Description"
                        onChange={handleChange("description")}
                        defaultValue={values.description}
                        multiLine
                    />
                </div>
                <div className="campaign__goal">
                    <FormControlLabel
                        value="top"
                        control={<Switch checked={this.state.showTime} onChange={this.handleToggle} />}
                        label="Goal Based Campaign"
                        labelPlacement="top"
                    />
                    { this.state.showTime &&  (
                    <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={this.currentTime}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />)}
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default CreateCampaignDetails
