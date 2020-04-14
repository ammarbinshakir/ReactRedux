import React from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import './App.css';
import store from "./redux/store";
import UsersTableComponent from "./components/UserTableComponent";
import UserForm from "./components/UserFormComponent";
import NavbarComponent from "./components/NavbarCmponent";
import UserDetailComponent from "./components/UserDetailComponent";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Provider store={store} >
    <div className="App">
      <Router>
        <div className="App">
          <NavbarComponent/>
          <Switch>
            <Route path="/" exact component={UsersTableComponent} />
            <Route path="/userform" component={UserForm} />
            <Route path="/usertable" component={UsersTableComponent}/>
            <Route path="/userdetail" component={UserDetailComponent}/>
            <Route path="/userform/:id" component={UserForm}/>
            <Route path="/userdetail/:id" component={UserDetailComponent}/>
          </Switch>
        </div>
      </Router>
    </div>
      </Provider>
  );
}

export default App;
