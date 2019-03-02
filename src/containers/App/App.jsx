import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from 'containers/Home/Home';
import Catalog from 'containers/Catalog/Catalog';
import Product from 'containers/Product/Product';
import NotFound from 'containers/NotFound/NotFound';
import Components from 'containers/Components/Components';
import Header from 'components/Header/Header';

import classes from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <main className={classes.main}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Catalog} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/components" component={Components} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
