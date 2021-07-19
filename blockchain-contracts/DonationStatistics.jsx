import DonationStatisticsCSS from '/.DonationStatistics.css';

<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Donation Statistics</title>

  <div className={DonationStatisticsCSS.yourStatistics}>
    <h1>Your Donation Statistics</h1>
  </div>
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

export default DonationStatistics