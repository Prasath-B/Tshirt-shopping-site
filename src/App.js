import React from 'react';
// import Navbar from "./components/Navbar";
// import Product from "./components/Product";
// import Gif from "./components/Gif";
// import Cart from "./components/cart";
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from './components/Router';

import {Provider} from "react-redux";
import store from "./redux/Store"


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes/>
    </Router>
    </Provider>
    
      
    
    
  );
}

export default App;
