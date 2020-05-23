import React from 'react';
import MyFood from './Components/MyFood';
import About from './Components/About';
import Contact from './Components/Contact';
import MyCart from './Components/MyCart';
import SignIn from './Components/SignIn'
import {BrowserRouter, Route ,Switch} from 'react-router-dom';

const App = ()=> {
  
  return (
      <BrowserRouter>
         <Switch>
         <Route path='/' exact component={MyFood}/>
         <Route path='/About' component={About}/>
         <Route path='/Contact' component={Contact}/>
         <Route path='/MyCart' component={MyCart}/>
         <Route path='/Singin' component={SignIn}/>
         </Switch>
      </BrowserRouter>
  );
}

export default App;
