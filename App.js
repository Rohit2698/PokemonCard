import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router';
import Homepage from './Component/Homepage/Homepage';
import Start from './Component/Start/Start';
//import Prac from './prac';
//import store from './Redux/QuestionCorrect/store';
//import {Provider} from 'react-redux';
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/pokestart" component={Start}/>   
      </Switch>
      
    </>
  );
}

export default App;
