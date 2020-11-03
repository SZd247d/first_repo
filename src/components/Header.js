import React from 'react';

export const Header = () => {
  return (
    <div className='heading-style'>
      <div>
        <h2>Hello Zaki</h2>
        <h3>Your Expense Tracker</h3>
      </div>
      <div>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/zakisellali/first_repo'>
          Code on Github{'  '}
          <i className='fab fa-github fa-2x'></i>
        </a>
      </div>
    </div>
  );
};
