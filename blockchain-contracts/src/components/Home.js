import React from 'react';
import ParticleBackground from './Particles';
import HomeCSS from './Home.module.css';
import Xarrow from 'react-xarrows';

const Home = () => {
  return (
    <React.Fragment>
      <div className={`container-flex ${HomeCSS.contain}`}>
        {/* Create account section */}
        <section className={HomeCSS.container}>
          <ParticleBackground />
          <div className={'row my-5' + ' ' + HomeCSS.wrapper}>
            <div className='col text-center'>
              <h1>Create a Cryptonate Account</h1>
              <p className='mt-5'>
                By creating an account you can track your donations, recieve
                e-mail updates from charities, and manage your Cryptonate
                profile
              </p>
              <button
                type='button'
                className='btn bg-dark'
                style={{ color: 'white' }}
              >
                Create Account
              </button>
            </div>

            {/* <div className='col d-flex justify-content-center'>
              <img
                className='img-fluid rounded mb-4 mb-lg-0'
                src={'./placeholder.jpg'}
                alt=''
              />
            </div> */}
          </div>
        </section>

        {/* Top Campaigns Section */}
        <section className={HomeCSS.container}>
          <div className='row my-5'>
            <div className='col d-flex justify-content-center  '>
              <img
                className='img-fluid rounded mb-4 mb-lg-0'
                src={'./placeholder.jpg'}
                alt=''
              />
            </div>
            <div className='col  text-center '>
              <h2 className='mt-3'>Top Campaigns</h2>
              <div>
                <button
                  type='button'
                  className='row btn bg-dark mt-2 w-25'
                  style={{ color: 'white' }}
                >
                  Charity 1
                </button>
              </div>
              <div>
                <button
                  type='button'
                  className='row btn bg-dark mt-2 w-25'
                  style={{ color: 'white' }}
                >
                  Charity 2
                </button>
              </div>
              <div>
                <button
                  type='button'
                  className='row btn bg-dark mt-2 w-25 '
                  style={{ color: 'white' }}
                >
                  Charity 3
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className={HomeCSS.container}>
          <h2 className={HomeCSS['steps__title']}>How it works</h2>
          <article className={HomeCSS['arrow-container']}>
            <div
              className={
                HomeCSS['steps-container'] + ' ' + HomeCSS['step--one']
              }
              id='step_1_start'
            >
              <h2>Campaign Starts</h2>
              <p>
                A charity launches a campaign on our website with mutiple
                project options
              </p>
            </div>

            <Xarrow
              start='step_1_start' //can be react ref
              end='step_2_end' //or an id
              startAnchor={{ position: 'bottom', offset: { x: -70 } }}
              endAnchor={{ position: 'left', offset: { x: -10 } }}
              color='black'
              dashness={true}
              path={'smooth'}
              curveness={1}
              animateDrawing={true}
              className={HomeCSS.hello}
            />

            <div
              className={
                HomeCSS['steps-container'] + ' ' + HomeCSS['step--two']
              }
              id='step_2_end'
            >
              <h2 id='step_2_start'>Donations</h2>
              <p>
                Users donate directly to the smart contract with their crypto
                wallets and vote on which project they want osee funded
              </p>
            </div>

            <Xarrow
              start='step_2_start' //can be react ref
              end='step_3' //or an id
              startAnchor={{ position: 'right', offset: { x: 10 } }}
              endAnchor={{ position: 'left', offset: { x: -10 } }}
              color='black'
              dashness={true}
              path={'smooth'}
              curveness={1.5}
              animateDrawing={true}
            />

            <div
              className={
                HomeCSS['steps-container'] + ' ' + HomeCSS['step--three']
              }
            >
              <h2>Campaign Ends</h2>
              <p id='step_3'>
                The smart contract counts the votes, then send the crypto and
                the information on which project should be funded to the charity
              </p>
            </div>

            <Xarrow
              start='step_3' //can be react ref
              end='step_4_end' //or an id
              startAnchor={{ position: 'bottom', offset: { y: -20 } }}
              endAnchor='top'
              color='black'
              dashness={true}
              path={'smooth'}
              curveness={0.8}
              animateDrawing={true}
            />

            <div
              className={
                HomeCSS['steps-container'] + ' ' + HomeCSS['step--four']
              }
            >
              <h2 id='step_4_end'>Funds Used</h2>
              <p id='step_4_start'>
                The charity uses the funds towards the project which receive the
                most votes
              </p>
            </div>

            <Xarrow
              start='step_4_start' //can be react ref
              end='step_5' //or an id
              startAnchor={{ position: 'right', offset: { x: -20 } }}
              endAnchor={{ position: 'bottom', offset: { y: -20 } }}
              color='black'
              dashness={true}
              path={'smooth'}
              curveness={0.5}
              animateDrawing={true}
            />

            <div
              className={
                HomeCSS['steps-container'] + ' ' + HomeCSS['step--five']
              }
              id='step_5'
            >
              <h2>Updates Sent</h2>
              <p>
                The charities send an (email) update once the project is
                complete, showing the donors what was accomplished with their
                donations
              </p>
            </div>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
