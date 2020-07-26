import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route} from 'react-router-dom';  
import AAA from './a';
import BBB from './b';
import Login from './pages/Login/login';
import Index from './pages/index.js'
import Mine from './pages/mine/index.js'
import Detail from './pages/detail'
import './App.css'
// import createStore from './redux/create';

// const store = createStore(_browserHistory, client, window.__data);
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>  
          
            {/* <Router history={customHistory}> */}
              <Route path='/' exact component={Index}></Route>
              {/* <IndexRoute component={Index}></IndexRoute> */}

              <Route exact path="/a" component={()=>(<AAA/>)} />
              <Route exact path="/b" component={()=>(<BBB/>)} />
              <Route exact path="/login" component={()=>(<Login/>)} />
              <Route path='/mine' exact component={Mine}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            {/* </Router> */}
          
      </BrowserRouter> 
    </div>
  );
}

export default App;
