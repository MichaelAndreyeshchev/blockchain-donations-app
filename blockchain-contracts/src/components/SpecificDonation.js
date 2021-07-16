import React from 'react';

const SpecificDonation = () => {
  return (
    <div class='container'>
      <div class='wrapper'>
        <div class='image_container'>
          <img
            src='https://dummyimage.com/2000x2000/000/fff&text=image'
            alt='Image Of Charity'
          />
        </div>
        <div class='description_container'>
          <h1>Name of donation</h1>
          <p>
            by some charity (<span>verified</span>)
          </p>
          <div class='tag_container'>
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

        <div class='share_donate_container'>
          <div class='donate_container'>
            <h2>Be a Donator today!</h2>
            <h2>Donators: 3</h2>
            <button>DONATE</button>
          </div>
          <div class='share_container'>
            <h2>Share this donation today!</h2>
            <span>Follow icon?</span>
            <span>Love icon</span>
            <span>Share icon</span>
          </div>
        </div>

        <div class='funds_container'>
          <div class='display_funds'>
            <h2>Total Money Raised:</h2>
            <div class='money_raised'>
              <h2>$2000</h2>
              <h2>0.9 ETH</h2>
            </div>
            <div class='donation_address'>
              <p>Donation address:</p>
              <p>0x634977e11C823a436e587C1a1Eca959588C64287</p>
            </div>
          </div>
          <h3>Search bar?</h3>
          {/* 
                    <table class="table"> 
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

      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
        crossorigin='anonymous'
      ></script>
    </div>
  );
};

export default SpecificDonation;
