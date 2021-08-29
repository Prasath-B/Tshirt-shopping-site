import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Cart from './cart/cart';
import Gif from './Gif';
import Navbar from './Navbar';
import Product from './Product';
import Error from "./Error"



function Routes(){
    return <Router>
        <Switch>
        <Route exact path="/">
         <Navbar />
          <Gif />
          <Product />
        </Route>
          <Route exact path='/cart' >
            <Cart />
          </Route>
          <Route path = "*">
          <Error/>
          </Route>
            
        </Switch>
        
    </Router>
}

export default Routes;