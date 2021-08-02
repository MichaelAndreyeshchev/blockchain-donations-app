import AccountInfo from './components/AccountInfo';
import Contact from './components/Contact';
import CreateDonation from './components/CreateDonation';
import Home from './components/Home';
import Navigation from './components/Navigation';
import SpecificDonation from './components/SpecificDonation';
import TeamPage from './components/TeamPage';
import PortalPage from './components/PortalPage';
import signin from './components/signin';
import signup from './components/signup';
import donationlisst from './components/donationlisst';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/teampage" component={TeamPage} />
        <Route exact path="/accountinfo" component={AccountInfo} />
        <Route exact path="/specificdonation" component={SpecificDonation} />
        <Route exact path="/signin" component={signin} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/donationlisst" component={donationlisst} />
        <Route exact path="/portalpage" component={PortalPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
