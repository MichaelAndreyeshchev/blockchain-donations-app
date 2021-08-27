import React from 'react';
import CreateCSS from './CreateDonation.module.css';
import {Link} from 'react-router-dom';

const CreateDonation = () => {
  return (
    <React.Fragment>


<div className = {CreateCSS.body}>

<div className = {CreateCSS.yourportaltext}>
  <h1>Create a Donation</h1>
  <h2>This is where you can make a new donation. Fill out the form, and thanks in advance for the 
    impact that you are making on this world!
  </h2>
</div>

  <div className = {CreateCSS.portalBox}>


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

  </div>

    <div className = {CreateCSS.buttonGroup}>
      <button><Link to = "/PreviousDonations">Track previous donations</Link></button>

      <button><Link to = "/CreateDonation">Begin a new donation</Link></button>

      <button><Link to = "/DonationStatistics">View your donation statistics</Link></button>
    </div>

</div>
    
  
    </React.Fragment>
  );
};

export default CreateDonation;