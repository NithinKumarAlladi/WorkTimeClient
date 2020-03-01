import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { HashRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
