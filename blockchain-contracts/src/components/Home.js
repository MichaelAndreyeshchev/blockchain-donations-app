import React from 'react';
import HomeCSS from './Home.module.css';
const Home = () => {
  return (
    <React.Fragment>
      <div className={`container-flex ${HomeCSS.contain}`}>
        {/* Create account section */}
        <section>
          <div className="row my-5">
            <div className="col text-center ">
              <h2>Create a Cryptonate Account</h2>
              <p className="mt-5">
                By creating an account you can track your donations, recieve
                e-mail updates from charities, and manage your Cryptonate
                profile
              </p>
              <button
                type="button"
                className="btn bg-dark"
                style={{ color: 'white' }}
              >
                Create Account
              </button>
            </div>
            <div className="col d-flex justify-content-center">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={'./placeholder.jpg'}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Top Campaigns Section */}
        <section>
          <div className="row my-5">
            <div className="col d-flex justify-content-center  ">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={'./placeholder.jpg'}
                alt=""
              />
            </div>
            <div className="col  text-center ">
              <h2 className="mt-3">Top Campaigns</h2>
              <div>
                <button
                  type="button"
                  className="row btn bg-dark mt-2 w-25"
                  style={{ color: 'white' }}
                >
                  Charity 1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="row btn bg-dark mt-2 w-25"
                  style={{ color: 'white' }}
                >
                  Charity 2
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="row btn bg-dark mt-2 w-25 "
                  style={{ color: 'white' }}
                >
                  Charity 3
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* How it works Section */}
        <section></section>
      </div>
    </React.Fragment>
  );
};

export default Home;
