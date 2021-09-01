import PreviousDonationsCSS from './PreviousDonations.module.css';
import { Link } from 'react-router-dom';

const PreviousDonations = () => {
  return (
    <div>
      <div className={PreviousDonationsCSS.body}>
        <div className={PreviousDonationsCSS.yourportaltext}>
          <h1>Your Previous Donations</h1>
          <h2>
            Here are all of your past donations, and information about them. You
            should be proud of the impact you have made and lives you have
            changed!
          </h2>
        </div>

        <div className={PreviousDonationsCSS.portalBox}>
          <article className={PreviousDonationsCSS['table-container']}>
            <div className={PreviousDonationsCSS.buttonGroup}>
              <Link to='/PreviousDonations'>Track previous donations</Link>
              <Link to='/DonationStatistics'>
                View your donation statistics
              </Link>
            </div>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>First</th>
                  <th scope='col'>Last</th>
                  <th scope='col'>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry the Bird</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PreviousDonations;
