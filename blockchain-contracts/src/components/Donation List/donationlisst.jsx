import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap';
import donationListCSS from './donationList.module.css';
import data from '../data/test.json';
import Pagination from '../pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InfiniteScroll from 'react-infinite-scroll-component';

/*donation list would be fetch from server, currently using test.json to test*/
const options = [
  { sortBy: ['Name', 'Funds', ''] },
  { category: ['A', 'B', 'C', ''] },
];
function Donationlist() {
  const [state, setState] = useState({
    donations: data.donations,
    keyword: '',
    page: 1,
    options: {
      sortBy: '',
      category: '',
    },
  });

  useEffect(() => {
    console.log('category: ' + state.options.category);
    console.log('Sortby: ' + state.options.sortBy);
    console.log('Keyword: ' + state.keyword);
  });

  useEffect(() => {
    handleChange();
  }, [state.options, state.keyword]);

  useEffect(() => {
    //similar to compomentDidMount()
    //Fetch data from sever
  }, []);

  function updateKeyword(e) {
    setState((prev) => ({
      ...prev,
      keyword: e.target.value,
    }));
  }

  function updateOptions(val, e) {
    const value = val;
    const type = e.target.dataset.type;
    setState((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [type]: value,
      },
    }));
  }

  function sortingNum(x, y) {
    if (x.Funds < y.Funds) {
      return -1;
    }
    if (x.Funds > y.Funds) {
      return 1;
    }
    return 0;
  }

  function createRow() {
    //return array of rows
    const rows = [];
    for (let i = 0; i < state.donations.length; i += 4) {
      //ever 4 items a row
      rows.push(
        <div className='row' style={{ marginBottom: '1rem' }}>
          {donationMapping(i)}
        </div>
      );
    }
    return rows;
  }

  function donationMapping(start) {
    let sliced = [];
    if (start + 4 > state.donations.length) {
      sliced = state.donations.slice(start, -1);
    } else {
      sliced = state.donations.slice(start, start + 4);
    }

    const list = sliced.map((item, index, array) => {
      return (
        <div className='col-3 '>
          <div
            className='card '
            style={{
              backgroundColor: '#4873b5',
              width: '100%',
              borderRadius: '30px',
            }}
          >
            <img src='...' className='card-img-top' alt='...' />
            <div className='card-body' style={{}}>
              <h5 className='card-title' style={{ color: 'white' }}>
                {item.title}
              </h5>
              <p className='card-text' style={{ color: 'white' }}>
                {item.Funds}
              </p>
              <div class='progress'>
                <div
                  class='progress-bar'
                  role='progressbar'
                  style={{ backgroundColor: '#c4dbff', width: '25%' }}
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  25%
                </div>
              </div>
              <p className='card-text' style={{ color: 'white' }}>
                {item.category}
              </p>
              <a
                href='#'
                className='btn btn-primary'
                style={{ backgroundColor: '#c4dbff' }}
              >
                {item.pageUrl}
              </a>
            </div>
          </div>
        </div>
      );
    });
    console.log(list);
    return list;
  }

  function sortingString(s1, s2) {
    let x1 = s1.title.toUpperCase();
    let x2 = s2.title.toUpperCase();
    if (x1 < x2) {
      return -1;
    }
    if (x1 > x2) {
      return 1;
    }
    return 0;
  }

  function fetchDonation() {
    let newlist = state.donations.concat(data.donations);
    setState((pre) => ({ ...pre, donations: newlist, page: pre.page + 1 }));
  }

  function handleChange() {
    const condition = {
      title: state.keyword,
      category: state.options.category,
    };
    const sorting = state.options.sortBy;
    const newlist = data.donations.filter((donation) => {
      for (const property in condition) {
        if (condition[property] === '') {
          //if the option has no value
          continue;
        } else {
          if (property === 'title') {
            const dTitle = donation[property].toUpperCase();
            const cTitle = condition[property].toUpperCase();
            if (dTitle.includes(cTitle) === false) {
              return false;
            }
          } else if (donation[property] !== condition[property]) {
            return false;
          }
        }
      }
      return true;
    });
    if (sorting !== '') {
      if (sorting === 'Name') {
        newlist.sort(sortingString);
      }
      if (sorting === 'Funds') {
        newlist.sort(sortingNum);
      }
    }
    setState((pre) => ({ ...pre, donations: newlist }));
  }

  return (
    <React.Fragment>
      <div className='container-fluid' id={donationListCSS.container}>
        <div
          classNam='row justify-content-md-center'
          id={donationListCSS.header}
        >
          <div className='col-8'>
            <h1>Find something to donate to...</h1>
          </div>
          <div className='col-3'>
            {' '}
            <button
              type='button'
              className='btn btn-light'
              id={donationListCSS.projectbtn}
            >
              submit your project
            </button>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <nav className='navbar' id={donationListCSS.list}>
            <span>
              {' '}
              <form className='d-flex'>
                <div className='form-group has-search'>
                  <span
                    className={
                      'fa fa-search' + ' ' + donationListCSS.formcontrolfeedback
                    }
                  ></span>
                  <input
                    className='form-control'
                    id={donationListCSS.formcontrol}
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    onChange={(e) => updateKeyword(e)}
                  />
                </div>
              </form>
            </span>
            <div className='btn-group' id='droplist'>
              <button
                className='btn btn-light dropdown-toggle'
                href='#'
                role='button'
                id='dropdownMenuLink'
                data-bs-toggle='dropdown'
                aria-
                expanded='false'
              >
                CATEGORY
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuLink'
                name='CATEGORY'
              >
                {options[1].category.map((item) => {
                  return (
                    <li
                      style={{ float: 'none' }}
                      name={item}
                      onClick={(e) => {
                        updateOptions(item, e);
                      }}
                    >
                      <a
                        className='dropdown-item'
                        href='#'
                        data-type='category'
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='btn-group'>
              <button
                className='btn btn-light  dropdown-toggle'
                href='#'
                role='button'
                id='dropdownMenuLink'
                data-bs-toggle='dropdown'
                aria-
                expanded='false'
              >
                Sortby
              </button>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                {options[0].sortBy.map((item) => {
                  return (
                    <li
                      style={{ float: 'none' }}
                      name={item}
                      onClick={(e) => {
                        updateOptions(item, e);
                      }}
                    >
                      <a className='dropdown-item' href='#' data-type='sortBy'>
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
        <div className='main container-fluid'>
          <InfiniteScroll
            dataLength={state.donations.length} //This is important field to render the next data
            next={fetchDonation}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {createRow()}
          </InfiniteScroll>
        </div>

        <Pagination />
      </div>
    </React.Fragment>
  );
}

export default Donationlist;
