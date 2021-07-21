import AccountInfoCSS from './AccountInfo.module.css';

const AccountInfo = () => {
  return (
    <div>
      <div className={AccountInfoCSS.container}>
        <h1>Profile</h1>

        <h4 className={AccountInfoCSS.profile}>Name</h4>
        <p className={AccountInfoCSS.profileInfo}>John Doe</p>

        <h4 className={AccountInfoCSS.profile}>Wallet</h4>
        <p className={AccountInfoCSS.profileInfo}>$12345</p>

        <h4 className={AccountInfoCSS.profile}>Email</h4>
        <p className={AccountInfoCSS.profileInfo}>johndoe@email.com</p>
      </div>
    </div>
  );
};

export default AccountInfo;
