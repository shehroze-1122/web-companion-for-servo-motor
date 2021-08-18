import React, { Fragment } from 'react'
import './App.css';
import Sidebar from '../components/Sidebar.js';
import Home from '../components/Home';
import 'tachyons';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



function App() {
  return (
    <Fragment>
      <Router>
        <div className="fl w-10 pa2">
          <Sidebar/>
        </div>
        <div className="fl w-90 pa2">
          <Switch>
            <Route path="/" exact component = {()=><Home/>}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>

  )
}

export default App;
