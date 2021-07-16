import React from 'react';
import style from './SpecificDonation.module.css'

const SpecificDonation = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className={style.imageContainer}>
          <img
            src='https://dummyimage.com/2000x2000/000/fff&text=image'
            alt='Image Of Charity'
          />
        </div>
        <div className={style.descriptionContainer}>
          <h1>Name of donation</h1>
          <p>
            by some charity (<span>verified</span>)
          </p>
          <div className={style.tagContainer}>
            <span>Technology</span> <span>Community</span> <span>Research</span>
          </div>
          <p>
            Description for the donation~~Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Architecto neque ad expedita modi
            beatae laudantium ea labore maxime dolorum adipisci autem,
            voluptate, voluptatum quis doloremque vero hic cumque voluptates
            distinctio!
          </p>
        </div>

        <h1>Pictures of charity using the money?</h1>

        <div className={style.shareDonateContainer}>
          <div className={style.donateContainer}>
            <h2>Be a Donator today!</h2>
            <h2>Donators: 3</h2>
            <button>DONATE</button>
          </div>
          <div className={style.shareContainer}>
            <h2>Share this donation today!</h2>
            <span>Follow icon?</span>
            <span>Love icon</span>
            <span>Share icon</span>
          </div>
        </div>

        <div className={style.fundsContainer}>
          <div className={style.displayFunds}>
            <h2>Total Money Raised:</h2>
            <div className={style.moneyRaised}>
              <h2>$2000</h2>
              <h2>0.9 ETH</h2>
            </div>
            <div className={style.donationAddress}>
              <p>Donation address:</p>
              <p>0x634977e11C823a436e587C1a1Eca959588C64287</p>
            </div>
          </div>
          <h3>Search bar?</h3>
          {/* <table class="table"> 
                    <thead>
                    <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">DONOR</th>
                        <th scope="col">CURRENCY</th>
                        <th scope="col">AMOUNT</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Jul 5, 2021</th>
                        <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                        <td>HNY</td>
                        <td>0.2</td>
                    </tr>
                    <tr>
                        <th scope="row">Jun 28, 2021</th>
                        <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                        <td>XDAI</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">Jun 22, 2021</th>
                        <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                        <td>HNY</td>
                        <td>0.5</td>
                    </tbody>
                </table>
            */}
        </div>
      </div>
    </div>
  );
};

export default SpecificDonation;
