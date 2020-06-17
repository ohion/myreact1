import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter} from 'react-router-dom'
import Mine from './pages/mine/index.js'
// let Mine = ()=>{import('./pages/mine')}
import Index from './pages/index/index.js'
// let Index = ()=>{import('./pages/index')}

ReactDOM.render(
  <React.StrictMode>
  {/* <Switch> */}
  <BrowserRouter>
    <div>
      <Route path='/' exact component={Index}>
        
      </Route>
      <Route path='/mine' exact component={Mine}>

      </Route>

      <Route path='/detail/:id' exact component={Index}></Route>
    </div>
  </BrowserRouter>

  {/* </Switch> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
