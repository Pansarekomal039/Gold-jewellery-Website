import React from 'react';
import "./Header.css";
function Header() {
  return (
  <div className='header'>
      <img className='header_logo'
        src="amazon_logo.png" alt=""></img>
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className="Header_searchIcon" />
      </div>
    <div className='header_nav'>
        <div className='header_option'>
          <span
            className='header_optionTwo'>Hello</span>
          <span
            className='header_optionTwo'>Sign In</span>
        </div>
        <div className='header_option'>
          <span
            className='header_optionTwo'>Returns</span>
          <span
            className='header_optionTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span
            className='header_optionTwo'>Your</span>
          <span
            className='header_optionTwo'>Prime</span>
        </div>
      </div>
      </div>
  );
}
export default Header