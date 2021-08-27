import AccountInfo from './components/Account Info/AccountInfo';
import Contact from './components/Contact/Contact';
import CreateDonation from './components/Create Donation/CreateDonation';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SpecificDonation from './components/Campaign Page/SpecificDonation';
import TeamPage from './components/Team Page/TeamPage';
import PortalPage from './components/Portal Page/PortalPage';
import PreviousDonations from './components/Previous Donation/PreviousDonations';
import DonationStatistics from './components/Donation Statistics/DonationStatistics';
import signin from './components/signin';
import signup from './components/signup';
import donationlisst from './components/Donation List/donationlisst';
import Footer from './components/Footer/Footer';
import faq from './components/Faq/faq';
import newSignIn from './components/newSignIn';
import CreateCampaign from './components/Create Campaign/CreateCampaign';
import logOut from './components/logOut';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Payment from './components/Payment';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/teampage' component={TeamPage} />
        <Route exact path='/accountinfo' component={AccountInfo} />
        <Route exact path='/specificdonation' component={SpecificDonation} />
        <Route exact path='/signin' component={signin} />
        <Route exact path='/signup' component={signup} />
        <Route exact path='/donationlisst' component={donationlisst} />
        <Route exact path='/portalpage' component={PortalPage} />
        <Route
          exact
          path='/DonationStatistics'
          component={DonationStatistics}
        />
        <Route exact path='/PreviousDonations' component={PreviousDonations} />
        <Route exact path='/faq' component={faq} />
        <Route exact path='/CreateDonation' component={CreateDonation} />
        <Route exact path='/CreateCampaign' component={CreateCampaign} />
        <Route exact path='/newSignIn' component={newSignIn} />
        <Route exact path='/logOut' component={logOut} />
        <Route exact path='/Profile' component={Profile} />
        {/* <Route exact path='/CreateCampaign' component={CreateCampaign} /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
