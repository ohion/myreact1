import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  
import AAA from './a';
import BBB from './b';
import Login from './login';
import Index from './pages/index/index.js'
import Mine from './pages/mine/index.js'

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
              <Route path='/' exact component={Index}></Route>
              <Route path='/mine' exact component={Mine}></Route>
              <Route path='/detail/:id' exact component={Index}></Route>
          </Switch>
          </div>
          
      </BrowserRouter> 
    </div>
  );
}

export default App;
