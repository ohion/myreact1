import React from 'react';
// import { Router, Route, Link } from 'react-router'
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  
import AAA from './a';
import BBB from './b';
import Login from './login';
import Sider from './components/sidebar'
import Nav from './components/nav'
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>  
          <div className="sidebar">
            <Sider/>
          </div>
          <div className="nav"><Nav/></div>
          <div className="main">
            <Switch>
              <Route path="/a" exact component={()=>(<AAA/>)} />
              <Route path="/b" exact component={()=>(<BBB/>)} />
              <Route path="/login" exact component={()=>(<Login/>)} />
          </Switch>
          </div>
          
      </BrowserRouter> 
    </div>
  );
}

export default App;
