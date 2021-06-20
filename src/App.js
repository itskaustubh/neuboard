import React from 'react'
import './App.scss';
import Navbar from './components/layout/navbar'
import Home from './components/dashboard/Home'
import Dashboard from './components/dashboard/dashboard'
import WriteMessage from './components/projects/writeMessage'
import { Switch,Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import {toast} from 'react-toastify'


function App() {
  // toast.info('Message sent!',{autoClose : 600000})
  return (
    <Router basename='/'>
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/add' component={WriteMessage}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
