import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import Articles from '../Articles/Articles'
import Article from '../Article/Article'
import Category from "../Category/Category";


function App() {
  return (
  <div className="App"> 
    <Nav />
    <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
    </Switch>


  </div>
  );
}

export default App;

