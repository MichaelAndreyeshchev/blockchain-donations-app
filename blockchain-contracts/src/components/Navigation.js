import NavCSS from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teampage">Team</Link>
        </li>
        <li>
          <Link to="/specificdonation">Donations</Link>
        </li>
        <li>
          <Link to="/donationlisst">Donation List</Link>
        </li>
        <li>
          <Link to="/accountinfo">AccountInfo</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portalpage">Portal</Link>
        </li>
        <li style={{ float: 'right' }}>
          <Link to="newSignIn">SIGNIN</Link>
        </li>
        
        <li style={{ float: 'right' }}>
          <Link to="newSignUp">SIGNUP</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
