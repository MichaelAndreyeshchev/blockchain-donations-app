import React from 'react';
import style from './SpecificDonation.module.css';
import DiscussionBoard from './DiscussionBoard';

const SpecificDonation = () => {
  return (
    <main>
      <section
        className={style.container + ' ' + style['container--charity']}
        id='charity_content'
      >
        <div className={style['description-container']}>
          <h1 className={style['charity-name']}>Name of donation</h1>
          <div className={style['tag-container']}>
            <div className={style['tag-container__wrapper']}>
              <span>Technology</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Community</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Research</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Research</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Research</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Research</span>
            </div>
            <div className={style['tag-container__wrapper']}>
              <span>Research</span>
            </div>
          </div>
          <p className={style['description-container__description']}>
            Description of the campaign - how much money has been raised, where
            does the money go, etc.
          </p>
          <h2 className={style['description-container__total-raised']}>
            Total Money Raised: <span>$23,410</span>
          </h2>
          <button className={style.button}>Donate Now!</button>
        </div>

        <div className={style['charity-profile-card']}>
          <div className={style['charity-profile']}>
            <img
              className={style['charity-profile__image']}
              src='https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg'
              alt='profile picture of a charity'
            />
            <h2 className={style['charity-profile__name']}>Charity Name</h2>
          </div>

          <h2 className={style['charity-profile__total-donor']}>
            2,689 Donors!
          </h2>

          <div className='progress' id={style['charity--progress']}>
            <div
              className='progress-bar'
              role='progressbar'
              aria-valuenow='60'
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '60%', borderRadius: '100px' }}
            >
              60% of Goal
            </div>
            <div className={style['charity-target']}>
              <div>
                <span className={style['charity-target__description']}>
                  $75K
                </span>
              </div>
            </div>
          </div>

          <div className={style['charity-social']}>
            <div className={style['charity-social__container']}>
              <i
                className={`far fa-heart ${style['charity-social__icon']}`}
              ></i>
              <span className={style['charity-social__description']}>
                15.43k Likes
              </span>
            </div>
            <div className={style['charity-social__container']}>
              <i
                className={`fas fa-share-square ${style['charity-social__icon']}`}
              ></i>
              <span className={style['charity-social__description']}>
                782 Shares
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className={style.container + ' ' + style['container--donors']}>
        <div className={style['container-donors__title']}>
          <h2>Recent Donors</h2>
        </div>
        <div className={style['table-container']}>
          <table className='table' id={style['donor-table']}>
            <thead>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Account</th>
                <th scope='col'>Currency</th>
                <th scope='col'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Jul 5, 2021</th>
                <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                <td>HNY</td>
                <td>0.2</td>
              </tr>
              <tr>
                <th scope='row'>Jun 28, 2021</th>
                <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                <td>XDAI</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope='row'>Jun 22, 2021</th>
                <td>0x67b7628d1a734420911cd10a1a6ba57fd00f90ee</td>
                <td>HNY</td>
                <td>0.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section
        className={style.container + ' ' + style['discussion--container']}
      >
        <div>
          <h2 className='discussion-board__title'>Discussion Board</h2>
        </div>
        <DiscussionBoard />
      </section>
    </main>
  );
};

export default SpecificDonation;
