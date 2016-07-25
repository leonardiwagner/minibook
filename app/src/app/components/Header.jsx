import React from 'react';
import {render} from 'react-dom';
import connectToStores from 'alt-utils/lib/connectToStores';

import UserStore from '../stores/UserStore';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  static getStores() {
    return [ UserStore ];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  render(){
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1>minibook</h1>
          </div>
          <div className='navbar-text navbar-right'>
            <img src={this.props.user.img} width='50' height='50' />
            {this.props.user.name}
          </div>
        </div>
      </nav>;
  }
}

export default connectToStores(Header);