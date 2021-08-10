import DonationStatisticsCSS from './DonationStatistics.module.css';
import {Link} from 'react-router-dom';

const DonationStatistics = () => 
{

return (


<div>

<div className = {DonationStatisticsCSS.body}>

<div className = {DonationStatisticsCSS.yourportaltext}>
  <h1>Your Donation Statistics</h1>
  <h2>Welcome to your donation stats. See the impact you've made, and be proud of yourself. 
    Celebrate, you deserve it!</h2>
</div>

  <div className = {DonationStatisticsCSS.portalBox}>

  <div className={DonationStatisticsCSS.statsBox}>

    <div className={DonationStatisticsCSS.totalDonation}>   
      <h2>Total donation so far:</h2>
    </div>
    <div className={DonationStatisticsCSS.peopleReached}>   
      <h2>People you have helped:</h2>
    </div>
    <div className={DonationStatisticsCSS.familiesImpacted}>   
      <h2>Families you have impaced:</h2>
    </div>
    <div className={DonationStatisticsCSS.placesTraveled}>   
      <h2>Places your money has traveled:</h2>
    </div>
  </div>

  <div className={DonationStatisticsCSS.leaderboard}>
    <h4>You and your friends!</h4>
    
    <ol className={DonationStatisticsCSS.leaderboardList}>
      <li>YOU: $...</li><li>
      </li><li>Number three: $...</li><li>
      </li><li>Number five: $...</li><li>
      </li><li>Number seven: $...</li><li>
      </li><li>Number nine: $...</li><li>
      </li></ol>
  </div>
    </div>

    <div className = {DonationStatisticsCSS.buttonGroup}>
      <button><Link to = "/PreviousDonations">Track previous donations</Link></button>

      {/*<button><Link to = "/CreateDonation">Begin a new donation</Link></button>*/}

      <button><Link to = "/DonationStatistics">View your donation statistics</Link></button>
    </div>

</div>

  
  
  
</div>
  );
};

export default DonationStatistics;