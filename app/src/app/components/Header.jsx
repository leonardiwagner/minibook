import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
  render(){
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1>minibook</h1>
          </div>
          <div className='navbar-text navbar-right'>
            <img src='http://i.imgur.com/H357yaH.jpg' width='50' height='50' />
            Josué
          </div>
        </div>
      </nav>;
  }
}

export default Header;