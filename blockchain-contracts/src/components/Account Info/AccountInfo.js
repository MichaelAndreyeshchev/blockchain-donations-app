import AccountInfoCSS from './AccountInfo.module.css';
import image from './image.svg';

const AccountInfo = () => {
  return (
    <main className={AccountInfoCSS['account--container']}>
      <div className={AccountInfoCSS.form__image}>
        <img src={image} alt='' className={AccountInfoCSS.image} />
      </div>
      <div className={AccountInfoCSS.card}>
        <h1 className={AccountInfoCSS.card__title}>Your Account</h1>

        <h4 className={AccountInfoCSS.profile}>Name</h4>
        <p className={AccountInfoCSS.profileInfo}>John Doe</p>

        <h4 className={AccountInfoCSS.profile}>Wallet</h4>
        <p className={AccountInfoCSS.profileInfo}>$12345</p>

        <h4 className={AccountInfoCSS.profile}>Email</h4>
        <p className={AccountInfoCSS.profileInfo}>johndoe@email.com</p>
      </div>
    </main>
  );
};

export default AccountInfo;
