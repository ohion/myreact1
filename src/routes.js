import {Route,Switch} from 'react-router-dom';  
import AAA from './a';
import BBB from './b';
import Login from './login';
import Index from './pages/index/index.js'
import Mine from './pages/mine/index.js'
export default (store)=>{
    return (
    <Route path="/" component={Index}>
          <Route path="/a" exact component={()=>(<AAA/>)} />
            <Route path="/b" exact component={()=>(<BBB/>)} />
            <Route path="/login" exact component={()=>(<Login/>)} />
            <Route path='/' exact component={Index}></Route>
            <Route path='/mine' exact component={Mine}></Route>
            <Route path='/detail/:id' exact component={Index}></Route>
    </Route>
    )
          
       
        
    
}