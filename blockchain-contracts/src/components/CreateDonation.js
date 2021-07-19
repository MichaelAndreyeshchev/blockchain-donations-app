import React from 'react';
import CreateCSS from './CreateDonation.module.css';

const CreateDonation = () => {
  return (
    <React.Fragment>
      <div className={CreateCSS.container}>
        <h1>Create a Donation</h1>
        <form>
          <label for="fname">What charity are you donating to?</label>
          <br />
          <input type="text" id="fname" name="fname" value="" />
          <br />
          <br />
          <label for="lname">How Much are you donating?</label>
          <br />
          <input type="text" id="lname" name="lname" value="" />
          <br />
          <br />
          <input type="submit" value="Submit" className={CreateCSS.button} />
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateDonation;
