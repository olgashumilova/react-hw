import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Exs1 from './components/Ex1'
import Exs2 from './components/Ex2'
import Exs3 from './components/Ex3'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button> <Link to="/">Ex1</Link> </button>
            </li>
            <li>
              <button> <Link to="/Ex2">Ex2</Link> </button>
            </li>
            <li>
              <button> <Link to="/Ex3">Ex3</Link> </button>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/Ex2">
            <Ex2 />
          </Route>

          <Route path="/Ex3">
            <Ex3 />
          </Route>

          <Route path="/">
            <Ex1 />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Ex1() {
  return (
    <div className='container'>
      <Exs1 />
    </div>)
}

function Ex2() {
  return (
    <div className='container'>
      <Exs2 text = "Lorem ipsum dolor"/>
    </div>)
}

function Ex3() {
  return (
    <div className='container'>
      <Exs3 label='Big square' cssClass='big-square'/>
      <Exs3 label='Medium square' cssClass='medium-square'/>
      <Exs3 label='Small square' cssClass='small-square'/>
    </div>)
}