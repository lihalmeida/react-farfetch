import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom"; 

import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Product from '../Product/Product';
import NotFound from '../NotFound/NotFound';


import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Catalog</Link>
              </li>
              <li>
                <Link to="/products/50">Product#50</Link>
              </li>
              <li>
                <Link to="/404">Not Found</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Catalog} />
              <Route exact path="/products/:id" component={Product} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
