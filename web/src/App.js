import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
 
import './App.css';
import rootReducer from './reducers/index'

import HomePage from './containers/HomePage/index';
import Products from './containers/Products/index';
import NotFound from './components/NotFound';
import Navigation from './containers/Navigation/index';


const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>	
            <Navigation />
            <main className="main-content">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/products/:category" component={Products}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
