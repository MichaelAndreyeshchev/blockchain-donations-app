import PortalPageCSS from './PortalPage.module.css';

const PortalPage = () => {
  return (
    <div>
      <div className={PortalPageCSS.titleScreen}>
        <h2>Your Donation Portal</h2>

        <div className={PortalPageCSS.portalBox}>
          <div className={PortalPageCSS.trackDonations}>
            <h1>
              <a href>Track previous donations</a>
            </h1>
          </div>
          <div className={PortalPageCSS.newDonation}>
            <h1>
              <a href>Begin a new donation</a>
            </h1>
          </div>
          <div className={PortalPageCSS.statistics}>
            <h1>
              <a href>View your donation statistics</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortalPage;
