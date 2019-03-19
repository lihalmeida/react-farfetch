import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from 'containers/Home/Home';
import Catalog from 'containers/Catalog/Catalog';
import SearchResults from 'containers/SearchResults/SearchResults';
import Product from 'containers/Product/Product';
import NotFound from 'containers/NotFound/NotFound';
import Components from 'containers/Components/Components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer.jsx';
import { ROUTER_PATHS } from 'constants/routes';

import classes from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path={ROUTER_PATHS.search} component={Header} />
              <Route exact path={ROUTER_PATHS.shopping} component={Header} />
              <Route exact path={ROUTER_PATHS.product} component={Header} />
              <Route component={Header} />
            </Switch>
            <main className={classes.main}>
              <Switch>
                <Route exact path={ROUTER_PATHS.home} component={Home} />
                <Route exact path={ROUTER_PATHS.search} component={SearchResults} />
                <Route exact path={ROUTER_PATHS.shopping} component={Catalog} />
                <Route exact path={ROUTER_PATHS.product} component={Product} />
                <Route exact path={ROUTER_PATHS.ui} component={Components} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
