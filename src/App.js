import React from "react";
import "./App.css";
import Layout from "./component/Layout";
import ItemContainer from "./component/ItemContainer";
import Country from "./component/Country.jsx";
import { Route,Switch, } from "react-router-dom";


function App() {
  return (
    <>
  
    <Switch>
      <Route exact path="/">
        <Layout>
          <ItemContainer />
        </Layout>
        </Route>
        <Route path="/:country" component={Country}/>
    </Switch>
    </>
  );
}

export default App;
