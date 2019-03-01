import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Product from '../Product/Product';
import NotFound from '../NotFound/NotFound';
import Components from '../Components/Components';


import classes from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/products">Catalog</Link>&nbsp;
              <Link to="/products/50">Product#50</Link>&nbsp;
              <Link to="/404">Not Found</Link>&nbsp;
              <Link to="/components">Components</Link>&nbsp;
            </nav>
            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Catalog} />
              <Route exact path="/products/:id" component={Product} />
              <Route exact path="/components" component={Components} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
