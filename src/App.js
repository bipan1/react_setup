import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import PrivateRoute from './utils/routes/PrivateRoutes';
import {appRoutes} from "./utils/routes";

class App extends React.Component{
  render(){
    return (
      <HashRouter>
          <PrivateRoute appRoutes={appRoutes} />
      </HashRouter>
    );
  }
}

export default App;
