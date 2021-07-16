import NavCSS from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={NavCSS.ul}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Donations</a>
        </li>
        <li style={{ float: 'right' }}>
          <a href="">Login/Sign-in</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
