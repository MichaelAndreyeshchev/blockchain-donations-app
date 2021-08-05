import PreviousDonationsCSS from './PreviousDonations.module.css';
import { Link } from 'react-router-dom';

const PreviousDonations = () => 
{
  return (

<div>

  <div className = {PreviousDonationsCSS.body}>

<div className = {PreviousDonationsCSS.yourportaltext}>
  <h1>Your Previous Donations</h1>
  <h2>Here are all of your past donations, and information about them. You should be proud of
    the impact you have made and lives you have changed!
  </h2>
</div>

  <div className = {PreviousDonationsCSS.portalBox}>
    <table className = {PreviousDonationsCSS.userDataTable}>
      <tr>
        <th>Charity Name</th>
        <th>Donation Date</th>
        <th>Donation Amount</th>
        <th>Status</th>
      </tr>
      <tr>
        <th>Red Cross</th>
        <th>07/06/2021</th>
        <th>$4500</th>
        <th>Completed</th>
      </tr>

    </table>
  </div>

    <div className = {PreviousDonationsCSS.buttonGroup}>
      <button><Link to = "/PreviousDonations">Track previous donations</Link></button>

      <button><Link to = "/CreateDonation">Begin a new donation</Link></button>

      <button><Link to = "/DonationStatistics">View your donation statistics</Link></button>
    </div>

</div>

</div>

  );
};

export default PreviousDonations
