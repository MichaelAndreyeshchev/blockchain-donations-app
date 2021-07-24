import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import TeamPage from './components/TeamPage';
import SpecificDonation from './components/SpecificDonation.js';
import Contact from './components/Contact';
import Donationlist from './components/donationlisst';

function App() {
  return (
    <div>
      <Navigation />
      {<Home/>}
      {/*<Donationlist />*/}
    </div>
  );
}

export default App;
