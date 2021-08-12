import DonationStatisticsCSS from './DonationStatistics.module.css';
import { Link } from 'react-router-dom';
import { Line, Pie } from 'react-chartjs-2';

const lineData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Number of Donations',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const DonationStatistics = () => {
  return (
    <div>
      <div className={DonationStatisticsCSS.body}>
        <div className={DonationStatisticsCSS.yourportaltext}>
          <h1>Your Donation Statistics</h1>
          <h2>
            Welcome to your donation stats. See the impact you've made, and be
            proud of yourself. Celebrate, you deserve it!
          </h2>
        </div>

        <div className={DonationStatisticsCSS.portalBox}>
          <div className={DonationStatisticsCSS.buttonGroup}>
            <button>
              <Link to='/PreviousDonations'>Track previous donations</Link>
            </button>

            {/*<button><Link to = "/CreateDonation">Begin a new donation</Link></button>*/}

            <button>
              <Link to='/DonationStatistics'>
                View your donation statistics
              </Link>
            </button>
          </div>

          <div className={DonationStatisticsCSS['donation-line-graph']}>
            <h2>Donations Over Time:</h2>
            <Line data={lineData} options={lineOptions} />
          </div>

          <div className={DonationStatisticsCSS['donation-pie-graph']}>
            <h2>Charities Donated to:</h2>
            <div className={DonationStatisticsCSS['pie-graph__container']}>
              <div>
                <Pie data={pieData} options={lineOptions} />
              </div>
              <div className={DonationStatisticsCSS['pie-graph__description']}>
                <div>
                  <h2>Charities Most Donated To:</h2>
                  <h3>Red Cross - 75%</h3>
                  <h3>Save The Children - 25%</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={DonationStatisticsCSS.statsBox}>
            <h2 className={DonationStatisticsCSS['stats__title']}>
              Numerical Stats:
            </h2>
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
              <li>YOU: $...</li>
              <li></li>
              <li>Number three: $...</li>
              <li></li>
              <li>Number five: $...</li>
              <li></li>
              <li>Number seven: $...</li>
              <li></li>
              <li>Number nine: $...</li>
              <li></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationStatistics;
