import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation/Navigation';
import Search from 'components/Search/Search';
import { linkToHome, linkToSearch } from 'constants/routes';
import { translate as t } from 'i18n/translate';
import logoImg from 'assets/images/farfetch-logo.svg';

import classes from './Header.module.scss';

class Header extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  state = {
    value: '',
  }

  handleSearchChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSearchSubmit = (e) => {
    console.log('Submit query:', this.state.value);

  }

  render() {
    const routerParams = this.props.match.params || {};
    const gender = routerParams.gender || '';
    //---------------
    const querySearch = this.state.value;
    const searchUrl = linkToSearch(querySearch, gender);
    //-------------

    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.rows}>
            <div className={classes.row1}>
              <div className={classes.navigation}>
                <Navigation activeGender={gender} />
              </div>
              <Link className={classes.logo} to={ linkToHome() }>
                <img src={ logoImg } alt={ t('HeaderLogoAlt') } />
              </Link>
              <div className={classes.shortcuts}>
                links
              </div>
            </div>
            <div className={classes.row2}>
              <div className={classes.message}>
                { t('HeaderMissingGender') }
              </div>
              <div className={classes.search}>
                <Link to={ searchUrl }>
                  <Search
                    value={this.state.value}
                    placeholder=""
                    onChange={this.handleSearchChange}
                    onSubmit={this.handleSearchSubmit}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// pass match, location and history props from react-router to the Header component
export default withRouter(Header);
