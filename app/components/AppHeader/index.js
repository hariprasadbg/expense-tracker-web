import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../../assets/styles/components/AppHeader.scss';
import happyFox from '../../../assets/images/happyfox.svg';

const AppHeader = props => {
  const { firstName, lastName } = props;
  return (
    <header className="app-header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
        <a className="navbar-brand" href="/hello">
          <img src={happyFox} alt="HappyFox" className="theme-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-credit-card" aria-hidden="true" />Expense
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  to="/"
                ><i className="fa fa-plus" aria-hidden="true" />
                Create Expense
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/"
                ><i className="fa fa-calculator" aria-hidden="true" />Track Expense
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              ><i className="fa fa-list-alt" aria-hidden="true" />
              Category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              ><i className="fa fa-user" aria-hidden="true" />
              Profile
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="user-title">Hi, {`${firstName} ${lastName}`}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};

AppHeader.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

AppHeader.defaultProps = {
  firstName: '',
  lastName: ''
};

export default AppHeader;