import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/main" component={Main} />
      <Route path="/keys" component={Main} />
      <Route path="/present" component={Main} />
      <Route path="/person" component={Main} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

