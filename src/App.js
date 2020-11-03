import React from "react";
import "./App.css";
import Layout from "./component/Layout";
import ItemContainer from "./component/ItemContainer";
import Country from "./component/Country.jsx";
import { Route,Switch, } from "react-router-dom";

// function Details({match}) {
//   console.log(match);
//   return (
//     <h1>{match.params.country}</h1>
//   )
// }
function App() {
  return (
    <>
        {/* <Link to="/"></Link>
        <Link to="/country"></Link> */}
  
      
      
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
