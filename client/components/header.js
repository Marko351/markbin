import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, withRouter } from 'react-router-dom';


class Header extends Component {
  onBinClick = (e) => {
    Meteor.call('bins.insert', (error, binId) => {
      console.log()
      this.props.history.push(`/bins/${binId}`) // push url into address bar
    });

    e.preventDefault();
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header);